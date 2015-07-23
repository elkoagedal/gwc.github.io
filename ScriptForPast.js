document.addEventListener('DOMContentLoaded',function() {
    console.log("hi");
    var URL = "1ukB_CB4bh4wej-nNlSsFLvkuzv2O93dZw-pzgsAV8fE";
    Tabletop.init( { key: URL, callback: makedata, simpleSheet: true } )
})

var events=[];
	
function Event(t,d,a,l,i) {
   	this.title = t;
   	this.date = d; 
   	this.address = a;
   	this.link = l;
   	this.info = i;
}

function makedata(data){
    console.log(data[0]);

	for(var i = 0; i < data.length; i++) {
   		var e = new Event(data[i]["event"], data[i]["date"], data[i]["address"],data[i]["link"],data[i]["info"]);
   		events[i]= e;
   		console.log(events[i]);
   		
   		
	}


document.getElementById("past1.title").innerHTML = events[6].title;	
document.getElementById("past1.info").innerHTML = events[6].info;	
document.getElementById("past2.title").innerHTML = events[7].title;	
document.getElementById("past2.info").innerHTML = events[7].info;
document.getElementById("past3.title").innerHTML = events[8].title;	
document.getElementById("past3.info").innerHTML = events[8].info;
}