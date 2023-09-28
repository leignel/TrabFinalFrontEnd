const username = "Rofogale";

fetch(`https://api.github.com/users/${username}`)
  .then((response) => response.json())
  .then((data) => {
    const avatarUrl = data.avatar_url;

    const avatarImage = document.createElement("img");
    avatarImage.src = avatarUrl;
    avatarImage.style.width = "80px";
    avatarImage.style.height = "80px";
    avatarImage.style.borderRadius = "50%";
    avatarImage.style.boxShadow = "0px 4px 20px black";
    document.getElementById("marco-avatar").appendChild(avatarImage);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

const username1 = "lucaslatsch";

fetch(`https://api.github.com/users/${username1}`)
  .then((response) => response.json())
  .then((data) => {
    const avatarUrl = data.avatar_url;

    const avatarImage = document.createElement("img");
    avatarImage.src = avatarUrl;
    avatarImage.style.width = "80px";
    avatarImage.style.height = "80px";
    avatarImage.style.borderRadius = "50%";
    avatarImage.style.boxShadow = "0px 4px 20px black";
    document.getElementById("lucas-avatar").appendChild(avatarImage);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

const username2 = "leignel";

fetch(`https://api.github.com/users/${username2}`)
  .then((response) => response.json())
  .then((data) => {
    const avatarUrl = data.avatar_url;

    const avatarImage = document.createElement("img");
    avatarImage.src = avatarUrl;
    avatarImage.style.width = "80px";
    avatarImage.style.height = "80px";
    avatarImage.style.borderRadius = "50%";
    avatarImage.style.boxShadow = "0px 4px 20px black";
    document.getElementById("cristian-avatar").appendChild(avatarImage);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

const username3 = "joselourencocm";

fetch(`https://api.github.com/users/${username3}`)
  .then((response) => response.json())
  .then((data) => {
    const avatarUrl = data.avatar_url;

    const avatarImage = document.createElement("img");
    avatarImage.src = avatarUrl;
    avatarImage.style.width = "80px";
    avatarImage.style.height = "80px";
    avatarImage.style.borderRadius = "50%";
    avatarImage.style.boxShadow = "0px 4px 20px black";
    document.getElementById("jose-avatar").appendChild(avatarImage);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

const username4 = "BernardoChrist";

fetch(`https://api.github.com/users/${username4}`)
  .then((response) => response.json())
  .then((data) => {
    const avatarUrl = data.avatar_url;

    const avatarImage = document.createElement("img");
    avatarImage.src = avatarUrl;
    avatarImage.style.width = "80px";
    avatarImage.style.height = "80px";
    avatarImage.style.borderRadius = "50%";
    avatarImage.style.boxShadow = "0px 4px 20px black";
    document.getElementById("bernardo-avatar").appendChild(avatarImage);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

const username5 = "marcospavao";

fetch(`https://api.github.com/users/${username5}`)
  .then((response) => response.json())
  .then((data) => {
    const avatarUrl = data.avatar_url;

    const avatarImage = document.createElement("img");
    avatarImage.src = avatarUrl;
    avatarImage.style.width = "80px";
    avatarImage.style.height = "80px";
    avatarImage.style.borderRadius = "50%";
    avatarImage.style.boxShadow = "0px 4px 20px black";
    document.getElementById("marcos-avatar").appendChild(avatarImage);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// dark mode button
function darkMode() {
  let element = document.body;
  let content = document.getElementById("DarkModetext");
  element.className = "dark-mode";
  content.innerText = "Dark Mode is ON";
}

function ligthMode() {
  let element = document.body;
  let content = document.getElementById("DarkModetext");
  element.className = "light-mode";
  content.innerText = "Dark Mode is OFF";
}

function salvaDados() {
  const nome = document.querySelector("#nome");
  const email = document.querySelector("#email");
  const mensagem = document.querySelector("#mensagem");

  if (email.value === "" || nome.value === "" || mensagem.value === "") {
    console.log("Preencha todos os campos");
    return;
  } else {
    const user = {
      nome: nome.value,
      email: email.value,
      mensagem: mensagem.value,
    };
    localStorage.setItem("user", JSON.stringify(user));
    nome.value = "";
    email.value = "";
    mensagem.value = "";
  }

  console.log("Nome: ", nome.value);
  console.log("Email: ", email.value);
  console.log("Texto: ", mensagem.value);
}
