import {Sequelize} from "sequelize";

const db = new Sequelize("jwt-express","root","iyacorp123",{
  host:"localhost",
  dialect:"mysql"
})

export default db