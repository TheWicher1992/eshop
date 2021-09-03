const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const cors = require('cors')


// Cross Origin
app.use(cors())
// JSON Body Parser
app.use(express.json())

app.listen(PORT, () => console.log(`Server listening to port ${PORT}`))
