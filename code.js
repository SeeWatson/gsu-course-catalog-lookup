$(function(){
	modal();
});
			
function modal() {
 $( "div:contains('econ2100')" ).replaceWith( "econ2100" ).wrap( '<a href="#">' );
 $( "div:contains('econ2100')" ).replaceWith( "econ 2100" ).wrap( '<a href="#">' );
}