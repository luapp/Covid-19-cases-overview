const { app, BrowserWindow, Menu } = require('electron')

const Bug_Report_window = () => {
  const window = new BrowserWindow({
    width: 640,
    height: 360,
    center: true,
    webPreferences: {
      nodeIntegration: false
    }
  })

  window.loadFile("./electron/Bug_Report.html")
}

function Main_window () {

  const Menu_Bar = Menu.buildFromTemplate([
    {
      label: "Informations",
      submenu: [
        {
          label: "About"
        },
        {
          label: "Report a bug",
          click(){
            Bug_Report_window()
          }
        },
      ]
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