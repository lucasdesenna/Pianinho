var soundStack = 0;

function setup() {
	preload();
	bindKeys();
}

function preload() {
	var keys = $("li > button")
	for(var i = 0; i < keys.length; i++) {
		var note = $(keys)[i];
		note = $(note).attr("id");
		var noteId = "pl" + i;
		var soundObj = "<audio id='" + noteId + "' preload='auto'><source src='wavs/" + note + ".wav' type='audio/wav'>Your browser does not support the audio element.</audio>";
		$("body").append(soundObj);
	}
}

function bindKeys() {
	var bindList = {
		"65": "C4",
		"97": "C4",
		"87": "Db4",
		"119": "Db4",
		"83": "D4",
		"115": "D4",
		"69": "Eb4",
		"101": "Eb4",
		"68": "E4",
		"100": "E4",
		"70": "F4",
		"102": "F4",
		"84": "Gb4",
		"116": "Gb4",
		"71": "G4",
		"103": "G4",
		"89": "Ab4",
		"121": "Ab4",
		"72": "A4",
		"104": "A4",
		"85": "Bb4",
		"117": "Bb4",
		"85": "B4",
		"106": "B4"
	}
	$("html").keydown(function(e) {
		var charCode = e.keyCode.toString();
		if( e.keyCode.toString() in bindList) {
			play($("#" + bindList[charCode]));
		}
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