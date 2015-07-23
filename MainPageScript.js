document.addEventListener('DOMContentLoaded',function() {
    console.log("hi");
    var URL = "1ukB_CB4bh4wej-nNlSsFLvkuzv2O93dZw-pzgsAV8fE";
    Tabletop.init( { key: URL, callback: makedata, simpleSheet: true } )
})

var events=[];
	
function Event(t,d,a,l,i,p) {
   	this.title = t;
   	this.date = d; 
   	this.address = a;
   	this.link = l;
   	this.info = i;
   	this.picture = p;
}

function makedata(data){
    console.log(data[0]);

	for(var i = 0; i < data.length; i++) {
   		var e = new Event(data[i]["event"], data[i]["date"], data[i]["address"],data[i]["link"],data[i]["info"],data[i]["picture"]);
   		events[i]= e;
   		console.log(events[i]);

   		
	}
document.getElementById("future1.title").innerHTML = events[0].title;	
document.getElementById("future1.date").innerHTML = events[0].date;	
document.getElementById("future1.info").innerHTML = events[0].info;			
document.getElementById("future2.title").innerHTML = events[1].title;
document.getElementById("future2.date").innerHTML = events[1].date;		
document.getElementById("future2.info").innerHTML = events[1].info;
document.getElementById("future3.title").innerHTML = events[2].title;	
document.getElementById("future3.date").innerHTML = events[2].date;	
document.getElementById("future3.info").innerHTML = events[2].info;



document.getElementById("starred1.title").innerHTML = events[3].title;
document.getElementById("starred1.date").innerHTML = events[3].date;		
document.getElementById("starred1.info").innerHTML = events[3].info;	
document.getElementById("starred2.title").innerHTML = events[4].title;	
document.getElementById("starred2.date").innerHTML = events[4].date;
document.getElementById("starred2.info").innerHTML = events[4].info;
document.getElementById("starred3.title").innerHTML = events[5].title;
document.getElementById("starred3.date").innerHTML = events[5].date;	
document.getElementById("starred3.info").innerHTML = events[5].info;

document.getElementById("past1.title").innerHTML = events[6].title;	
document.getElementById("past1.date").innerHTML = events[6].date;	
document.getElementById("past1.info").innerHTML = events[6].info;	
document.getElementById("past2.title").innerHTML = events[7].title;	
document.getElementById("past1.date").innerHTML = events[6].date;	
document.getElementById("past2.info").innerHTML = events[7].info;
document.getElementById("past3.title").innerHTML = events[8].title;
document.getElementById("past3.date").innerHTML = events[6].date;		
document.getElementById("past3.info").innerHTML = events[8].info;
}





   	
   		

