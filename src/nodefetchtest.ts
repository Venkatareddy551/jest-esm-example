import fetch from 'node-fetch';

 export const getResponse = async ():Promise<string>  => {
  const response = await fetch('https://api.github.com/users/github');
  const body = await response.text();
  //console.log(body);
  return body;
}
