import { Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";
@Table
export class User extends Model {
  @PrimaryKey
  @Column(DataType.UUIDV4)
  id: string

  @Column
  firstName: string

  @Column
  lastName: string

  @Column(DataType.INTEGER)
  age: number

  @Column
  email: string

  @Column
  username: string

  @Column
  password: string

}
