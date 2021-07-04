module.exports = {
    components: {
        schemas: {
            //id modal
            id: {
                type: "string",
                description: "id of user",
                example: "234432fsfasdfsa",
            },

            //user modal
            user: {
                type: "object",
                properties: {
                    id: {
                        type: "string", 
                        description: "User identification number", 
                        example: "234432fsfasdfsa",
                    },
                    name: {
                        type: "string",
                        description: "User's name", 
                        example: "Hariprasad",
                    },
                    dob: {
                        type: "date", 
                        description: "Date of birth of user", 
                        example: "12/04/1996", 
                    },
                    address: {
                        type: "string",
                        description: "Address of user",
                        example: "Kottarathil House , beembungal",
                    },
                    description: {
                        type: "string",
                        description: "Description of user",
                        example: "Lorem ipsum...",
                    },
                    createdAt: {
                        type: "date",
                        description: "User Creation datetime",
                        example: "2001-03-31T16:00:00.000Z",
                    }
                },
            },
            // User input model
            userInput: {
                type: "object", 
                properties: {
                    name: {
                        type: "string",
                        description: "User's name", 
                        example: "Hariprasad",
                    },
                    dob: {
                        type: "date", 
                        description: "Date of birth of user", 
                        example: "12/04/1996", 
                    },
                    address: {
                        type: "string",
                        description: "Address of user",
                        example: "Kottarathil House , beembungal",
                    },
                    description: {
                        type: "string",
                        description: "Description of user",
                        example: "Lorem ipsum...",
                    },
                },
            },
            
            Error: {
                type: "object", //data type
                properties: {
                  status: {
                    type: "string", // data type
                    description: "Error status", // desc
                    example: "fail", // example of an error message
                  },
                },
              },
        },
    }
};