import express from 'express'

const app = express()

//& Middlewares
// Para poder leer los JSON del body 
app.use( express.json() )

//& Rutas
// app.use(projectRoutes)



export default app