var Namegenerator=function e(t){var a={};a.options={nodeType:"Alter",edgeType:"Dyad",targetEl:$(".container"),variables:[],heading:"This is a default heading",subheading:"And this is a default subheading"},extend(a.options,t);var o=!1,n=!1,i=network.getNodes({type_t0:"Alter"}).length,l={Friend:["Best Friend","Friend","Ex-friend","Other type"],"Family / Relative":["Parent/Guardian","Brother/Sister","Grandparent","Other Family","Chosen Family"],"Romantic / Sexual Partner":["Boyfriend/Girlfriend","Ex-Boyfriend/Ex-Girlfriend","Booty Call/Fuck Buddy/Hook Up","One Night Stand","Other type of Partner"],"Acquaintance / Associate":["Coworker-Colleague","Classmate","Roommate","Friend of a Friend","Neighbor","Other"],"Other Support / Source of Advice":["Teacher/Professor","Counselor/Therapist","Community Agency Staff","Religious Leader","Mentor","Coach","Other"],"Drug Use":["Someone you use drugs with","Someone you buy drugs from"],Other:[]},r=["Barney","Jonathon","Myles","Alethia","Tammera","Veola","Meredith","Renee","Grisel","Celestina","Fausto","Eliana","Raymundo","Lyle","Carry","Kittie","Melonie","Elke","Mattie","Kieth","Lourie","Marcie","Trinity","Librada","Lloyd","Pearlie","Velvet","Stephan","Hildegard","Winfred","Tempie","Maybelle","Melynda","Tiera","Lisbeth","Kiera","Gaye","Edra","Karissa","Manda","Ethelene","Michelle","Pamella","Jospeh","Tonette","Maren","Aundrea","Madelene","Epifania","Olive"],s=function(e){13===e.keyCode&&(e.preventDefault(),o===!1?a.openNodeBox():o===!0&&$(".submit-1").click()),27===e.keyCode&&a.closeNodeBox(),8!==e.keyCode||$(e.target).is("input, textarea")||e.preventDefault()},d=function(){$(this).data("selected")===!0?($(this).data("selected",!1),$(this).removeClass("selected")):($(this).data("selected",!0),$(this).addClass("selected"))},p=function(e){if(o===!0&&13!==e.keyCode&&$("#fname_t0").val().length>0&&$("#fname_t0").val().length>0){var t=$("#fname_t0").val()+" "+$("#lname_t0").val().charAt(0);$("#lname_t0").val().length>0&&(t+=".");var a=function(){$("#nname_t0").val(t)};setTimeout(a,0)}},c=function(){a.destroy()},u=function(){var e=$(this).data("index"),t=network.getEdges({from:network.getNodes({type_t0:"Ego"})[0].id,to:e,type:"Dyad"})[0];n=e;var o=network.getEdges({from:network.getNodes({type_t0:"Ego"})[0].id,to:n,type:"Role"}).length;$(".relationship-button").html(o+" roles selected."),$.each(a.options.variables,function(e,o){o.private===!1&&("relationship"===o.type?$("select[name='"+o.variable+"']").val(t[o.variable]):$("#"+o.variable).val(t[o.variable]),$(".delete-button").show(),a.openNodeBox())})},h=function(){$(".delete-button").hide(),a.closeNodeBox()},v=function(){return""===$("select[name='reltype_main_t0']").val()?($("select[name='reltype_sub_t0']").prop("disabled",!0),!1):($("select[name='reltype_sub_t0']").prop("disabled",!1),$("select[name='reltype_sub_t0']").children().remove(),$("select[name='reltype_sub_t0']").append('<option value="">Choose a specific relationship</option>'),void $.each(l[$("select[name='reltype_main_t0']").val()],function(e,t){$("select[name='reltype_sub_t0']").append('<option value="'+t+'">'+t+"</option>")}))},b=function(){"Other"===$("select[name='reltype_sub_t0']").val()?$(".reltype_oth_t0").show():($(".reltype_oth_t0").val(""),$(".reltype_oth_t0").hide())},m=function(e){e.preventDefault();var t={},o={};$(".delete-button").hide(),$.each(a.options.variables,function(e,a){"edge"===a.target?t[a.variable]=a.private===!0?a.value:"relationship"===a.type||"subrelationship"===a.type?$("select[name='"+a.variable+"']").val():$("#"+a.variable).val():"node"===a.target&&(o[a.variable]=a.private===!0?a.value:"relationship"===a.type||"subrelationship"===a.type?$("select[name='"+a.variable+"']").val():$("#"+a.variable).val())});var l={},r={};if(n===!1){extend(l,o);var s=network.addNode(l),d;$.each(a.options.edgeTypes,function(e,t){var o={},n=t;$.each(a.options.variables,function(e,t){"edge"===t.target&&t.edge===n&&(o[t.variable]=t.private===!0?t.value:"relationship"===t.type||"subrelationship"===t.type?$("select[name='"+t.variable+"']").val():$("#"+t.variable).val())}),r={from:network.getNodes({type_t0:"Ego"})[0].id,to:s,type:n},extend(r,o),d=network.addEdge(r)}),$.each($(".relationship.selected"),function(){r={type:"Role",from:network.getNodes({type_t0:"Ego"})[0].id,to:s,reltype_main_t0:$(this).parent(".relationship-type").data("main-relationship"),reltype_sub_t0:$(this).data("sub-relationship")},network.addEdge(r)});var p=network.getEdges({to:s,type:"Dyad"})[0];a.addToList(p),i++,$(".alter-count-box").html(i)}else{var c=function(){var e=$("div[data-index="+n+"]");e.stop().transition({background:"rgb(0, 255, 104)"},400,"ease"),setTimeout(function(){e.stop().transition({background:"rgba(238,238,238, 1)"},800,"ease")},700)},u=n;$.each(a.options.edgeTypes,function(e,t){var o=t,i={};$.each(a.options.variables,function(e,t){"edge"===t.target&&t.edge===o&&(i[t.variable]=t.private===!0?t.value:"relationship"===t.type||"subrelationship"===t.type?$("select[name='"+t.variable+"']").val():$("#"+t.variable).val())});var l=network.getEdges({from:network.getNodes({type_t0:"Ego"})[0].id,to:n,type:t});$.each(l,function(e,t){network.updateEdge(t.id,i,c)})}),network.updateNode(u,o);var h=extend(t,o);network.removeEdges(network.getEdges({type:"Role",from:network.getNodes({type_t0:"Ego"})[0].id,to:n})),$.each($(".relationship.selected"),function(){r={type:"Role",from:network.getNodes({type_t0:"Ego"})[0].id,to:n,reltype_main_t0:$(this).parent(".relationship-type").data("main-relationship"),reltype_sub_t0:$(this).data("sub-relationship")},network.addEdge(r)}),$("div[data-index="+n+"]").html(""),$("div[data-index="+n+"]").append("<h4>"+h.nname_t0+"</h4>");var v=$("<ul></ul>");$.each(a.options.variables,function(e,t){t.private===!1&&void 0!==h[t.variable]&&""!==h[t.variable]&&v.append('<li class="'+h[t.variable]+'"><strong>'+t.label+"</strong>: "+h[t.variable]+"</li>")}),$("div[data-index="+n+"]").append(v),n=!1}a.closeNodeBox()};return a.generateTestAlters=function(e){if(!e)return notify("You must specify the number of test alters you want to create. Cancelling!",2),!1;$(".add-button").click(),setTimeout(function(){$("#ngForm").submit()},3e3),$("#fname_t0").val(r[Math.floor(randomBetween(0,r.length))]),$("#lname_t0").val(r[Math.floor(randomBetween(0,r.length))]);var t=$("#fname_t0").val()+" "+$("#lname_t0").val().charAt(0);$("#lname_t0").val().length>0&&(t+="."),$("#nname_t0").val(t),$("#age_p_t0").val(Math.floor(randomBetween(18,90))),setTimeout(function(){$(".relationship-button").click()},500),setTimeout(function(){$($(".relationship")[Math.floor(randomBetween(0,$(".relationship").length))]).addClass("selected"),$(".relationship-close-button").click()},2e3)},a.openNodeBox=function(){$(".content").addClass("blurry"),$(".newNodeBox").transition({scale:1,opacity:1},300),$("#ngForm input:text").first().focus(),o=!0},a.closeNodeBox=function(){$(".content").removeClass("blurry"),$(".newNodeBox").transition({scale:.1,opacity:0},500),setTimeout(function(){}),o=!1,$("#ngForm").trigger("reset"),$(".reltype_oth_t0").hide(),n=!1,$(".relationship-button").html("Set Relationship Roles"),$(".relationship").removeClass("selected")},a.destroy=function(){notify("Destroying namegenerator.",0),$(document).off("keydown",s),$(".cancel").off("click",h),$("#fname_t0, #lname_t0").off("keyup",p),$(document).off("click",".card",u),$(".add-button").off("click",a.openNodeBox),$(".delete-button").off("click",a.removeFromList),$("select[name='reltype_main_t0']").off("change",v),$("select[name='reltype_sub_t0']").off("change",b),$("#ngForm").off("submit",m),window.removeEventListener("changeStageStart",c,!1),$(".newNodeBox").remove(),$(".relationship-types-container").remove(),$(document).off("click",".relationship",d),$(document).off("click",".relationship-button",a.toggleRelationshipBox),$(document).off("click",".relationship-close-button",a.toggleRelationshipBox)},a.init=function(){var e=$('<h1 class="text-center"></h1>').html(a.options.heading);a.options.targetEl.append(e);var t=$('<p class="lead text-center"></p>').html(a.options.subheading);a.options.targetEl.append(t);var o=$('<span class="hi-icon hi-icon-user add-button">Add</span>');a.options.targetEl.append(o);var n=$('<div class="alter-count-box"></div>');a.options.targetEl.append(n);var r=$('<div class="newNodeBox"><form role="form" id="ngForm" class="form"><div class="col-sm-6 left"><h2 style="margin-top:0">Adding a Node</h2><ul><li>Try to be as accurate as you can, but don\'t worry if you aren\'t sure.</li><li>We are interested in your perceptions, so there are no right answers!</li><li>You can use the tab key to quickly move between the fields.</li><li>You can use the enter key to submit the form.</li></ul><button type="button" class="btn btn-danger btn-block delete-button">Delete this Node</button></div><div class="col-sm-6 right"></div></form></div>');$("body").append(r),$.each(a.options.variables,function(e,t){if(t.private!==!0){var a;switch(t.type){case"text":a=$('<div class="form-group '+t.variable+'"><label class="sr-only" for="'+t.variable+'">'+t.label+'</label><input type="text" class="form-control '+t.variable+'" id="'+t.variable+'" placeholder="'+t.label+'"></div></div>');break;case"number":a=$('<div class="form-group '+t.variable+'"><label class="sr-only" for="'+t.variable+'">'+t.label+'</label><input type="number" class="form-control '+t.variable+'" id="'+t.variable+'" placeholder="'+t.label+'"></div></div>');break;case"relationship":a=$('<input type="hidden" class="form-control '+t.variable+'" id="'+t.variable+'" placeholder="'+t.label+'">');break;case"subrelationship":a=$('<input type="hidden" class="form-control '+t.variable+'" id="'+t.variable+'" placeholder="'+t.label+'">')}$(".newNodeBox .form .right").append(a),t.required===!0&&("relationship"===t.type?$("select[name='"+t.variable+"']").prop("required",!0):$("#"+t.variable).prop("required",!0))}}),$(".newNodeBox .form .right").append('<div class="form-group"><button type="button" class="btn btn-primary btn-block relationship-button">Set Relationship Roles</div></div>'),$("select[name='reltype_sub_t0']").prop("disabled",!0);var f=$('<div class="col-sm-6 text-center"><button type="submit" class="btn btn-success btn-block submit-1">Add</button></div><div class="col-sm-6"><span class="btn btn-danger btn-block cancel">Cancel</span></div>');$(".newNodeBox .form .right").append(f),$(".reltype_oth_t0").hide(),n=$('<div class="relationship-types-container"><h1>Select this Individual\'s Relationship Roles from the List Below</h1><p class="lead">Tap each role to select as many as you think apply, then click the close button (above) to continue.</p><button class="btn btn-primary relationship-close-button">Close</button></div>'),$(".newNodeBox").after(n);var y=0;$.each(l,function(e){$(".relationship-types-container").append('<div class="relationship-type rel-'+y+" c"+y+'" data-main-relationship="'+y+'"><h1>'+e+"</h1></div>"),$.each(l[e],function(e,t){$(".rel-"+y).append('<div class="relationship" data-sub-relationship="'+t+'">'+t+"</div>")}),y++});var g=$('<div class="node-container"></div>');a.options.targetEl.append(g);var _=$('<div class="table nameList"></div>');$(".node-container").append(_),window.addEventListener("changeStageStart",c,!1),$(document).on("keydown",s),$(".cancel").on("click",h),$(".add-button").on("click",a.openNodeBox),$(".delete-button").on("click",a.removeFromList),$("#fname_t0, #lname_t0").on("keyup",p),$(document).on("click",".card",u),$("select[name='reltype_main_t0']").on("change",v),$("select[name='reltype_sub_t0']").on("change",b),$("#ngForm").on("submit",m),$(document).on("click",".relationship",d),$(document).on("click",".relationship-button",a.toggleRelationshipBox),$(document).on("click",".relationship-close-button",a.toggleRelationshipBox),$(".alter-count-box").html(i)},a.toggleRelationshipBox=function(){if($(".relationship-types-container").hasClass("open")){var e=$(".relationship.selected").length,t="roles";1===e&&(t="role"),$(".relationship-button").html(n?e+" "+t+" selected.":e>0?e+" "+t+" selected.":"Set Relationship Roles"),$.each($(".relationship-type"),function(e,t){setTimeout(function(){$(t).transition({opacity:0,top:"-1000px"},200),$.each($(t).children(".relationship"),function(e,t){setTimeout(function(){$(t).transition({opacity:0,top:"-200px"},200)},100+50*e)})},50*e)}),setTimeout(function(){$(".newNodeBox").show(),$(".relationship-types-container").removeClass("open")},600)}else{if(n){var a=network.getEdges({from:network.getNodes({type_t0:"Ego"})[0].id,to:n,type:"Role"});$.each(a,function(e,t){$(".rel-"+t.reltype_main_t0).find('div[data-sub-relationship="'+t.reltype_sub_t0+'"]').addClass("selected").data("selected",!0)})}$(".relationship-types-container").addClass("open"),$(".relationship").css({position:"relative",opacity:0,top:"-200px"}),$(".relationship-type").css({position:"relative",opacity:0,top:"-1000px"}),$.each($(".relationship-type"),function(e,t){setTimeout(function(){$(t).transition({opacity:1,top:"0px"},300),$.each($(t).children(".relationship"),function(e,t){setTimeout(function(){$(t).transition({opacity:1,top:0},200)},150+100*e)})},100*e)}),$(".newNodeBox").hide()}},a.addToList=function(e){var t;t=$('<div class="card" data-index="'+e.to+'"><h4>'+e.nname_t0+"</h4></div>");var o=$("<ul></ul>");$.each(a.options.variables,function(t,a){a.private===!1&&void 0!==e[a.variable]&&""!==e[a.variable]&&o.append('<li class="'+e[a.variable]+'"><strong>'+a.label+"</strong>: "+e[a.variable]+"</li>")}),t.append(o),$(".nameList").append(t)},a.removeFromList=function(){$(".delete-button").hide();var e=n;network.removeNode(e),$("div[data-index="+n+"]").remove(),n=!1,a.closeNodeBox()},a.init(),a};