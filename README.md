# HAProxy, syslog and Node.js app in Docker

Four instances of a simple Node.js http application fronted by a haproxy instance. 
Syslog is included as a log endpoint for haproxy. 

    git clone https://github.com/deployable/docker-haproxy-app
    docker-compose up
    curl http://localhost:9615

The haproxy config is intended to use multiple ip's mapped to it, one for each service.
This isn't configurable in docker-compose or using Docker for Windows or Docker for Mac. 
. 

