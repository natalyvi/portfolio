let profilePicture;
let bio;

fetch('https://api.github.com/users/natalyvi')
    .then(res => {
        return res.json();

    })
    .then(data => {
        document.getElementById('bio').innerHTML = data.bio;
        document.getElementById('profile-pic').setAttribute('src', data.avatar_url);
    });


document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
});

