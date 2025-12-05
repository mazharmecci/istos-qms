const app = require('./app');
const { sequelize } = require('./models');


const PORT = process.env.PORT || 4000;


async function start(){
try{
await sequelize.authenticate();
await sequelize.sync({ alter: true });
console.log('DB connected and models synced');
app.listen(PORT, ()=> console.log(`Server listening on ${PORT}`));
}catch(err){
console.error(err);
process.exit(1);
}
}


start();
