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
