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



document.getElementById("starred1.title").innerHTML = events[3].title;	
document.getElementById("starred1.info").innerHTML = events[3].info;	
document.getElementById("starred2.title").innerHTML = events[4].title;	
document.getElementById("starred2.info").innerHTML = events[4].info;
document.getElementById("starred3.title").innerHTML = events[5].title;	
document.getElementById("starred3.info").innerHTML = events[5].info;
document.getElementById("starred4.title").innerHTML = events[16].title;	
document.getElementById("starred4.info").innerHTML = events[16].info;
document.getElementById("starred5.title").innerHTML = events[17].title;	
document.getElementById("starred5.info").innerHTML = events[17].info;


}