const { app, BrowserWindow, Menu } = require('electron')
//const { autoUpdater } = require("electron-updater")

const Bug_Report_window = () => {
  const window = new BrowserWindow({
    width: 640,
    height: 500,
    center: true,
    maximizable: false,
    minimizable: false,
    webPreferences: {
      nodeIntegration: false
    }
  })

  window.loadFile("../electron/Bug_Report.html")
}

function Main_window () {

  const Menu_Bar = Menu.buildFromTemplate([
    {
      label: "About",
      click(){
        Bug_Report_window()
      }
    },
    {
      role: "separator"
    },
    {
      label: "Check for updates",
      click(){
        Bug_Report_window()
      }
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