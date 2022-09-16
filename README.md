- YouTube tutorial: [Node.js Crash Course Tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU)
- [tutorial repo](https://github.com/iamshaunjp/node-crash-course)

##### Lessons:

1. Setup
2. Basics
3. Clients & Servers
4. Requests & Responses
5. NPM
6. Express Apps
7. View Engines - EJS
8. Middleware

- Logger middleware to log details of wvery request
- Authentication check middleware for protected routes
- Middleware to parse JSON data from requests
- Return 404 pages

* 3rd party middleware: Morgan (logger), Helmet(security) etc for sessions, cookies, validation etc.

- Check morgan middleware

* Static Files

- we have to specify what files should be accessed. By using the `static` middleware (from express), we put them in a folder called `public` and we give access to it with `app.use(express.static("public"));`

9. MongoDB

- Databases:
  - SQL: Tables, Rows, Columns
  - NoSQL: Collections, Documents
- MongoDB:
  - Collections:
    - User Collection (JSON file)
      - User document
      - User document
      - User document
    - Blog Collection
      - Blog document
      - Blog document
      - Blog document

* MonogDB Setup & Atlas

- You can either install MDB in our computer and deploy that, or we can use a cloud DB which is already hoosted.
- Go to mongoDB Atlas, create a project, a cluster, a collection, a user and copy the connection string into `app.js`.
- We could connect using the mongoDB api package, but we're going to use mongoose.

* Mongoose, Models & Schemas

- It's an ODM library: Object Document Mapping library.

* Schemas & Models:

- Schemas defines the structure of a type of data / document.
  - Properties & property types.
  - User Schema: `name(string), required`, `age(number)`
  - Blog Schema: `title(string), required`, `snippet(string) required`
- Models allow us to communicate with database collections.
  - Blog schema --> get, save, delete, etc --> Database Blog Collection.

* Getting and Saving Data.
* Output Documents in Views.

10. Get, Post & Delete Requests.

- Route Parameters:
  - The variable parts of the route that may change value.

11. Express Router & MVC

- We use the Express Router, to split our route into different files and manage them in small groups of routes that run together.
