var subjects = new Array("3DS", "AAS", "ACCT", "AE", "AH", "AL", "ANTH", "ARBC", "ART", "AS", "ASTR", "BA", "BCOM", "BIOL", "BRFV", "BUSA", "CER", "CHEM", "CHIN", "CIS", "CLAS", "COMM", "COOP", "CPI", "CPS", "CRJU", "CSC", "CSD", "DP", "DPP", "ECE", "ECON", "EDB", "EDBT", "EDCI", "EDLA", "EDMT", "EDRD", "EDSC", "EDSS", "EDUC", "EMBA", "ENGL", "EPEL", "EPHE", "EPRS", "EPS", "EPSF", "EPY", "ESL", "EXC", "FI", "FILM", "FOLK", "FORL", "FREN", "GEOG", "GEOL", "GEOS", "GERO", "GMBA", "GRD", "GRKA", "GRKM", "GRMN", "GSU", "HA", "HADM", "HBRB", "HBRM", "HHS", "HIST", "HON", "IB", "ID", "IEP", "ISCI", "ITAL", "JAPN", "JOUR", "JST", "KH", "KORE", "LATN", "LAW", "LGLS", "LT", "MATH", "MBA", "MES", "MGS", "MIT", "MK", "MRM", "MSL", "MTM", "MUA", "MUS", "NEUR", "NSCI", "NURS", "NUTR", "PERS", "PFP", "PH", "PHIL", "PHOT", "PHYS", "PMAP", "PMBA", "POLS", "PORT", "PRT", "PSYC", "PT", "RCB", "RE", "RELS", "RMI", "RT", "RUSS", "SCUL", "SNHP", "SOCI", "SPAN", "SPCH", "STAT", "SW", "SWAH", "TEXT", "THEA", "TSLE", "TURK", "TX", "WGSS");

$(function(){
	var bodyTag = $('body');
	var bodyTagHtml = bodyTag.html();
	var needle = new RegExp("[A-Z]{4,4} ?\\d{4,4}","gi");
	
	bodyTag.html(
		
		//Replace function searches for needle (REGEX)
		bodyTagHtml.replace(needle, function(match) {
			var returnMatch = match;
			
			// If needle is found, loop through the subjects array to seek subject within match (WWWW ####) - we don't want June 2005 to match
			for (var i = 0; i < subjects.length; i++) {
			
				// Search returns -1 if not found 
				if(match.search(subjects[i]) != -1) {
					 returnMatch = '<a class="openModal" href="#">'+match+'</a>';
				}
			}
			
			//Return the original match if not modified by loop			
			return returnMatch;
		})
	);
	
	$('#dialogForm').dialog({
		autoOpen: false,
		closeOnEscape: true,
		draggable: false,
		position: { my: "bottom center", at: "top center", of: '.openModal' }
	});
	
	$('a.openModal').click(function() {
		
		$('#dialogForm').html(
			$(this).html()
		);
		
		$('#dialogForm').dialog('open');

	});
});