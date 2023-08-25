var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

/* REFERENCIA AL MÓDULO */
const swaggerUi = require('swagger-ui-express')
var cors = require('cors')

/* REFERENCIA AL ARCHIVO GENERADO */
const swaggerFile = require('./swagger_output.json')

const dotenv = require('dotenv');
dotenv.config();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

 /* REFERENCIA AL MANEJADOR DE RUTAS */
var categoriaRouter = require('./routes/rest_categoria');
var clienteRouter = require('./routes/rest_cliente');
var listacompraRouter = require('./routes/rest_listacompra');
var productoRouter = require('./routes/rest_producto');
var supermercadoRouter = require('./routes/rest_supermercado');
var lista_compras_productosRouter = require('./routes/rest_lista_compras_productos');

var authenticateJWT = require('./middleware/auth');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/* MIDDLEWARE CORS */
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

/* RELACIÓN ENTRE LA RUTA DEL URL CON LA REFERENCIA CON EL MANEJADOR DE RUTAS */
app.use('/rest/categoria', authenticateJWT, categoriaRouter);
app.use('/rest/cliente', clienteRouter);
app.use('/rest/listacompra', listacompraRouter);
app.use('/rest/producto', productoRouter);
app.use('/rest/supermercado', supermercadoRouter);
app.use('/rest/lista_compras_productos', lista_compras_productosRouter);


/* CONFIGURACIÓN DE LA RUTA A LA DOCUMENTACIÓN */
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
