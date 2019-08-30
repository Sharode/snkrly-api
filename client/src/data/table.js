const Table = [
    {
      _id: "5b21ca3eeb7f6fbccd471815",
      status: "200 - Ok",
      response: 'Everything worked as expected'
    },
    {
      _id: "5b21ca3eeb7f6fbccd471816",
      status: "400 - Bad Request",
      response: "The request was unacceptable, often due to missing a required parameter."
    },
    {
      _id: "5b21ca3eeb7f6fbccd471817",
      status: "401 - Unauthorized",
      response: " No valid API Key provided"
    },
    {
      _id: "5b21ca3eeb7f6fbccd471819",
      status: "402 - Request Failed",
      response: "The parameters were valid but the request failed."
    },
    {
      _id: "5b21ca3eeb7f6fbccd47181a",
      status: "403 - Forbidden",
      response: "The API key doesn't have permissions to perform the request."
    },
    {
      _id: "5b21ca3eeb7f6fbccd47181b",
      status: "404 - Not Found",
      response: "The request resource doesn't exist."
    },
    {
      _id: "5b21ca3eeb7f6fbccd47181e",
      status: "500,502,503,504 - Server Errors",
      response: "Something went wrong on Snkrly's end. (This should be rare)."
    }
  ];
  
  export function getTable() {
    return Table;
  }