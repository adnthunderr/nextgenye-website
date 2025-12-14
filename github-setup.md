# GitHub SSH Setup for Multiple Accounts

This guide explains how to configure SSH for multiple GitHub accounts on Windows, allowing you to switch between accounts seamlessly for different repositories.

## Prerequisites

- Git installed on your system
- Multiple GitHub accounts
- SSH keys generated for each account

## Step 1: Generate SSH Keys (if not already done)

For each GitHub account, generate a unique SSH key:

```bash
ssh-keygen -t rsa -b 4096 -C "your-email@example.com" -f ~/.ssh/id_rsa_account_name
```

Replace `account_name` with a descriptive name (e.g., `aryan`, `work`, etc.).

## Step 2: Add SSH Keys to ssh-agent

Start the ssh-agent and add your keys:

```bash
# Start ssh-agent
eval $(ssh-agent -s)

# Add each key
ssh-add ~/.ssh/id_rsa_aryan
ssh-add ~/.ssh/id_rsa_other_account
```

## Step 3: Configure SSH Config File

Edit or create the file `C:\Users\YourUsername\.ssh\config` (create if it doesn't exist):

```
# Default GitHub account (if you have one)
Host github.com
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_rsa_default

# Aryan account
Host github-aryan
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_rsa_aryan

# Add more accounts as needed
Host github-work
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_rsa_work
```

## Step 4: Add SSH Keys to GitHub Accounts

1. Copy the public key content:
   ```bash
   cat ~/.ssh/id_rsa_aryan.pub
   ```

2. Go to GitHub.com → Settings → SSH and GPG keys → New SSH key

3. Paste the public key and save

Repeat for each account.

## Step 5: Configure Repository Remote

For repositories using a specific account, update the remote URL:

```bash
# For this repository (nextgenye-website)
git remote set-url origin git@github-aryan:adnthunderr/nextgenye-website.git

# For other repos, use the appropriate host alias
git remote set-url origin git@github-work:workusername/repo.git
```

## Step 6: Test the Connection

Test each SSH connection:

```bash
ssh -T github-aryan
ssh -T github-work
```

You should see: "Hi username! You've successfully authenticated..."

## Current Repository Configuration

This repository (`nextgenye-website`) is currently configured to use the `github-aryan` account:

- Remote origin: `git@github-aryan:adnthunderr/nextgenye-website.git`

## Troubleshooting

- If you get "Permission denied", ensure the correct SSH key is added to the GitHub account
- If keys aren't persisting, add `ssh-add` commands to your PowerShell profile
- For Windows, ensure you're using Git Bash or WSL for SSH commands if needed

## Notes

- The `Host` in `.ssh/config` is an alias you create
- Use this alias in your git remote URLs instead of `github.com`
- Each repository can use a different account by setting the appropriate remote URL