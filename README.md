# Qwiklabs Developer Club SRM - Demon Slayer Themed Website 🌸🔥⚔️

This repository contains:
- Static website (HTML, CSS, JS)  
- Nginx configuration for deployment  
- Documentation of the entire process  

---

## 1. VM Creation (AWS EC2)

1. Logged into **AWS Management Console**.
2. Went to **EC2 → Launch Instance**.
3. Chose **Ubuntu 22.04 LTS AMI**.
4. Selected **t2.micro (Free Tier Eligible)**.
5. Configured:
   - Key Pair for SSH.
   - Security Group with:
     - Port 22 (SSH) - My IP
     - Port 80 (HTTP) - 0.0.0.0/0, ::/0
6. Launched instance and noted the **Public IPv4**.

<img width="1663" height="236" alt="Screenshot From 2025-08-25 23-17-57" src="https://github.com/user-attachments/assets/9fada205-6d5d-4e8a-bf79-48550702820b" />


---

## 2. Web Server Installation (Nginx)

SSH into the VM:
```bash
ssh -i "my-key.pem" ubuntu@<PUBLIC_IP>

---

## 2. Web Server Installation (Nginx)

