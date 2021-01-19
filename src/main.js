const electron=require('electron');
const url=require('url');
const path=require('path');
const UtilityConstant=require('./Entities/utilityConstant').UtilityConstant;
const {app,BrowserWindow,Menu}=electron;
const _menuTemplate=require('./Entities/FileMenu').MainTemplateMenu;
const _devToolsMenu=require('./Entities/FileMenu').DeveloperMenu;
require('dotenv').config();
let server=require('./server/server')
let mainWindow;
var constants=new UtilityConstant();
//When the app is ready
app.on('ready', function(){
    mainWindow=new BrowserWindow({
        show:false,
        fullscreen:true,
        closable:true,
        webPreferences: {
            nodeIntegration: true
        }
        
    });
    //Load a html in the window
    mainWindow.loadURL(url.format({
        pathname:path.join(__dirname,'_html/_main.html'),
        protocol:'file',
        slashes:true
    }))

    mainWindow.on('ready-to-show',()=>{
        mainWindow.show();
    });
    //For Mac To Handle
    if(constants.platform=='darwin'){_menuTemplate.unshift({})};
    //Add Developer Tools if not in production
    if(constants.env!='PROD')
    {
        _devToolsMenu.forEach(item=>_menuTemplate.push(item));
    }
    let menuTemplate=Menu.buildFromTemplate(_menuTemplate);
    Menu.setApplicationMenu(menuTemplate);
})



