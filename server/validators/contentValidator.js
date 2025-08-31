const z = require("zod");

const contentValidator = z.object({
  type: z.string(),
  link: z.string(),
  title: z.string(),
  tags: z.string(),
});

module.exports = contentValidator;
