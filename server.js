const server= require('express');
const app= server();

const path= require('path');

app.use(server.static(path.join(__dirname,'public')));
app.listen(3000);