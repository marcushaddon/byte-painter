const { exec } = require('child_process');

exec('google-chrome frontend/index.html &', (err, stdout, stderr) => {
    console.log(stdout, err, stderr);

    exec('websocketd --port=8080 -binary=true ./bytes.sh', (err, stdout, stderr) => {
        console.log(err, stdout, stderr);
    })
});

