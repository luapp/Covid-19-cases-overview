const { app, BrowserWindow, Menu } = require('electron')

function Main_window () {

  const Menu_Bar = Menu.buildFromTemplate([
    {
      label: "By Paul Le Gall  (Github: https://github.com/Creator-360/Covid-19-cases-overview)",
    }
  ])

  Menu.setApplicationMenu(Menu_Bar)


  const win = new BrowserWindow({
    center:true,
    width: 1280,
    height: 720,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.maximize();

  win.loadFile("./build/index.html")
}
app.whenReady().then(Main_window)