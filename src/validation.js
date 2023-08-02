const Joi = require('joi');
const pattern= /(add|subtract),\s*(\d+)\s+(days|weeks)\s+(to|from)\s+(today|\d{1,2}-[a-zA-Z]{3}-\d{4})/i;

const calenderQuestionsSchema  = Joi.object({
    question : Joi.string().regex(pattern).required
});

module.exports = {
  calenderQuestionsSchema
};