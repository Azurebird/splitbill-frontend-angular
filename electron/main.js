const { app, BrowserWindow} = require("electron");

let window = null;

const createWindow = () => {
  window = new BrowserWindow({ fullscreen: true });
  window.loadFile("dist/splitbill-frontend-angular/index.html");
  window.webContents.openDevTools();
}

app.on("ready", createWindow)