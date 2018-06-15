const { exec } = require('child_process');

exec('google-chrome frontend/index.html', (err, stdout, stderr) => {
    console.log(stdout);

    exec('websocketd --port=8080 ./bytes.sh', (err, stdout, stderr) => {
        console.log(stdout);
    })
});

