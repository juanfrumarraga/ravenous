const apiKey = 'Y8p6nvmKlHE9cvERWQ-HoY6AnHtxpGM0kvpy66UjsvocwIBYy4jut0ZIiIwguIU3lO9epNC7Lwzizb198JGszjpU4FtldIJbEph4nwljPyiOfNqAcpIPDaazecuyWnYx';
const Yelp = {
  search(term, location, sortBy) {
    const url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}&limit=10`;
    return fetch(url, {
      headers :{Authorization: `Bearer ${apiKey}`}
    }).then(response=>{
        return response.json();
    }).then(jsonResponse => {
      if(jsonResponse.businesses){
        console.log(jsonResponse.businesses)
        return jsonResponse.businesses.map(business=>(
        {
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
        }
      ))}
    })

}
}

export default Yelp;
