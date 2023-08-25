const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./routes/rest_categoria.js']

swaggerAutogen(outputFile, endpointsFiles)