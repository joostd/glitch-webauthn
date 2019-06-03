PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()
  .then(function(available){ 
    console.log("Verifying Platform Authenticator", available ? "is" : "is not", "available");
  }).catch(console.error);

var challenge = window.crypto.getRandomValues(new Uint8Array(8));
var id = Uint8Array.from("1234");

var createOpts = {
    'challenge': challenge,
    'rp': {
        'name': 'Acme'
    },
    'user': {
        'id': id,
        'name': 'john',
        'displayName': 'John'
    },
    'pubKeyCredParams': [
        { 'type': 'public-key', 'alg': -7  },
    ]
}

var getOpts = {
    'challenge': challenge,
    'rp': {
        'name': 'Acme'
    },
    'user': {
        'id': id,
        'name': 'john',
        'displayName': 'John'
    },
    'pubKeyCredParams': [
        { 'type': 'public-key', 'alg': -7  },
    ]
}

console.log(createOpts);

function register() {
  navigator.credentials.create({ 'publicKey': createOpts })
    .then(processCreate)
    .catch(console.log)
}

function login() {
  navigator.credentials.get({ 'publicKey': getOpts })
    .then(processGet)
    .catch(console.log)
}

function processCreate(cred) {
  console.log(cred)
  var enc = new TextDecoder(); // always utf-8
  var clientData = enc.decode(cred.response.clientDataJSON);
  console.log(clientData)
  console.log(clientData.challenge);
}

function processGet(cred) {
  console.log(cred)
  var enc = new TextDecoder(); // always utf-8
  var clientData = enc.decode(cred.response.clientDataJSON);
  console.log(clientData)
  console.log(clientData.challenge);
}
