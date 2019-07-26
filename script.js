


function searchApi (username) {
  let url=`https://api.github.com/users/${username}/repos?type=owner`;
  console.log(url);
  console.log(username);

  fetch(url)
  .then(function(response){
    return response.json();
  })
  .then(function(responseJSON){
      $('.results').empty();
      console.log(responseJSON);

  for (let i = 0; i < responseJSON.length; i ++){
        $('.results').append(`<h2> ${responseJSON[i].name} </h2>
        <a href="${responseJSON[i].url}"> ${responseJSON[i].url} </a>`);

}
})
}



function watchForm() {
  $('.submit-username').on('click', function(event) {
    event.preventDefault();
    let username= $('#text-input').val();
    console.log(username);

    searchApi(username);

  })
}


watchForm();