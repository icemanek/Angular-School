/* tslint:disable:no-trailing-whitespace */

export enum UserEnum {
  Id = 'id',
  Username =  'username',
  FirstName = 'firstname',
  LastName = 'lastname',
  Email = 'email',
  Password = 'password',
  ConfirmPassword = 'confirmPassword',
  Created = 'created',
  Gender = 'gender',
  Licence = 'licence',
  Birth = 'birth',
  Enabled = 'enabled',
  ResetToken = 'resetToken',
  ConfirmationToken = 'confirmationToken'
}

export interface User {
  [UserEnum.Id]: number;
  [UserEnum.Username]: number;
  [UserEnum.FirstName]: string;
  [UserEnum.Created]: Date;
  [UserEnum.Email]: string;
  [UserEnum.Password]: string;
  [UserEnum.ConfirmPassword]: string;
  [UserEnum.Gender]: string;
  [UserEnum.Licence]: boolean;
  [UserEnum.Enabled]: boolean;
  [UserEnum.Birth]: Date;
  [UserEnum.ResetToken]: string;
  [UserEnum.ConfirmationToken]: string;
}
