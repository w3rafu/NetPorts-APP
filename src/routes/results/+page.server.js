//Get database access
import { db } from "$lib/server/firebase";

//Get firebase functions
import { doc, getDoc } from "firebase/firestore";

//Get current search state
import { CURRENT_SEARCH, PAGE_TITLE } from "$lib/utilities/state.js";

//Function to handle the results page data
export async function load({ url }){

    //Get the port and protocol from the url/
    let port = url.searchParams.get('port');

    let protocol = url.searchParams.get('protocol');


    //Function to call firebase
    const getResults = async (
        /** @type {string} */ port,
        /** @type {string} */ protocol) => {

        //Attempts to connect to firebase
        //If it succeeds, return the data
        //If it fails, return an connection error message
        try {
            //Connect to the collection (protocol name) 
            //and get the document (port number)
            let collectionReference = doc(db, protocol, port);
            let document = await getDoc(collectionReference);

            //Start with an empty response
            let response;

            //If the document exists, populate the response with the data
            //If not, populate the response with an error status
            if (document.exists()) {
                response = document.data();
     

            } else {
                response = {
                    description: "Document not found",
                    status: "error"
                }
            }
            //Return the response
            return response

        } 
        //If the connection fails, return an error message
        catch (error) {
            return {
                description: "Connection error",
                status: "error"
            }
        }
    }

    // Send the data to the page
    return {
        port: port,
        protocol: protocol,
        //@ts-ignore
        result: await getResults(port, protocol),
        title: port + " " + protocol
    }
}