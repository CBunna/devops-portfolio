Complete Guide: Deploying React Vite Apps to AWS S3
Table of Contents

Overview
Prerequisites
AWS S3 Setup
GitHub Actions Workflow
Vite Configuration
Deployment Process
Alternative Platforms
Troubleshooting
Best Practices

Overview
This guide covers deploying a React Vite application to AWS S3 using GitHub Actions for continuous deployment. You'll learn how to configure S3 for static website hosting, set up automated deployments, and manage costs effectively.
What You'll Build

Automated deployment pipeline
Static website hosting on S3
Proper cache configuration

Prerequisites
Required Tools

Node.js (v18 or v20)
GitHub account
AWS account
React Vite project

Required Knowledge

Basic React/JavaScript
Git fundamentals
Basic AWS concepts

AWS S3 Setup
Step 1: Create S3 Bucket

Login to AWS Console
Navigate to S3
Create bucket:

Name: your-app-name-deployment (must be globally unique)
Region: us-east-1 (cheapest)
Keep other defaults



Step 2: Configure Static Website Hosting

Go to bucket → Properties tab
Scroll to "Static website hosting"
Click "Edit"
Configure:
Static website hosting: Enable
Index document: index.html
Error document: index.html

Save changes
Note the website endpoint URL

Step 3: Configure Public Access
Disable Block Public Access

Permissions tab → Block public access
Click "Edit"
Uncheck all 4 options:

☐ Block all public ACLs
☐ Ignore public ACLs
☐ Block public bucket policies
☐ Block cross-account access


Save changes → Type "confirm"

Add Bucket Policy

Permissions tab → Bucket policy
Click "Edit"
Add this policy:
json{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::YOUR_BUCKET_NAME/*"
        }
    ]
}

Replace YOUR_BUCKET_NAME with your actual bucket name
Save changes

Step 4: Create IAM User for GitHub Actions

IAM Console → Users → Create user
Username: github-actions-s3-deploy
Attach policies directly:

AmazonS3FullAccess (or create custom policy for specific bucket)


Create user
Security credentials → Create access key
Choose "Application running outside AWS"
Save Access Key ID and Secret Access Key

GitHub Actions Workflow
Step 1: Add Secrets to GitHub Repository

GitHub repo → Settings → Secrets and variables → Actions
Add repository secrets:
AWS_ACCESS_KEY_ID: [Your access key]
AWS_SECRET_ACCESS_KEY: [Your secret key]
S3_BUCKET_NAME: [Your bucket name]


Step 2: Create Workflow File
Create .github/workflows/deploy.yml:
yamlname: Deploy to AWS S3

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v4
      
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '20'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build application
      run: npm run build
      
    - name: Configure AWS Credentials
      uses: aws-actions/configure-aws-credentials@v4
      with:
        aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
        aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
        aws-region: us-east-1
        
    - name: Deploy to AWS S3
      run: |
        # Upload assets with long cache
        aws s3 sync dist/ s3://${{ secrets.S3_BUCKET_NAME }} --delete \
          --cache-control "public,max-age=31536000,immutable" \
          --exclude "*.html" \
          --exclude "*.json"
        
        # Upload HTML with no cache
        aws s3 sync dist/ s3://${{ secrets.S3_BUCKET_NAME }} \
          --cache-control "public,max-age=0,must-revalidate" \
          --include "*.html" \
          --include "*.json"
Vite Configuration
Basic Vite Config
Ensure your vite.config.js is properly configured:
javascriptimport { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // Use '/' for root domain deployment
  build: {
    outDir: 'dist',
    sourcemap: false, // Disable for production
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom']
        }
      }
    }
  }
})
Environment Variables
Create .env.production:
VITE_API_URL=https://your-api.com
VITE_APP_ENV=production
Deployment Process
Manual Deployment
bash# Build the application
npm run build

# Deploy using AWS CLI
aws s3 sync dist/ s3://your-bucket-name --delete
Automated Deployment

Push code to main branch
GitHub Actions automatically:

Installs dependencies
Builds the application
Deploys to S3
Sets appropriate cache headers



Verify Deployment

Check GitHub Actions tab for build status
Visit your S3 website endpoint
Test all routes (if using React Router)

Alternative Platforms
Alternative Deployment Options
1. Netlify (Recommended)
bash# Install Netlify CLI
npm install -g netlify-cli

# Deploy
npm run build
netlify deploy --prod --dir=dist
Benefits:

✅ Easy custom domains
✅ Built-in form handling
✅ Edge functions

2. Vercel
bash# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
Benefits:

✅ Optimized for React/Next.js
✅ Automatic deployments
✅ Edge network
✅ Zero configuration

3. GitHub Pages
yaml# .github/workflows/gh-pages.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-node@v4
      with:
        node-version: '20'
        cache: 'npm'
    - run: npm ci
    - run: npm run build
    - uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
**Benefits:**
- ✅ Great for open source projects
- ✅ Integrated with GitHub workflow
- ✅ Custom domains supported
- ✅ Simple setup

### When to Use Each Platform

| Platform | Best For |
|----------|----------|
| **Netlify** | Learning, portfolios, small apps |
| **Vercel** | React/Next.js apps, serverless |
| **GitHub Pages** | Open source projects, docs |
| **AWS S3** | Production apps, learning AWS |

## Troubleshooting

### Common Issues

#### 1. 403 Access Denied
**Problem:** Bucket not configured for public access
**Solution:**
- Disable Block Public Access
- Add bucket policy
- Verify bucket name in policy

#### 2. 404 Not Found for Routes
**Problem:** React Router not configured properly
**Solution:**
- Set error document to `index.html`
- Configure client-side routing

#### 3. GitHub Actions Failed
**Problem:** Missing or incorrect secrets
**Solution:**
- Verify AWS credentials in GitHub secrets
- Check IAM permissions
- Review workflow syntax

#### 4. Build Fails
**Problem:** Dependencies or environment issues
**Solution:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Check for build errors locally
npm run build
5. Files Not Updating
Problem: Browser cache or incorrect cache headers
Solution:

Hard refresh (Ctrl+Shift+R)
Check cache-control headers
Clear browser cache

Debug Steps

Check build output:
bashnpm run build
ls -la dist/

Verify S3 sync:
bashaws s3 ls s3://your-bucket-name --recursive

Test website endpoint:
bashcurl -I http://your-bucket.s3-website-us-east-1.amazonaws.com

Check CloudWatch logs (if using CloudFront)

Best Practices
Security

Use least-privilege IAM policies
Rotate access keys regularly
Enable MFA on AWS account
Don't commit secrets to Git

Performance

Use appropriate cache headers
Compress assets before upload
Consider CloudFront for global apps
Optimize images and assets

Development Workflow

Test builds locally before push
Use feature branches
Set up staging environment
Monitor deployment status

Conclusion
This guide provides a complete setup for deploying React Vite applications to AWS S3. For learning purposes, consider starting with free alternatives like Netlify or Vercel, then graduate to AWS when you need more control or are learning AWS specifically.
Quick Reference
Essential Commands
bash# Build application
npm run build

# Deploy to S3
aws s3 sync dist/ s3://bucket-name --delete

# Check deployment
aws s3 ls s3://bucket-name --recursive
Important URLs

S3 Console: https://s3.console.aws.amazon.com/
IAM Console: https://console.aws.amazon.com/iam/
GitHub Actions: https://github.com/your-username/your-repo/actions
