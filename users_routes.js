const express = require('express');
const router = express.Router();
const { errorHandler } = require('./error_middlewares');
const CustomError = require('./error_class')


router.get('/error',
  errorHandler(async (req, res) => {
    // Let's simulate an error here for you to see how error are captured and formatted
    // without using any TRY CATCH
    throw new CustomError(500, 
        'Este es un error capturado por nuestro super middleware errorHandler y formateado por nuestro otro super middleware errorResponseFormatter', 
        ':)'
        )
  }));


router.get('/successful-response',
  errorHandler(async (req, res) => {
    // This is a good response in case you want to see a successful case response
    // This could be a async call, for example a call to our controllers that are connected to a database or a service, that might throw errors
    const response = [{name: "Linda Gutiérrez", age: 24}, {name: "Alan Brito", age: 22}, {name: "Alba Bosa", age: 31}]
    res.send(response)
}));

  


module.exports = router;

