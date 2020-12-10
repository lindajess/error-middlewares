const express = require('express');
const { errorResponseFormatter } = require('./middlewares/error');
const users = require('./routes/users')

const PORT = 3000

// Create express app
const app = express();

// Users routes with async calls
app.use('/users', users);


// Error handler middleware
app.use(errorResponseFormatter);

// ACK - server ready to to be requested
app.listen(PORT, () => console.info(`listening on port ${PORT}`));
