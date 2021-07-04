import { CompanyDetails } from "./company-details-model";

export class UserDetails{
  firstName:string;
  lastName:string;
  emailId:string;
  phoneNumber:number;
  address:string;
  password:string;
  confirmPassword:string;
  dob:Date;
  isSeller:boolean;
  companyDetails?:CompanyDetails;
}
