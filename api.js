
function showData(){

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => userDetails(data));
}

 function userDetails(data){
    const ul =document.getElementById("users");
    for(const detais of data){

        // li create kora hoiche 
        const li=document.createElement('li');

        //multiple line use er jonne backtick use korchi..  ${} kora hoiche nam daynamic korte
        li.innerText= `Name: ${detais.name} 
         Email: ${detais.email}`;
        //li guloke child hisabe add kora hoiche 
        ul.appendChild(li);
    }
}

