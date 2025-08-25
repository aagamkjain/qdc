Demonstrate your ability to provision, configure, and deploy a static website by hosting it exclusively on a cloud Virtual Machine (VM) instance. This exercise evaluates your technical depth, problem-solving skills, and ability to take end-to-end ownership of a deployment scenario.


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
```

to update packages - 
``` bash
sudo apt update && sudo apt upgrade -y
```
to update - sudo apt update && sudo apt upgrade -y

to install nginx - sudo apt install nginx -y

to check status - sudo systemctl status nginx

<img width="1457" height="839" alt="Screenshot From 2025-08-25 23-25-53" src="https://github.com/user-attachments/assets/f3ad8746-4598-4815-b7f0-d10a7deb6e14" />


and i have also edited soeme inbound rules to http because running it on http protocol - http://3.27.14.181/


also to check your status first allow nginx full and enable and ceck status 
```
sudo ufw allow 'Nginx Full'
sudo ufw enable
sudo ufw status
```
<imgwidth="779" height="333" alt="Screenshot From 2025-08-25 23-28-42" src="https://github.com/user-attachments/assets/1498b165-f006-4341-b269-bd4607d17342" />

try to create the folders and files and this manner altough can be changed from the config file =
```file struct
sudo mkdir -p /var/www/temperature-app
sudo chown -R /var/www/temperature-app
```

for nginx config files - 
``` sudo nano /etc/nginx/sites-available/temperature-app
```

nginx config - 
```nginx
server {
    listen 80;
    server_name _;

    root /var/www/temperature-app;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```
ennable the config and disable defualt becuase by default nginx loads the premade nginx html page 
```
sudo ln -s /etc/nginx/sites-available/temperature-app /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default
```

for testing and reloading 
sudo nginx -t
sudo systemctl reload nginx


now you can just open the website as instance is running the url is http://3.27.14.181/
