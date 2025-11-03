// safeRun.js
function safeRun(name, func){
    try{
        func();
    }catch(err){
        print("[ERROR][" + name + "] " + err);
        if(Vars.ui && Vars.ui.showInfoToast){
            Vars.ui.showInfoToast("[Error][" + name + "] " + err, 3);
        }
    }
}
module.exports = safeRun;