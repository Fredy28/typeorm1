import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import userRoutes from './routes/user.routes'
import ValeRoutes from './routes/vale.routes'
import edificioRoutes from './routes/edificio.routes'
import empleadoRoutes from './routes/empleado.routes'
import areaRoutes from './routes/area.routes'

const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.use(userRoutes)
app.use(edificioRoutes)
app.use(ValeRoutes)
app.use(empleadoRoutes)
app.use(areaRoutes)

export default app;