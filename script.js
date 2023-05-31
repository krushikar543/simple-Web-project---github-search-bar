const input = document.getElementById('input-search');
const button = document.getElementById('submit-button');
const accountid = document.querySelector('.nameid');
const work = document.querySelector('.work');
const repo = document.querySelector('.repo');
const followers = document.querySelector('.followers');
const following = document.querySelector('.following');
const link = document.querySelector('.account_link');
const logo = document.querySelector('.imglogo');
button.addEventListener("click", display);

function display(event){
    event.preventDefault();

    
    data = fetch('https://api.github.com/users/' + input.value).then((data) => data.json())
    .then((jsonData) => {
        
        if(typeof jsonData['login'] === "undefined"){
            alert("Enter Valid Username");
        } else{
            logo.src = jsonData['avatar_url'];
            accountid.textContent = "Account Id : " + jsonData['login'];

            work.textContent = "" + jsonData['bio'];

            repo.textContent = "No of Repositories : "+ jsonData['public_repos'];

            link.href = jsonData['html_url'];

        }
        
    });
    input.value = "";

};