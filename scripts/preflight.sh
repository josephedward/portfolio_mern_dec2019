brew services start mongodb-community
echo 'mongo started'

# prevents 
# sudo su

echo 'attempting to close ports'
# sudo lsof -P | grep ‘:8888’ | awk '{print $2}' | xargs kill -9
# sudo lsof -P | grep ‘:8887’ | awk '{print $2}' | xargs kill -9
sudo killall -9 node
echo 'ports test:'
sudo lsof -i tcp:8887 
sudo lsof -i tcp:8888 

# echo 'requiring dotenv for environment variables'
# Make sure dotenv loads your env variables
# do I really need this? *change to export syntax IN TEST.JS FILE* 
#  node -r dotenv/GHAPI.js 

 