import axios, { Axios } from "axios";

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

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

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

// function gitHubUser (user){



//   axios.get(`https://api.github.com/users/${user}`)
//   .then(res =>{
//     document.querySelector('.cards').appendChild(userMaker(res.data))
//   })
  
//   .catch(err =>{
//     console.error(err)
//   })


  
// }


followersArray.forEach(function(element){
  axios.get(`https://api.github.com/users/${element}`)
    .then(res =>{
      document.querySelector('.cards').appendChild(userMaker(res.data))
    })
    
    .catch(err =>{
      console.error(err)
    })
})




gitHubUser('lmigonzalez')




function userMaker(obj){

  const userCard = document.createElement('div');
  userCard.classList.add('card');

  const userImg = document.createElement('img');
  userImg.src = obj.avatar_url;

  const userInf = document.createElement('div');
  userInf.classList.add('card-info');

  const userName = document.createElement('h3');
  userName.classList.add('name');
  userName.textContent = obj.name;
  

  const user_userName = document.createElement('p');
  user_userName.classList.add('username');
  user_userName.textContent = obj.login;

  const userLocation = document.createElement('p');
  userLocation.textContent = obj.location;
  
  const userProfile = document.createElement('p');

  const userUrl = document.createElement('a');
  userUrl.src = obj.html_url;

  const userFollowers = document.createElement('p');
  userFollowers.textContent = obj.followers;

  const userFollowing = document.createElement('p');
  userFollowing.textContent = obj.following;

  const userBio = document.createElement('p');
  userBio.textContent = obj.bio;

  userLocation.appendChild(userUrl);

  userInf.appendChild(userName);
  userInf.appendChild(user_userName);
  userInf.appendChild(userLocation);
  userInf.appendChild(userProfile);
  userInf.appendChild(userFollowers);
  userInf.appendChild(userFollowing);
  userInf.appendChild(userBio);

  userCard.appendChild(userImg)
  userCard.appendChild(userInf)

  
  return userCard;
}



