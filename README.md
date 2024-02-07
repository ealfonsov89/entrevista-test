# React APP

The frontend is a react app using typescript.

### Description

This application allow us to preform CRUD action to the customers list.

It's compoused by a formulary to edit or create customers, a table to list 10 customers .

> This is limited because we can have issues with the total amount of customers.

> We have not time to implement pagination.

For eah action performed to the customers list, we print a console table `console.table(customers)`, so you can follow the changes on the webbrowser terminal.

### To run the react app
```
$ cd ./my-app
$ npm i
$ npm start
```

> you should see the frontend at `http://localhost:3000/`.

# Dotnet core API

The api is a dotnet core api connected to as SQLITE database to improve portavility.

> Have no time to mout the environment using the database options provided, but as SQLITE is a linked database, it would be simmilar to Azure SQL Server.

We use services injection to perform actions from the controlers.

Also we add entityFramework as ORM to be able to use migrations.

We add a swagger instance to be able to play with the endpoints and generate a documentation.


### To run dotnet core api

```
$ cd ./my-api
$ dotnet restore
$ dotnet tool install --global dotnet-ef
$ dotnet build
```

`$ dotnet ef database update --context CustomerContext` > this just if the database is empty

`$ dotnet build && dotnet run`

> you should be able to see the swagger at `http://localhost:5289/swagger/index.html`
