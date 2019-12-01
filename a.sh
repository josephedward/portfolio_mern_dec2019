brew services start mongodb-community
echo 'mongo started'

echo 'attempting to close ports'
# sudo lsof -P | grep ‘:8888’ | awk '{print $2}' | xargs kill -9
# sudo lsof -P | grep ‘:8887’ | awk '{print $2}' | xargs kill -9
sudo killall -9 node
echo 'ports test:'
sudo lsof -i tcp:8887 
sudo lsof -i tcp:8888 
