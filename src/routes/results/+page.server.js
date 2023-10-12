//Get database access
import { db } from "$lib/server/firebase";

//Get firebase functions
import { doc, getDoc } from "firebase/firestore";

import { CURRENT_SEARCH } from "$lib/state.js";

//Results page data
//Get the port number and protocol from the URL
//Call firebase to get the port number info
//If not provided, page will not load and redirect to homepage
//Behavior set in hooks.server.js
export async function load({ locals }) {
    //@ts-ignore
    let port = locals.port;
    //@ts-ignore
    let protocol = locals.protocol;

    //Function to call firebase
    const getResults = async (
        /** @type {string} */ port,
        /** @type {string} */ protocol) => {

        try {
            //Connect to the collection and get the document
            let collectionReference = doc(db, protocol, port);
            let document = await getDoc(collectionReference);

            //Start with an empty response
            let response;

            //If the document exists, populate the response with the data
            //If not, populate the response with a default message
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

        } catch (error) {
            return {
                description: "Connection error",
                status: "error"
            }
        }

    }

    //Pass data to the page
    return {
        port: port,
        protocol: protocol,
        result: await getResults(port, protocol)
    }
}