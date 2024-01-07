const users = {
  paths: {
    '/users/{_id}': {
      get: {
        security: [{
          ApiKeyAuth: [],
        }],
        tags: {
          Users: ': Get User by ID',
        },
        description: 'Retrieves a user\'s info. from their ID no.',
        // operationID: 'getById',
        parameters: [{
          name: '_id',
          in: 'path',
          schema: {
            $ref: '#/components/schemas/_id',
          },
          required: true,
          description: 'The user ID',
        }],
        responses: {
          200: {
            description: 'msg: User successfully fetched',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/user',
                },
              },
            },
          },
          404: {
            description: 'No such user exists.',
          },
        },
      },
    },
    '/auth/register': {
      post: {
        tags: {
          Users: ': Register User',
        },
        description: 'User registration',
        parameters: [],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/registerUser',
              },
            },
          },
        },
        responses: {
          201: {
            description: 'User successfully registered',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/userRegisteredSuccessfully',
                },
              },
            },
          },
          400: {
            description: 'Username must be a valid email address. / Both passwords must match.',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/userRegistrationFailure',
                },
              },
            },
          },
        },
      },
    },
    '/auth/login': {
      post: {
        tags: {
          Users: ': User Login',
        },
        description: 'User login',
        parameters: [],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/userLogin',
              },
            },
          },
        },
        responses: {
          200: {
            description: 'JSON web token',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/userRegisteredSuccessfully',
                },
              },
            },
          },
          400: {
            description: 'Username, password or both input incorrectly.',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/userLoginFailure',
                },
              },
            },
          },
          401: {
            description: 'User has yet to confirm their email address.',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/unconfirmedUser',
                },
              },
            },
          },
        },
      },
    },
    '/auth/confirm/{emailToken}': {
      get: {
        tags: {
          Users: ': Confirm Email',
        },
        description: 'Endpoint accessed via link by user in order to confirm email address.',
        parameters: [{
          name: 'email token',
          in: 'path',
          type: 'JSON web token',
          schema: {
            $ref: '#/components/schemas/emailWebToken',
          },
          required: true,
          description: 'the user\'s email address as an encyrpted web token.',
        }],
        responses: {
          200: {
            description: 'User successfully confirmed.',
          },
        },
      },
    },
  },
};

export default users;
