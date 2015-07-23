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
document.getElementById("future1.info").innerHTML = events[0].info;		
document.getElementById("future2.title").innerHTML = events[1].title;	
document.getElementById("future2.info").innerHTML = events[1].info;
document.getElementById("future3.title").innerHTML = events[2].title;	
document.getElementById("future3.info").innerHTML = events[2].info;
document.getElementById("future4.title").innerHTML = events[9].title;	
document.getElementById("future4.info").innerHTML = events[9].info;		
document.getElementById("future5.title").innerHTML = events[10].title;	
document.getElementById("future5.info").innerHTML = events[10].info;
document.getElementById("future6.title").innerHTML = events[15].title;	
document.getElementById("future6.info").innerHTML = events[15].info;
document.getElementById("future7.title").innerHTML = events[12].title;	
document.getElementById("future7.info").innerHTML = events[12].info;		
document.getElementById("future8.title").innerHTML = events[13].title;	
document.getElementById("future8.info").innerHTML = events[13].info;
document.getElementById("future9.title").innerHTML = events[14].title;	
document.getElementById("future9.info").innerHTML = events[14].info;



}





   	
   		

