!function(){function e(){console.log("josh!")}window.debugLevel=1;var n=document.getElementById("content");window.session=new Session({}),$(".arrow-next").click(function(){session.nextStage()}),$(".arrow-prev").click(function(){session.prevStage()}),window.menu=new Menu({});var o=menu.addMenu("Settings","hi-icon-cog");menu.addItem(o,"Load Data","icon-globe",e),menu.addItem(o,"Reset Application","icon-globe",e),menu.addItem(o,"Download Data","icon-globe",e),menu.addItem(o,"Sync with Server","icon-globe",session.saveData),menu.addItem(o,"Global App Settings","icon-globe",e)}();
//# sourceMappingURL=./main-min.map