# Info

docker save -o crucerosxm.tar crucerosxm:latest

scp -i access.pem crucerosxm.tar ec2-user@50.17.38.83:/home/ec2-user

docker load -i /home/ec2-user/crucerosxm.tar
# crucerosxm
