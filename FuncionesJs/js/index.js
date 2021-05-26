/*
function sum(...sum){
    if(sum.length === 0){
        return 0
    }
    else if(sum.some(num => typeof num !== "number" || num/1 !== num)){
        return "you introduce a value diefernt than an number"
    }
return sum.reduce((total,current) => total += current)
}




const user = {
    username: "keyrol1222",
    password: "jeje",
    credits: 5,
    admin: true,
    favTopics: ["programing","Gamimg","Basket"],
    greeting: function(name){

        return `Hi ${name} i m ${this.username}, nice to meet you!!`
    }
}

const {username,password,credits,admin,favTopics} = user;

const bring = (use = user) => {

    return user.greeting()
}
*/

const btnBodyColor = document.querySelector("#btnBodyColor");
const colorh1 = document.querySelector("#colorh1");
const randomColor = () => {
  return Math.floor(Math.random() * 255);
};
btnBodyColor.onclick = () => {
  let currentColor = `rgb(${randomColor()},${randomColor()},${randomColor()})`;
  colorh1.textContent = currentColor;
  document.querySelector("body").style.backgroundColor = currentColor;
};

const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.querySelector("#emailfield").value;
  const password = document.querySelector("#passwordfield").value;
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.textContent = `email es ${email} y la contraseña es ${password}`;
  li.classList.add("nav-item");
  a.classList.add("nav-link");
  li.appendChild(a);

  document.querySelector("#ul").appendChild(li);

  li.addEventListener("click", (e) => {
    li.remove()
  });
});

// const li = document.querySelectorAll("li");
// for (li of li) {

// }


/* function multiplicar(num1,num2){
  let  result = 0
  for(let i = 0; i < num2; i++){
    result += num1;
    console.log(result)
  }
  return result
}
function maxi(arry){
  const max = arry.max()
  return result
}


 */

  const petition = async (url) =>{
    const config = {headers : {Accept : 'application/json'}}
    try {
      const res = await axios.get(url,config)
      console.log(res.data.joke)
      document.querySelector('#jokeH3').textContent = res.data.joke;
    } catch (error) {
      console.log(error)

    }
  }


  document.querySelector('#jokeButton').addEventListener('click',() => {
    petition('https://icanhazdadjoke.com/')
  })