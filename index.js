
// Fetch a random landscape nature photo from Unsplash API
fetch(
  "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature"
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data.urls.regular);

    // Set the fetched image as the background of the body and update author info
    document.body.style.backgroundImage = `url(${data.urls.regular})`;
    document.getElementById("author").textContent = `By: ${data.user.name}`; 
  })

  // Default image fallback incase of error 
  .catch((err) => {
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDE2NzA&ixlib=rb-1.2.1&q=80&w=1080)`;
  });
