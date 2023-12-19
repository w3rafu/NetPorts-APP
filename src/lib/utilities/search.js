//Google search settings

const seID = 'd3d7b8c07e9dd4029';
const API = ' AIzaSyD4z6sfSqdf8d1q3BXs6488TitAguHYOHk';
const url = `
https://customsearch.googleapis.com/customsearch/v1?key=${API}&cx=${seID}
`;

//Function to handle the results page data
/**
 * @param {any} service
 * @param {any} port
 * @param {any} protocol
 */
export async function getResults(service, port, protocol) {
    let query = `${service} port ${port} ${protocol}`;
    let call =  url + `&q=${query}&num=5`;
    let calling = await fetch(call);
    let response = await calling.json();
    return response.items
}

//Function to trim the description to X characters
  /**
   * @param {string} string
   * @param {number} limit
   */
export function limit(string, limit) {
    return string.substring(0, limit);
  }