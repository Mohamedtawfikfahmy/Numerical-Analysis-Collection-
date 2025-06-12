const{app,BrowserWindow}=require('electron');
function createwindow(){
    const win=new BrowserWindow({
    width:550,
    height:650,
    resizable:true,
    frame:true,
    autoHideMenuBar:true,
    icon: __dirname + '/icon/inter.png',
    webPreferences:{
        nodeIntegration:true,
        contextIsolation:false,
        enableRemoteModule:true,
    }
});
win.loadFile('index.html');

}

app.whenReady().then(createwindow);
