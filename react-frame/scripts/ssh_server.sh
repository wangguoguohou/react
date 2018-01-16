#!/bin/bash

$order

# Test server config
deploy_host="127.0.0.1"
deploy_server="root@$deploy_host"
deploy_path="/app/dt-react-starter"

# SSH login test server
# Pull lastest dist version from gitlab.
ssh -t $deploy_server "
cd $deploy_path;bash; 
"