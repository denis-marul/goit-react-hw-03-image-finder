const BASE_URL = 'https://pixabay.com/api/';
const MY_API_KEY = '36420876-12c3c21f45faffbcb4176eb7d';
const IMG_TYPE = 'image_type=photo';
const ORIENTATION = 'orientation=horizontal';

export default function fetchPhotos(name, page) {
    
   const resp = fetch(`${BASE_URL}?q=${name}&page=${page}&key=${MY_API_KEY}&${IMG_TYPE}&${ORIENTATION}&per_page=12`)
       .then(response => {
           if (response.ok) {
               return response.json();
           }
           return Promise.reject(
               new Error("No results has been found."),
           );
       })
   
    return resp;
}
 