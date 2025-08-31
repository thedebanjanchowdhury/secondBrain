const z = require("zod");

const userValidator = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters" })
    .max(30, { message: "Username cannot exceed 30 characters" }),

  password: z
    .string()
    .min(8, { message: "Password must be atleast 8 characters" })
    .max(30, { message: "Password cannot exceed 20 characters" })
    .regex(/[A-Z]/, {
      message: "Password must contain atleast one uppercase letter",
    })
    .regex(/[a-z]/, {
      message: "Password must contain atleast one lowercase letter",
    })
    .regex(/[0-9]/, { message: "Password must contain atleast one number" })
    .regex(/[^A-Za-z0-9]/, {
      message: "Password must contain atleast one special character",
    }),
});

module.exports = userValidator;
