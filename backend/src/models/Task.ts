import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../config/db'

class Task extends Model{
    id!: number
    title!: string
    description!: string
    isComplete!:boolean
    userId!:number
}

Task.init({
    id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    title:{type:DataTypes.STRING, allowNull:false},
    description:{type:DataTypes.STRING, allowNull:true},
    isComplete:{type:DataTypes.BOOLEAN, defaultValue:false},
    userId:{type:DataTypes.INTEGER, allowNull:false}
},{sequelize, modelName: "task"})


export default Task