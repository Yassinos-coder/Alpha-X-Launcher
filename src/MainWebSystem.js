require('electron');
// Coded By yassinos with the help of simon

function OpenWebsite() {
    require("electron").shell.openExternal("https://alphagamingcommunity.000webhostapp.com/");
}


function OpenFivem() {
    // Starter 
    require("electron").shell.openExternal('file://' + __dirname + '/bat_files/starter.bat');
    shell.beep()
        //fivem://connect/127.0.0.1:30180
}

function OpenDiscord() {
    require("electron").shell.openExternal("https://discord.gg/uqH3xxh");
}

function CleanCache() {
    require("electron").shell.openExternal('file://' + __dirname + '/bat_files/CleanCache.bat');
}

function reload() {
    document.getElementById('iframeBoxes').src += '';
}
setInterval(reload, 4500);

function reload2() {
    document.getElementById('iframeBoxes2').src += '';
}
setInterval(reload2, 4500);

function reload3() {
    document.getElementById('iframeBoxes3').src += '';
}
setInterval(reload3, 4500);

function reload4() {
    document.getElementById('iframeBoxes4').src += '';
}
setInterval(reload4, 4500);


// 

const ping = require('web-pingjs');

require('web-pingjs');

function getping() {
    ping('https://41.251.71.2:30180').then(function(delta) {
        resultTrue()
    }).catch(function(err) {
        resultFalse()
    });
}

function resultTrue() {
    document.getElementById("pinger").style.color = "Green";
    document.getElementById("pinger").innerHTML = "Online";

}

function resultFalse() {
    document.getElementById("pinger").style.color = "Red";
    document.getElementById("pinger").innerHTML = "Offline"
}

function ReCheckStatus() {
    getping();
    getWebsite();
}

function getWebsite() {
    ping('https://alphagamingcommunity.000webhostapp.com/').then(function(delta) {
        WebOn()
    }).catch(function(err) {
        WebOff()
    });
}

function WebOn() {
    document.getElementById("Web").style.color = "Green";
    document.getElementById("Web").innerHTML = "Online";

}

function WebOff() {
    document.getElementById("Web").style.color = "Red";
    document.getElementById("Web").innerHTML = "Offline"
}

setInterval(ReCheckStatus, 2000);


const exec = require('child_process').exec;

const isRunning = (query, cb) => {
    let platform = process.platform;
    let cmd = '';
    switch (platform) {
        case 'win32':
            cmd = `tasklist`;
            break;
        case 'darwin':
            cmd = `ps -ax | grep ${query}`;
            break;
        case 'linux':
            cmd = `ps -A`;
            break;
        default:
            break;
    }
    exec(cmd, (err, stdout, stderr) => {
        cb(stdout.toLowerCase().indexOf(query.toLowerCase()) > -1);
    });
}


function SteamOpen() {
    isRunning('steam.exe', (status) => {
        if (status == true) {
            document.getElementById('StatusSteam').style.color = "green";
            document.getElementById('StatusSteam').innerHTML = ('Opened');
        } else {
            document.getElementById('StatusSteam').style.color = "red";
            document.getElementById('StatusSteam').innerHTML = ('Closed');
            document.getElementById('FiveMConnect').style.display = "none";
        }
    })
}


function DiscordOpen() {
    isRunning('discord.exe', (status) => {
        if (status == true) {
            document.getElementById('StatusDiscord').style.color = "green";
            document.getElementById('StatusDiscord').innerHTML = ('Opened');
        } else {
            document.getElementById('StatusDiscord').style.color = "red";
            document.getElementById('StatusDiscord').innerHTML = ('Closed');
            document.getElementById('FiveMConnect').style.display = "none";
        }
    })
}



const API_URL = `https://www.cloudflare.com/cdn-cgi/trace`;

function onDataRecieve() {
    const ipRegex = /[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/
    const IP = xhttp.responseText.match(ipRegex)[0];
    document.getElementById("Ipadress").innerHTML = IP
}
const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = onDataRecieve;
xhttp.open("GET", API_URL, true);
xhttp.send();

function HideMe() {
    document.getElementById('Ipadress').style.display = "none";
    document.getElementById('IpadressHidden').innerHTML = ('Hidden');
    document.getElementById('IpadressHidden').style.color = "red";
}



setInterval(onDataRecieve, 2000);
setInterval(SteamOpen, 2000);
setInterval(DiscordOpen, 2000);