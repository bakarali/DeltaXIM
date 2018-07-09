sudo apt-get install -y gcc python-pip python-devel
sudo pip install virtualenv
virtualenv venv
source ./venv/bin/activate
sudo pip install -r requirements.txt
deactivate

