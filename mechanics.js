var soundStack = 0;

function setupNotes() {
	var keys = $("li > button")
	for(var i = 0; i < keys.length; i++) {
		var note = $(keys)[i];
		note = $(note).attr("id");
		var noteId = "s" + soundStack;
		var soundObj = "<audio id='" + noteId + "' preload='auto'><source src='wavs/" + note + ".wav' type='audio/wav'>Your browser does not support the audio element.</audio>";
		manageStack();
		$("body").append(soundObj);
	}
	$(document).ready(function(e) {
        $("audio").remove();
    });
}

function play(target) {
	var note = $(target).attr("id");
	var noteId = "s" + soundStack;
	var soundObj = "<audio id='" + noteId + "' autoplay ><source src='wavs/" + note + ".wav' type='audio/wav'>Your browser does not support the audio element.</audio>";
	manageStack();
	$("body").append(soundObj);
	var duration = 2000;
	setTimeout(function() {
		$("#" + noteId).remove();
	}, duration);
}

function manageStack() {
	var limit = 100;
	++soundStack;
	if(soundStack > limit) {
		soundStack = 0;
	}
}