import {SchemaObject} from '@loopback/openapi-v3';

export const contactSchema: SchemaObject = {
  type: 'object',

  properties: {
    lastName: {

      "anyOf": [
        {
          "type": undefined
        },
        {
          "type": "string"
        }
      ],
    },

    officePhoneNo: {
      "anyOf": [
        {
          "type": undefined
        },
        {
          "type": "string"
        }
      ]
    },

    email: {
      "anyOf": [
        {
          "type": undefined
        },
        {
          "type": "string",
        }
      ]
    }

  }
};

export const outputContactSchema: SchemaObject = {
  type: 'object',

  properties: {
    lastName: {

      "type": "string"
    },

    firstName: {

      "type": "string"
    },

    organization: {

      "type": "string"
    },

    email: {

      "type": "string"
    },

    officePhoneNo: {
      "type": "string"
    },

    status: {
      "type": "string"
    }

  }
};


export const ContactRequestBody = {
  description: 'Contact Credential Info',
  required: true,
  content: {
    'application/json': {
      schema: contactSchema,
    },
  },
};

