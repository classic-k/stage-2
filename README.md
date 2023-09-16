This template guides you through CRUD operations (GET, POST, PUT, DELETE), variables, and tests.

## 🔖 **How to setup**

Clone this repo from github

Setup environmental variables as in sample.env

Run npm install to install dependency

Run npm start to run

In the test folder is a python scripts which can be used to test the endpoint.

## 🔖 **How to use this API (HNGX Stage 2)**

#### **GET Request**

Get request can be via parameters or via query

To use via parameter Click Get Person With ID parameter, change the id variable to person's id to fetch. Click send and the response will come in json format as below if the id variable is 1

{'person': {'id': 1, 'name': 'Mark Essiens'}}

For use of the GET request with query, click Get Person with Name Query, specify the name in the params field value, response will be as below if name is Mark Essiens

{'person': {'id': 1, 'name': 'Mark Essiens'}}

For use of the GET request with query ID, click Get Person with ID Query, specify the id in the params field value, response will be as below if name is 1

{'person': {'id': 1, 'name': 'Mark Essiens'}}

#### **POST Request:**

Post request requires a json datas i.e { "name": "Micheal Faraday"} will return

{'message': 'successful', 'person': {'id': 4, 'name': 'Micheal Faraday'}}

#### **Patch Request**

Click the Update person and pass the new person name in the body field

```
{
    "name": "Add your name in the body"
}

 ```

#### **Delete Request**

Click the delete request and change the id variable of person to delete