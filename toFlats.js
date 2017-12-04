//evo only, will prevent user from using hover-over chord diagram
//for use with Ultimate-Guitar.com chord charts

var chordEls = document.getElementsByClassName("text-chord");

for (var i = 0; i < chordEls.length; i++)

{

	switch(chordEls[i].innerHTML) {

		case "F#/A#":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Gb/Bb";
			chordEls[i].isContentEditable = false;
			break;
		case "A#m7":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Bbm7";
			chordEls[i].isContentEditable = false;
			break;
		case "A#m6":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Bbm6";
			chordEls[i].isContentEditable = false;
			break;
		case "A#maj7":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Bbmaj7";
			chordEls[i].isContentEditable = false;
			break;
		case "A#7":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Bb7";
			chordEls[i].isContentEditable = false;
			break;
		
		//special chords
		case "A#7b9":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Bb7-9";
			chordEls[i].isContentEditable = false;
			break;
		case "A#7-9":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Bb7-9";
			chordEls[i].isContentEditable = false;
			break;
		case "A#7#5":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Bb7+5";
			chordEls[i].isContentEditable = false;
			break;
		case "A#7+5":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Bb7+5";
			chordEls[i].isContentEditable = false;
			break;
		case "A#7#11":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Bb7+11";
			chordEls[i].isContentEditable = false;
			break;
		case "A#7+11":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Bb7+11";
			chordEls[i].isContentEditable = false;
			break;
		case "A#7add4":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Bb7add4";
			chordEls[i].isContentEditable = false;
			break;
		case "A#7add11":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Bb7add11";
			chordEls[i].isContentEditable = false;
			break;
			
		case "A#6":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Bb6";
			chordEls[i].isContentEditable = false;
			break;
		case "A#m":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Bbm";
			chordEls[i].isContentEditable = false;
			break;
		
		//added
		case "A#-5":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Bb-5";
			chordEls[i].isContentEditable = false;
			break;
		case "A#aug":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Bbaug";
			chordEls[i].isContentEditable = false;
			break;
		case "A#sus4":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Bbsus4";
			chordEls[i].isContentEditable = false;
			break;
		case "A#sus2":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Bbsus2";
			chordEls[i].isContentEditable = false;
			break;
		
		//major chord forms
		case "A#":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Bb";
			chordEls[i].isContentEditable = false;
			break;
		case "A#maj":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Bb";
			chordEls[i].isContentEditable = false;
			break;
		case "A#M":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Bb";
			chordEls[i].isContentEditable = false;
			break;
		case "A#major":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Bb";
			chordEls[i].isContentEditable = false;
			break;
			
		
		case "B7":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Cb7";
			chordEls[i].isContentEditable = false;
			break;
		case "B6":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Cb6";
			chordEls[i].isContentEditable = false;
			break;
		case "Bm7":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Cbm7";
			chordEls[i].isContentEditable = false;
			break;
		case "Bmaj7":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Cbmaj7";
			chordEls[i].isContentEditable = false;
			break;
		case "Bm6":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Cbm6";
			chordEls[i].isContentEditable = false;
			break;
		
		//special chords
		case "B7b9":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Cb7-9";
			chordEls[i].isContentEditable = false;
			break;
		case "B7-9":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Cb7-9";
			chordEls[i].isContentEditable = false;
			break;
		case "B7#5":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Cb7+5";
			chordEls[i].isContentEditable = false;
			break;
		case "B7+5":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Cb7+5";
			chordEls[i].isContentEditable = false;
			break;
		case "B7#11":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Cb7+11";
			chordEls[i].isContentEditable = false;
			break;
		case "B7+11":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Cb7+11";
			chordEls[i].isContentEditable = false;
			break;
		case "B7add4":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Cb7add4";
			chordEls[i].isContentEditable = false;
			break;
		case "B7add11":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Cb7add11";
			chordEls[i].isContentEditable = false;
			break;
		
		case "Bm":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Cbm";
			chordEls[i].isContentEditable = false;
			break;
			
		//added
		case "B-5":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Cb-5";
			chordEls[i].isContentEditable = false;
			break;
		case "Baug":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Cbaug";
			chordEls[i].isContentEditable = false;
			break;
		
		//major chord forms
		case "B":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Cb";
			chordEls[i].isContentEditable = false;
			break;
		case "Bmaj":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Cb";
			chordEls[i].isContentEditable = false;
			break;
		case "BM":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Cb";
			chordEls[i].isContentEditable = false;
			break;
		case "Bmajor":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Cb";
			chordEls[i].isContentEditable = false;
			break;
			
		case "B/D#":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Cb/Eb";
			chordEls[i].isContentEditable = false;
			break;
		case "D#7":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Eb7";
			chordEls[i].isContentEditable = false;
			break;
		case "D#6":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Eb6";
			chordEls[i].isContentEditable = false;
			break;
		case "D#m7":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Ebm7";
			chordEls[i].isContentEditable = false;
			break;
		case "D#m6":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Ebm6";
			chordEls[i].isContentEditable = false;
			break;
		case "D#m":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Ebm";
			chordEls[i].isContentEditable = false;
			break;
		case "D#":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Eb";
			chordEls[i].isContentEditable = false;
			break;
		
		/*
		case "E/G#":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Fb/Ab";
			chordEls[i].isContentEditable = false;
			break;
		resolution tendency of this is to Am, this is fine
		*/
		case "G#m7":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Abm7";
			chordEls[i].isContentEditable = false;
			break;
		case "G#7":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Ab7";
			chordEls[i].isContentEditable = false;
			break;
		case "G#6":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Ab6";
			chordEls[i].isContentEditable = false;
			break;
		case "G#m":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Abm";
			chordEls[i].isContentEditable = false;
			break;
		case "G#m6":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Abm6";
			chordEls[i].isContentEditable = false;
			break;
		case "G#":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Ab";
			chordEls[i].isContentEditable = false;
			break;

		case "C#/F": //this is theoretically wrong
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Db/F";
			chordEls[i].isContentEditable = false;
			break;
		case "C#/E#":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Db/F";
			chordEls[i].isContentEditable = false;
			break;
		case "C#m7":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Dbm7";
			chordEls[i].isContentEditable = false;
			break;
		case "C#m6":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Dbm6";
			chordEls[i].isContentEditable = false;
			break;
		case "C#7":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Db7";
			chordEls[i].isContentEditable = false;
			break;
		case "C#6":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Db6";
			chordEls[i].isContentEditable = false;
			break;
		case "C#m":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Dbm";
			chordEls[i].isContentEditable = false;
			break;
		case "C#":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Db";
			chordEls[i].isContentEditable = false;
			break;

		case "F#/A#":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Gb/Bb";
			chordEls[i].isContentEditable = false;
			break;
		case "F#m7":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Gbm7";
			chordEls[i].isContentEditable = false;
			break;
		case "F#m6":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Gbm6";
			chordEls[i].isContentEditable = false;
			break;
		case "F#7":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Gb7";
			chordEls[i].isContentEditable = false;
			break;
		case "F#6":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Gb6";
			chordEls[i].isContentEditable = false;
			break;
		case "F#m":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Gbm";
			chordEls[i].isContentEditable = false;
			break;
		case "F#":
			chordEls[i].isContentEditable = true;
			chordEls[i].innerHTML = "Gb";
			chordEls[i].isContentEditable = false;
			break;
		
		default:
			break;
	}

} //end loop
