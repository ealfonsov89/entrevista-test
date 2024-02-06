The frontend is a react app using typescript

The api is a dotnet core api connected to as SQLITE database to improve portavility

To run the react app
`$ cd ./my-app`
`$ npm i`
`$ npm start`
you should see the frontend at `http://localhost:3000/`

To run dotnet core api
`$ cd ./my-api`
`$ dotnet restore`
`$ dotnet tool install --global dotnet-ef`
`$ dotnet build`
`$ dotnet ef database update --context CustomerContext` > this just if the database is empty
`$ dotnet build && dotnet run`
you should be able to see the swagger at `http://localhost:5289/swagger/index.html`
