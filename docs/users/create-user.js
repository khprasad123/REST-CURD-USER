
module.exports = {
    // operation's method
  post: {
    tags: ["User CRUD operations"], // operation's tag
    description: "Create User", // short desc
    operationId: "createUser", // unique operation id
    parameters: [], // expected params
    requestBody: {
      // expected request body
      content: {
        // content-type
        "application/json": {
          schema: {
            $ref: "#/components/schemas/userInput", // todo input data model
          },
        },
      },
    },
    // expected responses
    responses: {
      // response code
      201: {
        description: "User created successfully", // response desc
      },
      // response code
      500: {
        description: "Server error", // response desc
      },
    },
  },
}