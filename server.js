//Importamos el paquete json-server
var jsonServer = require("json-server");

//Esta linea crea el jsonserver
const server = jsonServer.create()
//Esta linea enruta la base de datos en formato json para que luego la utilice el server creado
const router = jsonServer.router("db.json")
//Esta linea define los middlewares que se van a usar
const middlewares = jsonServer.defaults()
//Esta linea define el puerto donde se va a levantar el servidor
const port = process.env.PORT || 3000

//Con ".use()"" el servidor consume los middlewares y el router definidos
server.use(middlewares)
server.use(router)

//Con .listen() el server levanta el servidor en el puesto definido
server.listen(port)