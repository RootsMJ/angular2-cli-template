export enum Role {
  Utvecklare,
  Admin,
  Handläggare,
  Beställare,
  ExternAdmin,
  ExternBeställare,
  Ekonomi
}

export class User {
  id: number;
  fullName: string;
  email: string;
  phoneNumber: string;
  role: Role;
  storeName: string;
  password: string;
  starred: boolean;

  constructor(model: any = null) {
    this.id = model.id;
    this.fullName = model.fullName;
    this.email = model.email;
    this.phoneNumber = model.phoneNumber;
    this.role = !model.role ? Role.Admin : model.role;
    this.storeName = model.storeName;
    this.password = model.password;
    this.starred = model.starred || false;
  }
}
