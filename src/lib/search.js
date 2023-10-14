const seID = 'd3d7b8c07e9dd4029';
const API = ' AIzaSyD4z6sfSqdf8d1q3BXs6488TitAguHYOHk ';
const url = `
https://customsearch.googleapis.com/customsearch/v1?key=${API}&cx=${seID}
`;


/**
 * @param {string} query
 */

export async function getResults(query) {
    let call =  url + `&q=${query}&num=3`;
    let calling = await fetch(call);
    let response = await calling.json();
    return response.items
}