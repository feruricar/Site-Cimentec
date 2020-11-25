var config = {
    apiKey: "AIzaSyBDeZfjRCvtFqQY8yx_nuGM6EyJ7qjnKKU",
    authDomain: "cimentec.firebaseapp.com",
    databaseURL: "https://cimentec.firebaseio.com",
    projectId: "cimentec",
    storageBucket: "cimentec.appspot.com",
    messagingSenderId: "647674729702",
    appId: "1:647674729702:web:bd81f75b9ff001e8539727",
    measurementId: "G-ZTJC0Q4NB9"

};
firebase.initializeApp(config);


//Enviar contato para o firebase
var usersList = document.getElementById('usersList');
var nomeInput = document.getElementById('nome');
var emailInput = document.getElementById('email');
var telefoneInput = document.getElementById('telefone');
var mensagemInput = document.getElementById('mensagem');
var enviarButton = document.getElementById('enviarButton');

// Ao clicar no botão
enviarButton.addEventListener('click', function () {
    create(nomeInput.value, emailInput.value, telefoneInput.value, mensagemInput.value);
});

// Função para criar um registro no Firebase
function create(nome, email, telefone, mensagem) {
    var data = {
        nome: nome,
        email: email,
        telefone: telefone,
        mensagem: mensagem,
    };

    return firebase.database().ref().child('contato').push(data);
}

firebase.database().ref('contato').on('value', function (snapshot) {
    usersList.innerHTML = '';
    snapshot.forEach(function (item) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(item.val().nome + ': ' + item.val().email + ':' + item.val().telefone + ':' + item.val().mensagem));
        usersList.appendChild(li);
    });
});

// Fim Cofigo enviar contato para Firebase