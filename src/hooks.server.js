import { redirect } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve}) {

    //If user access the URL /results, 
    //then we need to get the port number from the URL
    //and pass it to the load function
    //Otherwise redirect to the homepage
	if (event.url.pathname.startsWith('/results')) {
        if(!event.url.searchParams.get('port') || !event.url.searchParams.get('protocol')) {
            throw redirect(302, '/');
        }
	}
	const response = await resolve(event);
	return response;
}