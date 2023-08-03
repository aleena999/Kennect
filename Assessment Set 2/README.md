# Calendar Questions API

This is a simple HTTP server that provides an API to answer calendar-related questions. It allows you to perform date calculations like adding or subtracting days/weeks from a given date or from today.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Sending Requests](#sending-requests)
  - [Response Format](#response-format)
- [API Endpoints](#api-endpoints)
- [Error Handling](#error-handling)

## Introduction

The Calendar Questions API is a Node.js application that uses the Express framework to handle HTTP requests. It provides a simple way to calculate dates based on user input. You can perform the following types of date calculations:

- Add a specified number of days or weeks to today or a specific date.
- Subtract a specified number of days or weeks from a specific date.

## Features

- Simple and easy-to-use API for calendar calculations.
- Supports adding and subtracting days or weeks from today or a specific date.
- Handles input validation and error handling

## Getting Started

### Prerequisites

To run this application, you need to have the following installed on your system:

- Node.js 
- npm (Node Package Manager)

### Installation

1. Clone the repository or download the source code.

2. Open a terminal or command prompt and navigate to the project's root directory.

3. Install the dependencies using npm:

   ```bash
   npm install
   ```

## Usage

To start the server, run the following command in the project's root directory:

```bash
node server.js
```

The server will start running on `http://localhost:5000` by default. You can change the port by modifying the `port` variable in `server.js`.

### Sending Requests

You can send requests to the server using an HTTP client like Postman or cURL. The API endpoint to use is `/calendar_questions`, and you need to send a POST request with the following JSON object in the request body:

```json
{
  "input": "subtract, 187 days from 12-jan-2019"
}
```

Replace the value of `"input"` with the desired date calculation query.

### Response Format

The server will respond with a JSON object containing the result of the date calculation or an error message if the input is invalid or if an error occurs during the calculation.

Example response:

```json
{
  "status": "success",
  "result": "08-Jul-2018"
}
```

## API Endpoints

### POST /calendar_questions

Calculate a date based on the input query.

- Input:

  ```json
  {
    "input": "add, 6 days to today"
  }
  ```

- Response (Success):

  ```json
  {
    "status": "success",
    "result": "10-Aug-2023"
  }
  ```

- Response (Error):

  ```json
  {
    "error": "Invalid input format. Supported formats: \"add/subtract, <value> days/weeks to/from <date>\""
  }
  ```

## Error Handling

The API handles various types of errors, such as invalid input formats and invalid date strings. When an error occurs, the API will respond with an error message in the JSON format.
