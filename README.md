# CAP-Server
This project is the same as CAPAlgorythm but has been split into a server and a client part for bigger organizations.

# CI/CD

This software will only be updated if you installed it as a docker container. A port to podman may happen in the future. The CI/CD part is done by JENKINS and built on an ARM64 server. Please note that an AMD64/INTEL64 image will soon be published as well as an IA32 image.

# Security

This software uses data encryption to meet up security that is necessary to be GPDR-proof. If you lose your user password, THE DATA WILL BE PERMANENTLY LOST because we do not have your private key to decode the AES key that is encrypting the database.

# Database engine

This software is only compatible with PostgresSQL database engine. No other ports are yet scheduled.

# Scalability

This software will be scalable thanks to the docker-compose.yml system. The database will be configured in this file. Please note that this app yet support only one database server.

# License

Please see under LICENSE file.

# Data recovery

IN CASE OF A FORGOTTENT PASSWORD, IT IS NOT POSSIBLE TO RECOVER THE DATA STORED IN THE DATABASE. I AM NOT RESPONSIBLE OF ANY LOSS OF DATA.

# Software responsivness

This software may seem slow and it is intended in way because it has to decrypt all data needed to operate.

# SSL

TLS/SSL is currently not supported. However you still can use SSL/TLS by adding a NGINX reverse proxy by either using the official nginx image or by using the docker image from (this)[https://nginxproxymanager.com/] project.