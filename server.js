const express = require('express');
const { add, sub, format, parse, startOfDay } = require('date-fns');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.post('/calendar_questions', (req, res) => {
  try {
    const input = req.body.input; // Extract the "input" property from the request body
    let solution;
    const operationRegex = /^(add|subtract),\s*(\d+)\s+(days|weeks)\s+(to|from)\s+(today|\d{1,2}-[a-zA-Z]{3}-\d{4})$/; //RegEX for input
    const matches = input.match(operationRegex); //Parsed input
    if (!matches) {
      console.log('Invalid input format:', input);
      return res.json({ error: 'Invalid input format. Supported formats: "add/subtract, <value> days/weeks to/from <date>"' }).status(400);
    }
    
    const [_, operation, value, unit,__, dateStr] = matches;
    let parsedDate;

    if (dateStr.toLowerCase() === 'today') {
      parsedDate = startOfDay(new Date());
    }
    else {
      parsedDate = parse(dateStr, 'dd-MMM-yyyy', new Date());
    }

    if (operation.toLowerCase() === 'add') {
      if (unit.toLowerCase() === 'days') {
        // solution = format(add(parsedDate, { days: parseInt(value, 10) }), 'dd-MMM-yyyy');
        solution = format(add(parsedDate, { days: value }), 'dd-MMM-yyyy');
      } else if (unit.toLowerCase() === 'weeks') {
        solution = format(add(parsedDate, { weeks: parseInt(value, 10) }), 'dd-MMM-yyyy');
      }
    }
    else if (operation.toLowerCase() === 'subtract') {
      if (unit.toLowerCase() === 'days') {
        solution = format(sub(parsedDate, { days: parseInt(value, 10) }), 'dd-MMM-yyyy');
      } else if (unit.toLowerCase() === 'weeks') {
        solution = format(sub(parsedDate, { weeks: parseInt(value, 10) }), 'dd-MMM-yyyy');
      }
    }

    if (!solution) {
      console.log('Date calculation error:', error);
      return res.json({ error: 'Invalid input or error occurred during date calculation.' }).status(500);
    }

    return res.json({
      status: 'success',
      result: solution
    }).status(200);

  } catch (error) {
    console.log('Error:', error);
    return res.json({ error: error }).status(500);
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});