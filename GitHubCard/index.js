/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/



/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell


  */
 


  const container = document.querySelector('.cards')

    function gitCard (data) {
        const newCard = document.createElement('div')
        const newImg = document.createElement('img');
        const info = document.createElement('div');
        const title = document.createElement('h3');
        const userName = document.createElement('p');
        const location = document.createElement('p');
        const profile = document.createElement('p');
        const profileA = document.createElement('a');
        const followers = document.createElement('p')
        const following = document.createElement('p')
        const bio = document.createElement('p')


      
      newCard.appendChild(newImg);
      newCard.appendChild(info);
      info.appendChild(userName);
      info.appendChild(title)
      info.appendChild(location);
      info.appendChild(profileA)
        profileA.appendChild(profile)
      info.appendChild(followers)  
      info.appendChild(following)
      info.appendChild(bio)

      newCard.classList.add('card');
      title.classList.add('name')
      info.classList.add('card-info')
      userName.classList.add('name');
      

      // data 
      newImg.src = `${data.avatar_url}`
      title.textContent=`${data.login}`
      userName.textContent=`${data.name}`
      location.textContent=`${data.location}`
      profile.textContent=`Profile: ${data.html_url} `
      profileA.href =`${data.html_url}`
      profileA.textContent=`${data.html_url}`
      followers.textContent=`Followers: ${data.followers}`
      following.textContent=`Following: ${data.following}`
      bio.textContent =`Bio: ${data.bio}` 


      return newCard
    }
   



// My Github account data

    axios.get('https://api.github.com/users/Techne3')
    .then(response => {
      console.log(response.data)
      container.appendChild(gitCard(response.data))
    })
    .catch(error=>{
      console.log("This looks wrong", error)
    } )
      


    // array of user Names 
    let loginArray = ['seanaleid', 'DannyManzietti' ,'rashmipoddar','crsullivan','mary-clayton','sydneyblom','WilliamBerlin76','alecblkly','roywakumelojr','markpkng','beautytechy','EvanAntunano','DTjohnson5','Chard79','bbaney','Gavin-Dreyer']
    
    //loop through user names to get correct key values
    loginArray.forEach(name => {
      axios.get(`https://api.github.com/users/${name}`)
      .then(response => {
          console.log(response)
          container.appendChild(gitCard(response.data))
      })
      .catch((error) =>{
        console.log(error)
      })
    })

   
    //looping through my gitHub followers api 
    axios
    .get('https://api.github.com/users/Techne3/followers')
    .then(response =>{
      console.log(response);
      console.log(response.data)
      followersArray = response.data;
        followersArray.forEach(data =>{
        container.appendChild(gitCard(data))
       })
    })
    .catch(error => {
      console.log('this is an ERROR', error)
    })
 


