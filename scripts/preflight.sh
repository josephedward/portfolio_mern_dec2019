
echo 'attempting to close ports'
sudo killall -9 node
echo 'ports test:'
sudo lsof -i tcp:8887 
sudo lsof -i tcp:8888 



 