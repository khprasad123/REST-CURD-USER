module.exports = {
    // operation's method.
 delete: {
   tags: ["User CRUD operations"], 
   description: "Deleting a user", 
   operationId: "deleteUser", 
   parameters: [
     // expected parameters
     {
       name: "id", // name of param
       in: "path", // location of param
       schema: {
         $ref: "#/components/schemas/id", // id model
       },
       required: true, // mandatory
       description: "Deleting a User", // param desc
     },
   ],
   // expected responses
   responses: {
     // response code
     200: {
       description: "User deleted successfully", // response desc
     },
     // response code
     400: {
       description: "User not found", // response desc
     },
     // response code
     500: {
       description: "Server error", // response desc
     },
   },
 },
}