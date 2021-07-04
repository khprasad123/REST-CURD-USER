module.exports = {
    // operation's method
  get: {
    tags: ["User CRUD operations"], // operation's tag.
    description: "Get a user", // operation's desc.
    operationId: "getUser", // unique operation id
    parameters: [
      // expected params.
      {
        name: "id", // name of the param
        in: "path", // location of the param
        schema: {
          $ref: "#/components/schemas/id", // data model of the param
        },
        required: true, // Mandatory param
        description: "A single User id", // param desc.
      },
    ],
    // expected responses
    responses: {
      // response code
      200: {
        description: "User is obtained", // response desc.
        content: {
          // content-type
          "application/json": {
            schema: {
              $ref: "#/components/schemas/user", // todo data model
            },
          },
        },
      },
      // response code
      400: {
        description: "user is not found", // response desc.
        content: {
          // content-type
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Error", // error data model
            },
          },
        },
      },
    },
  },
}