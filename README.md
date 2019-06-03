# glitch-webauthn
Simple project for exploring Web Authentication

# Running on glitch.me

1. Open glitch.me in Chrome (or another browser with Webauthn support) 
2. click "New Project"
3. click "Clone from Git Repo"
4. fill in the URL of this repo (i.e. `https://github.com/joostd/glitch-webauthn.git`).

Or simply click [here](https://glitch.com/edit/#!/remix/clone-from-repo?REPO_URL=https://github.com/joostd/glitch-webauthn.git).

After the clone has loaded,
from the "Show" menu, select "In a new Window". Open the JavaScript console from there.

# Running locally

You can run this application locally using the PHP builtin web server:

    git clone https://github.com/joostd/glitch-webauthn.git
    cd glitch-webauth
    php -S 0:8080 -t .  

Open Chrome with the URL http://localhost:8080/
