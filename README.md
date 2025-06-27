# Deploy React Vite App to AWS S3

> Simple guide to deploy your React app to the web using AWS S3

## 🚀 What We'll Do

Deploy your React Vite app to AWS S3 so anyone can visit it online. When you push code to GitHub, it automatically updates your website!

## 📋 What You Need

- ✅ React Vite project
- ✅ GitHub account 
- ✅ AWS account (free tier is fine)

## Step 1: Create S3 Bucket

1. Go to [AWS S3 Console](https://s3.console.aws.amazon.com/)
2. Click **"Create bucket"**
3. **Bucket name:** `my-react-app-website` (must be unique)
4. **Region:** US East (N. Virginia) us-east-1
5. Click **"Create bucket"**

## Step 2: Make Your Bucket a Website

1. Click on your bucket name
2. Go to **Properties** tab
3. Scroll down to **"Static website hosting"**
4. Click **"Edit"**
5. Select **"Enable"**
6. **Index document:** `index.html`
7. **Error document:** `index.html`
8. Click **"Save changes"**

## Step 3: Make Your Website Public

### Allow Public Access
1. Go to **Permissions** tab
2. Find **"Block public access"**
3. Click **"Edit"**
4. **Uncheck all 4 boxes**
5. Click **"Save changes"**
6. Type `confirm`

### Add Permission Policy
1. Still in **Permissions** tab
2. Find **"Bucket policy"**
3. Click **"Edit"**
4. Copy and paste this (replace `YOUR-BUCKET-NAME`):

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::YOUR-BUCKET-NAME/*"
        }
    ]
}
```

5. Click **"Save changes"**

## Step 4: Create AWS User for GitHub

1. Go to [AWS IAM Console](https://console.aws.amazon.com/iam/)
2. Click **"Users"** → **"Create user"**
3. **User name:** `github-deployer`
4. Click **"Next"**
5. Select **"Attach policies directly"**
6. Search and check **"AmazonS3FullAccess"**
7. Click **"Next"** → **"Create user"**
8. Click on the user you just created
9. Go to **"Security credentials"** tab
10. Click **"Create access key"**
11. Choose **"Application running outside AWS"**
12. Click **"Next"** → **"Create access key"**
13. **Save both keys** (you'll need them soon!)

## Step 5: Setup GitHub Secrets

1. Go to your GitHub repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **"New repository secret"**
4. Add these 3 secrets:

| Name | Value |
|------|-------|
| `AWS_ACCESS_KEY_ID` | Your access key from step 4 |
| `AWS_SECRET_ACCESS_KEY` | Your secret key from step 4 |
| `S3_BUCKET_NAME` | Your bucket name (e.g., `my-react-app-website`) |

## Step 6: Create GitHub Action

1. In your project, create folder: `.github/workflows/`
2. Create file: `.github/workflows/deploy.yml`
3. Copy this code:

```yaml
name: Deploy to S3

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '20'
        cache: 'npm'
    
    - name: Install and build
      run: |
        npm ci
        npm run build
    
    - name: Deploy to S3
      uses: aws-actions/configure-aws-credentials@v4
      with:
        aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
        aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
        aws-region: us-east-1
    
    - name: Upload to S3
      run: aws s3 sync dist/ s3://${{ secrets.S3_BUCKET_NAME }} --delete
```

## Step 7: Deploy!

1. **Commit and push** your code to GitHub
2. Go to **Actions** tab in your GitHub repo
3. Watch your deployment happen! 🎉
4. When it's done, go to your S3 bucket
5. In **Properties** → **Static website hosting**, click your **website URL**

## 🎉 You're Live!

Your React app is now online! Every time you push to the `main` branch, it will automatically update your website.

## 📱 Easy Alternatives

If AWS feels complicated, try these free options:

### Netlify (Easiest)
1. Go to [netlify.com](https://netlify.com)
2. Connect your GitHub repo
3. Done! Auto-deploys on every push

### Vercel  
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repo
3. Done! Auto-deploys on every push

## 🔧 Common Problems

**❌ 403 Error?**
- Check that Block Public Access is disabled
- Make sure bucket policy has the right bucket name

**❌ GitHub Action fails?**
- Check your AWS secrets are correct
- Make sure `npm run build` works locally

**❌ Website shows old version?**
- Hard refresh your browser (Ctrl+Shift+R)
- Wait a few minutes for updates

---

**Happy coding! 🚀**
