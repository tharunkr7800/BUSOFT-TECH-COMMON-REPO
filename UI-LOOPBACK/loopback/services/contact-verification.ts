import {repository} from '@loopback/repository';
import {HttpErrors} from '@loopback/rest';
import {ContactsRepository} from '../repositories';

export type ContactCredentials = {
  lastName: any;
  officePhoneNo: any;
  email: any;
};

export class ContactService {

  constructor(
    @repository(ContactsRepository)
    public contactRepository: ContactsRepository,

  ) { }


  async getAllContact(): Promise<any> {
    const foundUser = await this.contactRepository.find({
      // where: {email: contactCredentials.email},
      // fields: ['lastName', 'firstName', 'organization', 'email', 'officePhoneNo', 'status', 'interactions']
    });
    return foundUser;
  }


  async verifyContactCredentials(contactCredentials: ContactCredentials): Promise<any> {
    const invalidCredentialsError = 'User not found';
    if (contactCredentials.email != '' && contactCredentials.lastName == '' && contactCredentials.officePhoneNo == '') { //only email

      const foundUser = await this.contactRepository.find({
        where: {email: contactCredentials.email},
        fields: ['lastName', 'firstName', 'organization', 'email', 'officePhoneNo', 'status', 'interactions']
      });
      return foundUser;
    }
    else if (contactCredentials.email == '' && contactCredentials.lastName != '' && contactCredentials.officePhoneNo == '') { // only lastname

      const foundUser = await this.contactRepository.find({
        where: {lastName: contactCredentials.lastName},
        fields: ['lastName', 'firstName', 'organization', 'email', 'officePhoneNo', 'status', 'interactions']
      });
      return foundUser;
    }
    else if (contactCredentials.email == '' && contactCredentials.lastName == '' && contactCredentials.officePhoneNo != '') // only office phone no.
    {

      const foundUser = await this.contactRepository.find({
        where: {officePhoneNo: contactCredentials.officePhoneNo},
        fields: ['lastName', 'firstName', 'organization', 'email', 'officePhoneNo', 'status', 'interactions']
      });
      return foundUser;
    }
    else if (contactCredentials.lastName != '' && contactCredentials.officePhoneNo == '' && contactCredentials.email != '') {  // email and lastname

      const foundUser = await this.contactRepository.find({
        where: {email: contactCredentials.email, lastName: contactCredentials.lastName},
        fields: ['lastName', 'firstName', 'organization', 'email', 'officePhoneNo', 'status', 'interactions']
      });
      return foundUser;
    }
    else if (contactCredentials.lastName == '' && contactCredentials.officePhoneNo != '' && contactCredentials.email != '') {  //  email and phnno

      const foundUser = await this.contactRepository.find({
        where: {email: contactCredentials.email, officePhoneNo: contactCredentials.officePhoneNo},
        fields: ['lastName', 'firstName', 'organization', 'email', 'officePhoneNo', 'status', 'interactions']
      });
      return foundUser;
    }
    else if (contactCredentials.lastName != '' && contactCredentials.officePhoneNo != '' && contactCredentials.email == '') {  //  lastname and phnno

      const foundUser = await this.contactRepository.find({  //write the query
        where: {lastName: contactCredentials.lastName, officePhoneNo: contactCredentials.officePhoneNo},
        fields: ['lastName', 'firstName', 'organization', 'email', 'officePhoneNo', 'status', 'interactions']
      });
      return foundUser;
    }
    else if (contactCredentials.lastName != '' && contactCredentials.officePhoneNo != '' && contactCredentials.email != '') {

      const foundUser = await this.contactRepository.find({  //write the query
        where: {email: contactCredentials.email, lastName: contactCredentials.lastName, officePhoneNo: contactCredentials.officePhoneNo},
        fields: ['lastName', 'firstName', 'organization', 'email', 'officePhoneNo', 'status', 'interactions']
      });
      return foundUser;
    }
    // const foundUser = await this.contactRepository.find({  //write the query
    //   where: {email: contactCredentials.email, lastName: contactCredentials.lastname, officePhoneNo: contactCredentials.officePhoneNo},
    // });

    throw new HttpErrors.Unauthorized(invalidCredentialsError);

    // const passwordMatched = await compare(
    //   contactCredentials.password,
    //   foundUser.password,
    // );
    // if (!passwordMatched) {
    //   throw new HttpErrors.Unauthorized(invalidCredentialsError);
    // }
    // return foundUser;
  }

  // convertToUserProfile(user: Users): UserProfile {
  //   // let userName = '';
  //   // if (user.firstName) {
  //   //   userName = user.firstName;
  //   // }
  //   // if (user.lastName) {
  //   //   userName = user.firstName
  //   //     ? `${user.firstName} ${user.lastName}`
  //   //     : user.lastName;
  //   // }
  //   return {
  //     [securityId]: user.id.toString(),
  //     name: `${user.firstname} ${user.lastname}`,
  //     id: user.id,
  //     email: user.email,
  //   };
}



// below public hasher: bcryptHasher,
// @inject(SecurityBindings.USER) public user: UserProfile

    // const credentialsFound = await this.userRepository.findCredentials(
    //   foundUser.id,
    // );
    // if (!credentialsFound) {
    //   throw new HttpErrors.Unauthorized(invalidCredentialsError);
    // }
