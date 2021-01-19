const { app } = require("electron")

const MainTemplateMenu=[
    {
        label:'File',
        submenu:[
            {
                label:'Quit',
                accelerator: process.platform=='darwin'?'Command+Q':"Ctrl+Q",
                click(){
                    app.quit();
                }
            }
        ]
    },
    {
        label:'Help',
        submenu:[
            {
                label:'FAQs',
                accelerator: process.platform=='darwin'?'Command+H':"Ctrl+H",              
            }
        ]
    }
]
const DeveloperMenu=[
    {
        label:'Developer Tools',
        submenu:[
            {
                label:'Toggle DevTools',
                accelerator: process.platform=='darwin'?'Command+I':"Ctrl+I",
                click(item,focussedWindow){
                    focussedWindow.toggleDevTools();
                }
            },
            {
                role:'reload'              
            }
        ]
    }
]
module.exports={MainTemplateMenu:MainTemplateMenu,DeveloperMenu:DeveloperMenu}