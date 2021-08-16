// Uncomment these imports to begin using these cool features!
// Uncomment these imports to begin using these cool features!
import {inject} from '@loopback/core';
import {repository, Where} from '@loopback/repository';
// import {repository} from '@loopback/repository';
import {get, getModelSchemaRef, param, post, requestBody, response} from '@loopback/rest';
import {Contacts} from '../models';
import {ContactCredentials, ContactsRepository} from '../repositories/contacts.repository';
import {ContactService} from '../services/contact-verification';
import {ContactRequestBody} from '../specs/contact.controller.spec';
// import {inject} from '@loopback/core';

// export interface contactInterface {
//   lastName: string,
//   firstName: string,
//   organization: string,
//   email: string,
//   officePhoneNo: string,
//   status: string

// }


export class ContactsController {
  constructor(

    @repository(ContactsRepository)
    public userRepository: ContactsRepository,


    @inject('contactVerify')
    public contactVerification: ContactService,

  ) { }


  @post('/contacts/createContact', {
    responses: {
      '200': {
        description: 'contact details',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                ContactDetils: {
                  type: 'object',
                },
              },
            },
          },
        },
      },

    },
  })

  async createContact(
    @requestBody(ContactRequestBody) contactCredentials: ContactCredentials): Promise<any> {
    //verify if the user is valid
    // for (var cred of contactCredentials )
    console.log(typeof contactCredentials.email);
    console.log(typeof contactCredentials.lastName);
    console.log(typeof contactCredentials.officePhoneNo);

    console.log(contactCredentials);

    console.log(contactCredentials.lastName);
    console.log(contactCredentials.officePhoneNo);

    let contacts = await this.contactVerification.verifyContactCredentials(contactCredentials);

    // const lastname = contacts.lastName;
    // const firstName = contacts.firstName;
    // const organization = contacts.organization;
    // const email = contacts.email;
    // const officePhoneNo = contacts.officePhoneNo;
    // const status = contacts.status;
    // let outputContact = {
    //   lastName: contacts.lastName,
    //   firstName: contacts.firstName,
    //   organization: contacts.organization,
    //   email: contacts.email,
    //   officePhoneNo: contacts.officePhoneNo,
    //   status: contacts.status
    // }
    console.log(contacts);
    return Promise.resolve({contacts});
    // const userprofile = await this.contactVerification.convertToUserProfile(user);
    // console.log(userprofile);
    // const token = await this.jwtService.generateToken(userprofile);
    // return Promise.resolve({token,userprofile});
    // return Promise.resolve({token: "12558966321ggf"});

  }

  @get('/incidents/getContact')
  @response(200, {
    description: 'Contact display',
    content: {
      'application/json': {schema: getModelSchemaRef(Contacts)}
    }
  }
  )
  async getContact(

    @param.where(Contacts) where?: Where<Contacts>,
  ): Promise<Contacts> {
    let getContacts = await this.contactVerification.getAllContact();
    return getContacts;

  }
}
