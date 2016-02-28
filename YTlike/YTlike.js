$(function() {
	selectAll();

	$("#item_all").click(function() {
  		selectAll();
	});
	$("#item_opt1 > a").click(function() {
  		select(this);
	});
	$("#item_opt2 > a").click(function() {
  		select(this);
	});
	$("#item_opt3 > a").click(function() {
  		select(this);
	});
});
function selectAll(){
	if(!$("#item_all > a").hasClass("selected")){
		$("#item_opt1 > a").removeClass("selected");
		$("#item_opt2 > a").removeClass("selected");
		$("#item_opt3 > a").removeClass("selected");
		$("#item_all > a").addClass("selected");
		ytbarLoading(elementsSelected());
	}
}
function select(element){
	$("#item_all > a").removeClass("selected");
	$(element).toggleClass("selected");
	if(!$("#item_opt1 > a").hasClass("selected") && !$("#item_opt2 > a").hasClass("selected") && !$("#item_opt3 > a").hasClass("selected")){
		selectAll();
	}
	ytbarLoading(elementsSelected());
}
function elementsSelected(){
	var elementsSelected = "Currently selected: ";
	if($("#item_all > a").hasClass("selected")){
		elementsSelected += $("#item_all > a").text() + ", ";
	}
	if($("#item_opt1 > a").hasClass("selected")){
		elementsSelected += $("#item_opt1 > a").text() + ", ";
	}
	if($("#item_opt2 > a").hasClass("selected")){
		elementsSelected += $("#item_opt2 > a").text() + ", ";
	}
	if($("#item_opt3 > a").hasClass("selected")){
		elementsSelected += $("#item_opt3 > a").text() + ", ";
	}
	elementsSelected = elementsSelected.substring(0, elementsSelected.length - 2);
	elementsSelected += ".";
	return elementsSelected;
}
var timer;
function ytbarLoading(info){
	clearTimeout(timer);
	//$("#ytbar").removeClass("ytbar_loading");
	$('#ytbar').stop();
	$('#ytbar').animate({width: "0%"}, 0);
	$("#content_info").addClass("invisible");
	setTimeout(function() {
       //$("#ytbar").addClass("ytbar_loading");
       $('#ytbar').animate({width: "100%"}, 3000);
       $("#content_info").text(info);
   }, 100);
	timer = setTimeout(function() {
       $("#content_info").removeClass("invisible");
       $("#content_info").text(info);
   }, 3100);
}
