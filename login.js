document.querySelector("#register").addEventListener("click", function () {
    const mail = document.querySelector("#registerEmail").value
    const psw =  document.querySelector("#registerPassword").value
    const userName = document.querySelector("#registerName").value

  fetch("https://wheatherapp-backend-iota.vercel.app/users/signup", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body:  JSON.stringify({name: userName, email: mail, password: psw})
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.result){
        window.location.assign('http://127.0.0.1:5500/week3/weatherapp-part4/frontend/index.html')
      }
    });
});


document.querySelector("#connection").addEventListener("click", function () {
    const mail = document.querySelector("#connectionEmail").value
    const psw =  document.querySelector("#connectionPassword").value
    
    console.log(mail)
    console.log(typeof mail)
  fetch("https://wheatherapp-backend-iota.vercel.app/users/signin", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body:  JSON.stringify({ email: mail, password: psw})
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.result){
        window.location.assign('http://127.0.0.1:5500/week3/weatherapp-part4/frontend/index.html')
      }
    });
});