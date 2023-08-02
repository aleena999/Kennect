const { add, sub, format, parse } = require('date-fns');

module.exports = {
    getTotalItems: async (req, h ) => {
    try {
        const question = req.body;
        let solution;
        const operationRegex = /(add|subtract),\s*(\d+)\s+(days|weeks)\s+(to|from)\s+(today|\d{1,2}-[a-zA-Z]{3}-\d{4})/i;
        const matches = question.match(operationRegex);
        if (!matches) {
            return h.json({ error: 'Invalid question format. Supported formats: "add/subtract, <value> days/weeks to <date>"' }).status(400);
          }
        
          const [_, operation, value, unit, dateStr] = matches;
          let parsedDate;

          if (dateStr.toLowerCase() === 'today') {
            parsedDate = startOfDay(new Date());
        }
        else{
            parsedDate = parse(dateStr, 'dd-MMM-yyyy', new Date());
        }

          if (operation.toLowerCase() === 'add') {
            if (unit.toLowerCase() === 'days') {
                solution= format(add(parsedDate, { days: parseInt(value, 10) }), 'dd-MMM-yyyy')
            } else if (unit.toLowerCase() === 'weeks') {
                solution= format(add(parsedDate, { weeks: parseInt(value, 10) }), 'dd-MMM-yyyy') }
            }
            else if(operation.toLowerCase() === 'subtract'){
        
                if(unit.toLowerCase() === 'days') 
                  solution = format(sub(parsedDate, { days: parseInt(value, 10) }), 'dd-MMM-yyyy')
                else if (unit.toLowerCase() === 'weeks') 
                  solution = format(sub(parsedDate, { weeks: parseInt(value, 10) }), 'dd-MMM-yyyy')
            }


  return h.json({
    status:"success",
  result: solution
}).status(200);
//});

  }  catch (error) {
            return h.response({ error: error }).code(500);
        }

  },
};