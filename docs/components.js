const components = {
  components: {
    securitySchemes: {
      ApiKeyAuth: {
        type: 'apiKey',
        name: 'Authorization',
        in: 'header',
      },
    },
    schemas: {
      _id: {
        type: 'ObjectId',
        description: 'User ID no.',
        example: '6597ec5d563cb2673b3a61a',
      },
      user: {
        type: 'object',
        properties: {
          _id: {
            type: 'ObjectId',
            description: 'user identification number',
            example: '6597ec5d563cb2673b3a61a',
          },
          role: {
            type: 'string',
            description: 'user\'s employment role',
            example: 'employee',
          },
          username: {
            type: 'string',
            description: 'user\'s email address',
            example: 'example@example.com',
          },
          password: {
            type: 'hash',
            description: 'user\'s password (encrypted)',
            example: '$2b$10$attrZE1RrbF6Q35KpZeF0OnspNUeWOktCViVvSJjjLj2hWzq2RDqa',
          },
          confirmed: {
            type: 'boolean',
            description: 'status of confirmation of user\'s email address',
            example: false,
          },
        },
      },
      registerUser: {
        type: 'object',
        properties: {
          username: {
            type: 'string',
            description: 'a valid email address belonging to the user',
            example: 'username@gmail.com',
          },
          password: {
            type: 'string',
            description: 'user\'s inputted password',
            example: 'password123',
          },
          repeatedPassword: {
            type: 'string',
            description: 'user inputs password again to check accuracy',
            example: 'password123',
          },
        },
      },
      userLogin: {
        type: 'object',
        properties: {
          username: {
            type: 'string',
            description: 'the user\'s username (email address) as registered in the database.',
            example: 'username@gmail.com',
          },
          password: {
            type: 'string',
            description: 'user\'s associated password',
            example: 'password123',
          },
        },
      },
      userRegisteredSuccessfully: {
        type: 'object',
        properties: {
          msg: {
            type: 'string',
            description: 'Server sends email to user at the email address provided. User must click link provided in order to be able to log in.',
            example: 'We have just sent you a confirmation email—please check your inbox.',
          },
        },
      },
      userRegistrationFailure: {
        type: 'object',
        properties: {
          msg: {
            type: 'string',
            description: 'User has not input a valid email address in the username field.',
            example: 'Username must be a valid email address.',
          },
        },
      },
      userLoginFailure: {
        type: 'object',
        properties: {
          msg: {
            type: 'string',
            description: 'User\'s email or password do not match the database.',
            example: 'Incorrect credentials.',
          },
        },
      },
      unconfirmedUser: {
        type: 'object',
        properties: {
          msg: {
            type: 'string',
            description: 'User has yet to confirm their email address via the link in the registration email.',
            example: 'Please confirm email address in order to login.',
          },
        },
      },
      emailWebToken: {
        type: 'string',
        example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJkaWxsZXkubWFyY0BnbWFpbC5jb20iLCJpYXQiOjE3MDQ0NTUyNjEsImV4cCI6MTcwNDYyODA2MX0.1dcm0S4XaEd2GQCZ6TrF24gEF_ThuoDM6nr4w7PgkAo',
      },
    },
  },
};

export default components;
