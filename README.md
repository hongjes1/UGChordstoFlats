# Table of Contents
1. [About UGChordstoFlats](#about-ugchordstoflats)
    1. [The EVO interface (NOTE: deprecated)](#the-evo-interface)
    2. [UG React, the new interface](#ug-react-the-new-interface)
2. [How to use](#how-to-use)
3. [Why care? A very brief Western music history/theory primer](#why-care-a-very-brief-western-music-historytheory-primer)
    1. [The UG Problem](#the-ug-problem)
4. [Known bugs and shortcomings](#known-bugs-and-shortcomings)
    1. [New version](#new-version)
    2. [EVO](#evo)
    3. [Both](#both)

# About UGChordstoFlats
As annotated within code, changes basic chord chart sharp chords to flats. Most useful in the context of transposition.
For (guitar or ukulele) chord charts on the site [Ultimate Guitar](www.ultimate-guitar.com/).

__toFlats__ only works on the EVO user interface, accessible via [this direct link](https://www.ultimate-guitar.com/?new_ug_exp=1). The chord definitions and functionality has been updated and will be checked; the EVO engine was unavailable for contributors for a period of time.

### The EVO interface ###
**Note: The EVO interface has now been deprecated in favor of UG React.**
The EVO engine runs in a mostly-white background, includes an embedded YouTube interface, and can run in multiple languages (in an early beta). It also includes useful information about contributions and sorts contribution by both artist, name, and ultimately, type:
- In a list of artist's contributions, all contributions with names N into one link:
![picture alt](https://i.imgur.com/E6ZPltO.png "List of links by song name under artist Sam Smith")
- Clicking on a song title reveals a list of contributions, sorted by submission type:
![picture alt](https://i.imgur.com/nj3H02W.png "List of contributions for the song Lay Me Down, sorted by submission type")

### UG React, the new interface ###
__toFlatsnew__ works on the now-updated site, which is currently in beta for contributors only and dubbed *UG React*. An excerpt of [this chord chart](https://tabs.ultimate-guitar.com/tab/pvris/whats_wrong_chords_2042995) without the changes applied can be found below:

![picture alt](https://i.imgur.com/hcqDIIh.png "Example of a chord chart formatted in the beta.")

[Back to top](#table-of-contents)

# How to use
1. Open a tab's page. The page should end with "`chords_###`" or "`ukulele_###`" (for ukulele chord charts), where the number indicates the submission ID; otherwise, the transposition and chord recognition interfaces do not apply.
2. Open the console. See [here](https://www.wickedlysmart.com/hfjsconsole/) if confused on how to achieve this on different browsers.
3. Copy/paste the code into the console. Output should look like the below:

![picture alt](https://i.imgur.com/ekfpDOM.png "Example of a chord chart formatted in UG React, code run.")

[Back to top](#table-of-contents)

# Why care? A very brief Western music history/theory primer
In the Western Classical musical system, there are seven letter names associated with seven pitch classes: A, B, C, D, E, F, and G. Each pitch class includes notes with the same letter name and sound, but just an integer exponential of 2 away.
Example: in the A = 440 Hz standard, the A pitch class includes 440 Hz (written as A4 in scientific notation), 220 Hz (A3), 55 Hz (A1), and many others as long as they are an exponential of 2 away, particularly in the modern tempered tuning system.
With the exception of B-C and E-F, each note has another note between them. In terms of musical distance (referred to as _intervals_), E and F are a _half-step_ apart. C and D, on the other hand, are a _whole step_ apart. (In other systems, semitones and (whole) tones, respectively, are used interchangably.) This comprises a 12-tone repeating system.

By the middle ages, a hexachord (six-note) system had been established through the Church, which was the main musical body throughout Europe. These hexachords were centered around the pitches G, C, and F, and used the singing syllables "ut re mi fa sol la", which would change later to more modern solfeggio. As in the note letter names, the distance beetween mi and fa is a half-step. __Guido d'Arezzo__, a monk and music teacher, devised a method to remember the hexachords, commonly called the __Guidonian hand__:

![picture alt](http://78.media.tumblr.com/5da2bde2b397824666715d14bb25974f/tumblr_nlvvy0dIqQ1qblk3mo5_1280.png "a Guidonian hand")
*Color key. Green: G (hard) hexachord. Brown: C (natural) hexachord. Blue: F (soft) hexachord.*

The Greek letter Γ (Gamma) stood for the lowest note according to the hand. Quirks can be found when looking at notation for "B". Look at the top of the pinky finger:

- [a square, stylized 'b'](http://i57.tinypic.com/8wzbis.gif "hard hexachord symbol") in the G (hard) hexachord
- [a soft, stylized 'b'](http://i57.tinypic.com/351cu9l.gif "soft hexachord symbol") in the F (soft) hexachord

The square b that represented the solfeggio syllable mi in the G hexachord, a whole step away from the preceding A (re), would eventually morph into the natural and sharp symbols in Western notation, the latter which raises the original pitch 1/2-step. Similarly, the soft b that represented the solfeggio syllable fa in the F hexachord, a half-step away from the preceding A (mi), would eventually morph into the flat symbol, which lowers the original pitch 1/2-step.

The basis of 12 notes had already been made with the practice of __mutation__, where singers would start hexachords on nontraditional notes. The development of major and minor tonalities much later, along with staff notation and temperament, would further cement the use of all 12 notes in music, as well as define practices for note nomenclature within the major and minor systems.

A __major scale__ based around N is created thus:

N(+0) N+2 N+4 N+5 N+7 N+9 N+11 (N+12, octave, same note but higher)

where M = N+# is a note in N's scale # half-steps upward from N.

Each major scale invokes each note letter exactly once. So for any scale S, the letters A, B, C, D, E, F, and G must appear exactly once within the scale (barring the octave). So, for a major scale starting on B, starting with the letters in order can help:

B C D E F G A (B)

Then, apply the intervals as required.

B to C is 1/2-step apart, so the C needs to be raised to C#.

-> B C# D E F G A (B)

C# to D is 1/2-step apart, so to make 2 half-steps of space between them, the D needs to be raised to D#.

-> B C# D# E F G A (B)

Continue the process, and the following will arise:

B C# D# E F# G# A# (B)

__Minor scales__ also follow the note letter conditions, but the formula is as follows instead:

N(+0) N+2 N+3 N+5 N+7 N+8 N+10 (N+12, octave, same note but higher)

A (natural) minor scale based around the note D would be as follows:

D E F G A Bb C (D)

Note in particular that:
- sharps or flats can appear in different contexts, and
- the contexts are usually separate; i.e. sharps usually don't appear in keys with flats, and vice versa.

#### The UG Problem ####
While users are allowed to insert sharps and/or flats into their submissions, the transposition feature defaults to sharps only, whether accurate or not. To compensate for situations where flats are appropriate for the situation, this short script was written to address this.

[Back to top](#table-of-contents)

# Known bugs and shortcomings
## New version
- The javascript event onMouseOver will reset the chord names to their original value in the new tab interface. This has something to do with external code.
- Clicking a previously opened chord diagram with the changed name will revert the chord's name to the original value within the chord diagram.

## EVO
- The chord diagrams will not display on the EVO version; however, the chord names will not change either.
- EVO is now deprecated.

## Both
- The code's set of chord names is severely limited and is not at all exhaustive. Example: E, Emaj, EM, and Emajor all will display E major chords (notes E-G#-B), but only chord of the first format are supported.
- This is a simple text replacement algorithm. As such, replacing "B" with "Cb" will result in chords that are shifted one character to the right. This is similar to what happens with the transposition function as it currently functions on the site. (Dm-Bb-Gm takes fewer characters than Fm-Db-Bbm etc.) This is related to unchanged `span` sizes.

[Back to top](#table-of-contents)
