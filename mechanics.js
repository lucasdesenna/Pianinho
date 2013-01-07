var soundStack = 0;

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