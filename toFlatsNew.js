var chordEls = document.getElementsByClassName("_1zeG5");
for (var i = 0; i < chordEls.length; i++)
{
	switch(chordEls[i].innerHTML) {
		case "F#/A#":
			chordEls[i].innerHTML = "Gb/Bb";
			break;
		case "A#m7":
			chordEls[i].innerHTML = "Bbm7";
			break;
		case "A#7":
			chordEls[i].innerHTML = "Bb7";
			break;
		case "A#m":
			chordEls[i].innerHTML = "Bbm";
			break;
		case "A#":
			chordEls[i].innerHTML = "Bb";
			break;
		
		case "B/D#":
			chordEls[i].innerHTML = "Cb/Eb";
			break;
		case "D#7":
			chordEls[i].innerHTML = "Eb7";
			break;
		case "D#m7":
			chordEls[i].innerHTML = "Ebm7";
			break;
		case "D#m":
			chordEls[i].innerHTML = "Ebm";
			break;
		case "D#":
			chordEls[i].innerHTML = "Eb";
			break;
		
		case "E/G#":
			chordEls[i].innerHTML = "Fb/Ab";
			break;
		case "G#m7":
			chordEls[i].innerHTML = "Abm7";
			break;
		case "G#7":
			chordEls[i].innerHTML = "Ab7";
			break;
		case "G#m":
			chordEls[i].innerHTML = "Abm";
			break;
		case "G#":
			chordEls[i].innerHTML = "Ab";
			break;

		case "C#/F":
			chordEls[i].innerHTML = "Db/F";
			break;
		case "C#/E#":
			chordEls[i].innerHTML = "Db/F";
			break;
		case "C#m7":
			chordEls[i].innerHTML = "Dbm7";
			break;
		case "C#7":
			chordEls[i].innerHTML = "Db7";
			break;
		case "C#m":
			chordEls[i].innerHTML = "Dbm";
			break;
		case "C#":
			chordEls[i].innerHTML = "Db";
			break;

		case "F#/A#":
			chordEls[i].innerHTML = "Gb/Bb";
			break;
		case "F#m7":
			chordEls[i].innerHTML = "Gbm7";
			break;
		case "F#7":
			chordEls[i].innerHTML = "Gb7";
			break;
		case "F#m":
			chordEls[i].innerHTML = "Gbm";
			break;
		case "F#":
			chordEls[i].innerHTML = "Gb";
			break;
		
		default:
			break;
		} //end switch
} //end loop