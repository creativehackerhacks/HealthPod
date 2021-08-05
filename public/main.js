// Modules to control application life and create native browser window
const {app, BrowserWindow, Tray, nativeImage, Menu} = require('electron')
const path = require('path')
const Store = require('electron-store')

let tray, window
// app.dock.hide()

function createWindow () {
  // Menu.setApplicationMenu(null)
  // Create the browser window.
  window = new BrowserWindow({
    width: 1200,
    height: 800,
    show: true,
    frame: true,
    fullscreenable: true,
    resizable: false,
    transparent: false,
    
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  window.on('closed', () => window = null)
  // window.loadFile(path.join(__dirname, 'index.html'))
  window.loadURL('http://localhost:3000')
}

const createTray = () => {
    const icon = path.join(__dirname, '../assets/icon.png')
    const nImage = nativeImage.createFromPath(icon)

    tray = new Tray(nImage)
    tray.on('click', (event) => toggleWindow())
}

const toggleWindow = () => {
    window.isVisible() ? window.hide() : showWindow()
}

const showWindow = () => {
    // const position = windowPosition()
    // window.setPosition(position.x, position.y)
    window.show()
}

const windowPosition = () => {
    const windowBounds = window.getBounds()
    const trayBounds = tray.getBounds()

    // const x = Math.round(trayBounds.x + (trayBounds.width/2) - (windowBounds.width/2))
    // const y = Math.round(trayBounds.y + trayBounds.height)

    const x = Math.round((windowBounds/2) + windowBounds.width)
    const y = Math.round(windowBounds.height/2)

    return {x, y}
}

app.whenReady().then(() => {
  createTray()
  createWindow()
  
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})


app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})


const store = new Store()

store.set('userSettings.theme', 'dark')

console.log('theme: ', store.get('userSettings.theme'))
// this data is getting saved at "app.getPath('userData')"
console.log(app.getPath('userData'))