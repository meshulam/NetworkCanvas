var Logger=function t(){var t={},e=[];return t.init=function(){return!0},t.addToLog=function(t,n,o){if(!n&&!t)return!1;var r=new Date,i=r.toString("H:mm:ss"),u={timestamp:r,eventType:t,eventValue:n,objectID:o};return e.push(u),notify("Logged "+u.eventType+" on object "+u.objectID+" at time point "+i,2),!0},t.getLog=function(){return e},t.getLastEvent=function(){return e[e.length-1]},t};
//# sourceMappingURL=./logger-min.map