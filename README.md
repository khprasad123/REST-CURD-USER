# REST-API

API Created with NodeJS, Express, Mongoose, Swagger-UI ( Documentation ).

Basic documentation can be found at my digital ocean VM - [API Documentation](http://206.189.158.202:3000/api-docs/#/).

This Application can be run locally or in a production server as a container.


## Installation
If using local node server and mongoDB : 

- Clone the Git Repo in to local machine & run the application directly in the local machine ( NOTE: install MongoDB in your local machine and latest version of NodeJS )
```
git clone https://github.com/khprasad123/REST-CURD-USER.git
npm install 
npm start # for starting the application
npm run dev # for starting development server
npm test # for running basic test scripts  
```

to run as Container :
 
to run in production mode environment variable should be setup inside the container after docker compose.

Basic Environment variables can be found at : [env](https://github.com/khprasad123/REST-CURD-USER/blob/master/config/setEnv.sh)

- Deployment steps : 

```bash
git clone https://github.com/khprasad123/REST-CURD-USER.git
npm install 
#Docker Commands
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build #for running in development mode
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build #for running in development mode no need of env variables

#To stop the container 
docker-compose -f docker-compose.yml -f docker-compose.dev.yml down -v #for undeploy in development mode (removes the persistant volume too)
docker-compose -f docker-compose.yml -f docker-compose.prod.yml down -v #for undeploy in development mode (removes the persistant volume too)

```
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
