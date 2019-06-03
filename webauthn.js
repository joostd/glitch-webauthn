var challenge = window.crypto.getRandomValues(new Uint8Array(8));
var id = Uint8Array.from("1234");

var publicKey = {
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

console.log(publicKey);
console.log(JSON.stringify(publicKey));

var result;

function register() {
  navigator.credentials.create({ 'publicKey': publicKey })
    .then(process)
    .catch(console.log)
}

function process(cred) {
  console.log(cred)
  var enc = new TextDecoder(); // always utf-8
  var clientData = enc.decode(cred.response.clientDataJSON);
  console.log(clientData)
  console.log(clientData.challenge);
}
