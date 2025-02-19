import { DataTypes, Model, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize'
import { sequelize } from '../config/db'

interface TaskAttributes extends Model<InferAttributes<TaskAttributes>, InferCreationAttributes<TaskAttributes>>{
    id: CreationOptional<number>
    title:string
    description: string
    isComplete: CreationOptional<boolean>
    userId: number
}

const Task = sequelize.define<TaskAttributes>('task',{
    id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    title:{type:DataTypes.STRING, allowNull:false},
    description:{type:DataTypes.STRING, allowNull:true},
    isComplete:{type:DataTypes.BOOLEAN, defaultValue:false},
    userId:{type:DataTypes.INTEGER, allowNull:false}
})

export default Task