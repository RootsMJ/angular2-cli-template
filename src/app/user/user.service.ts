import { Injectable } from '@angular/core';
import { User, Role } from 'app/user/user.model';

const users: User [] = [
    new User({
      id: 1,
      fullName: 'Martin Johansson',
      email: 'martin.johansson@konicaminolta.se',
      phoneNumber: '0270-480030',
      role: Role.Utvecklare,
      storeName: 'Ingen',
      password: 'password'
    }),
    new User({
      id: 2,
      fullName: 'Gustav Kaldner',
      email: 'gustav.kaldner@konicaminolta.se',
      phoneNumber: '0270-1243456',
      role: Role.Utvecklare,
      storeName: 'Ingen',
      password: 'password'
    }),
    new User({
      id: 3,
      fullName: 'Andreas Gidö',
      email: 'andreas.gido@konicaminolta.se',
      phoneNumber: '070-987654',
      role: Role.Utvecklare,
      storeName: 'Ingen',
      password: 'password'
    }),
    new User({
      id: 4,
      fullName: 'Ulrika Eriksson',
      email: 'ulrika.eriksson@svenskfast.se',
      phoneNumber: '070-849 88 01',
      role: Role.Admin,
      storeName: 'Bobutik Kalmar',
      password: 'password'
    }),
    new User({
      id: 5,
      fullName: 'Inger Nilsson',
      email: 'inger.nilsson@svenskfast.se',
      phoneNumber: '073-934 08 11',
      role: Role.Beställare,
      storeName: 'Bobutik Borgholm',
      password: 'password'
    }),
    new User({
      id: 6,
      fullName: 'Eva Frick',
      email: 'eva.frick@svenskfast.se',
      phoneNumber: '070-210 32 70',
      role: Role.Ekonomi,
      storeName: 'Bobutik Kalmar',
      password: 'password'
    }),
    new User({
      id: 7,
      fullName: 'Lena Nilsson',
      email: 'lena.nilsson@svenskfast.se',
      phoneNumber: '070-461 33 21',
      role: Role.Handläggare,
      storeName: 'Bobutik Kalmar',
      password: 'password'
    }),
  ];

@Injectable()
export class UserService {

  getAllUsers(){
    return users;
  }

  constructor() { }

}
