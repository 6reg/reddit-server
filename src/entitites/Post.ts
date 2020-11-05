import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

 @Entity()
export class Post {

  @PrimaryKey()
  id!: number;

  // @Property()
  // createdAt = new Date();

  // // hook creates new date on every update
  // @Property({onUpdate: () => new Date() })
  // updatedAt = new Date();

  @Property()
  title!: string;

  constructor(title: string) {
    this.title = title;

}}