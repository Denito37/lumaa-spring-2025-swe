import { DataTypes, Model, InferAttributes, InferCreationAttributes, CreationOptional } from "sequelize";
import { sequelize } from "../config/db";

interface UserAttributes extends Model<InferAttributes<UserAttributes>,InferCreationAttributes<UserAttributes>> {
    id: CreationOptional<number>
    username: string
    password: string
}

const User = sequelize.define<UserAttributes>('user',{
    id :{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    username:{type:DataTypes.STRING, unique:true, allowNull:false},
    password:{type:DataTypes.STRING,allowNull:false},
})

export { User }