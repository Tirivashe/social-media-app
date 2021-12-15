import { AllowNull, Column, DataType, Default, IsEmail, IsNull, IsNumeric, IsUUID, Max, Min, Model, NotEmpty, PrimaryKey, Table, Unique } from "sequelize-typescript";
@Table
export class User extends Model {
  @PrimaryKey
  @IsUUID(4)
  @Unique
  @Column
  id: string

  @AllowNull(false)
  @NotEmpty
  @Column
  firstName: string
  
  @AllowNull(false)
  @NotEmpty
  @Column
  lastName: string
  
  @AllowNull(false)
  @NotEmpty
  @IsNumeric
  @Column
  age: number
  
  @Unique
  @AllowNull(false)
  @NotEmpty
  @Max(50)
  @IsEmail
  @Column
  email: string

  @NotEmpty
  @AllowNull(false)
  @Unique
  @Min(3)
  @Max(20)
  @Column
  username: string

  @NotEmpty
  @AllowNull(false)
  @Min(6)
  @Column
  password: string

  @Default("")
  @AllowNull
  @Column
  profile_pic: string

  @Default("")
  @AllowNull
  @Column
  cover_pic: string

  @AllowNull
  @Column
  followers: string


  @Default(false)
  @AllowNull
  @Column
  isAdmin: boolean

}
