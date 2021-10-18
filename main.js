const path = require('path');
const url = require('url');
const {app, BrowserWindow} = require('electron');
const { dirname } = require('path');

let win;


function createWindow(){
    win = new BrowserWindow({
        width: 700,
        height: 500,
        icon: __dirname + "/img/smile.png"
    });


    win.loadURL(url.format({
        pathname: path.join(__dirname, 'main.html'),
        protocol: 'file',
        slashes: true
    }))

    win.webContents.openDevTools();

    win.on('closed', function(){
        win = null;
    })
}

app.on('ready', createWindow);