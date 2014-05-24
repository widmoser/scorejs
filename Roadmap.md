# Roadmap

This document describes the progress in implementing various features of the application. Since the major file input format is going to be MusicXML, the first big milestone is to support all relevant MusicXML elements. Progress of this is tracked here:

<table>
	<thead>
		<tr role="row">
			<th style="width: 84px;">Name</th>
			<th style="width: 85px;">File</th>
			<th style="width: 85px;">Type</th>
			<th style="width: 85px;">Since</th>
			<th style="width: 85px;">Implementation Status</th>
			<th style="width: 260px;">Description</th>
		</tr>
	</thead>

<tfoot></tfoot>
<tbody><tr class="odd first">
<td>accelerate</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Accelerate playback at end? Values: yes, no</td>
</tr><tr class="even">
<td>accent</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Horizontal accent</td>
</tr><tr class="odd">
<td>accidental</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Notated accidental. Values: sharp, natural, flat, double-sharp, sharp-sharp, flat-flat, natural-sharp, natural-flat, quarter-flat, quarter-sharp, three-quarters-flat, three-quarters-sharp; sharp-down, sharp-up, natural-down, natural-up, flat-down, flat-up, triple-sharp, triple-flat, slash-quarter-sharp, slash-sharp, slash-flat, double-slash-flat, sharp-1, sharp-2, sharp-3, sharp-5, flat-1, flat-2, flat-3, flat-4, sori, and koron added in 3.0</td>
</tr><tr class="even">
<td>accidental-mark</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Accidental mark modifying a notation or ornament, such as turns or trills. Values: same as for accidental</td>
</tr><tr class="odd">
<td>accidental-text</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td>Formatted accidental used by part-name-display and similar elements. Values: same as for accidental</td>
</tr><tr class="even">
<td>accord</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td>Individual string tuning for scordatura</td>
</tr><tr class="odd">
<td>accordion-high</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td>Is high section of accordion registration present?</td>
</tr><tr class="even">
<td>accordion-low</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td>Is low section of accordion registration present?</td>
</tr><tr class="odd">
<td>accordion-middle</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td>Is middle section of accordion registration present? Values: 1, 2, 3</td>
</tr><tr class="even">
<td>accordion-registration</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td>Accordion registration symbol</td>
</tr><tr class="odd">
<td>actual-notes</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>How many notes played in given time</td>
</tr><tr class="even">
<td>additional</td>
<td>attributes.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td>If “yes”, indicates that this is an added clef (e.g. for cues), not a substitution</td>
</tr><tr class="odd">
<td>after-barline</td>
<td>attributes.mod</td>
<td>Attribute</td>
<td style="width: 60px;">3.0</td>
<td>Does a clef at the start of a measure appear after the barline? Values: yes, no</td>
</tr><tr class="even">
<td>alter</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Chromatic alteration in semitones. May use decimal values for microtones.</td>
</tr><tr class="odd">
<td>alternate</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Alternate fingering? Values: yes, no</td>
</tr><tr class="even">
<td>any</td>
<td>sounds.dtd</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td>Mapping of any instrument sound, solo or ensemble, between its MusicXML ID and an application or library ID</td>
</tr><tr class="odd">
<td>appearance</td>
<td>layout.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td>General graphical settings for music’s final form appearance</td>
</tr><tr class="even">
<td>approach</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">3.0</td>
<td>How the beginning of a compound ornament looks relative to the main part. Values: above, below</td>
</tr><tr class="odd">
<td>arpeggiate</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Part of arpeggiated chord</td>
</tr><tr class="even">
<td>arrow</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td>Arrow used for a musical technical indication</td>
</tr><tr class="odd">
<td>arrow-direction</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td>Direction for straight arrow. Values: left, up, right, down, northwest, northeast, southeast, southwest, left right, up down, northwest southeast, northeast southwest, other</td>
</tr><tr class="even">
<td>arrow-style</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td>Arrow visual style. Values: single, double, filled, hollow, paired, combined, other</td>
</tr><tr class="odd">
<td>articulations</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Articulations and accents</td>
</tr><tr class="even">
<td>artificial</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Artificial harmonic</td>
</tr><tr class="odd last">
<td>attack</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Offset from starting time for playback, in divisions</td>
</tr><tr class="even">
<td>attribute</td>
<td>identity.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td>Which attribute of an element is supported or not</td>
</tr><tr class="odd">
<td>attributes</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Musical information that typically changes at measure boundaries</td>
</tr><tr class="even">
<td>backup</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Move backward to coordinate multiple voices in one part</td>
</tr><tr class="odd">
<td>bar-style</td>
<td>barline.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Values: regular, dotted, dashed, heavy, light-light, light-heavy, heavy-light, heavy-heavy, none; tick and short added in 2.0</td>
</tr><tr class="even">
<td>barline</td>
<td>barline.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Barline information</td>
</tr><tr class="odd">
<td>barre</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td>Indicate barre chords in a frame</td>
</tr><tr class="even">
<td>base-pitch</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Base pitch for harmonic, not what sounds</td>
</tr><tr class="odd">
<td>bass</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Altered bass as in pop music (as opposed to using inversions)</td>
</tr><tr class="even">
<td>bass-alter</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Pitch alteration for bass</td>
</tr><tr class="odd">
<td>bass-step</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Pitch step for bass</td>
</tr><tr class="even">
<td>beam</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Beam type. Values: begin, continue, end, forward hook, backward hook.</td>
</tr><tr class="odd">
<td>beam-level</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.0</td>
<td>Distinguishes eighth to 1024th beams Values: 1, 2, 3, 4, 5, 6; 7 and 8 added in 3.0</td>
</tr><tr class="even">
<td>beat-repeat</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Beat repeat mark</td>
</tr><tr class="odd">
<td>beat-type</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Time signature denominator</td>
</tr><tr class="even">
<td>beat-unit</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Metronome beat unit; same values as type element</td>
</tr><tr class="odd">
<td>beat-unit-dot</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Metronome beat unit augmentation dot</td>
</tr><tr class="even">
<td>beater</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td>Pictograms for beaters that do not distinguish materials. Values: bow, chime hammer, coin, finger, fingernail, fist, guiro scraper, hammer, hand, jazz stick, knitting needle, metal hammer, snare stick, spoon mallet, triangle beater, triangle beater plain, wire brush</td>
</tr><tr class="odd">
<td>beats</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Time signature numerator</td>
</tr><tr class="even">
<td>beats</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>How many added beats in the trill / bend</td>
</tr><tr class="odd">
<td>bend</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>String bends, as in guitar and tab notation</td>
</tr><tr class="even">
<td>bend-alter</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Number of semitones in bend; decimal values for microtones</td>
</tr><tr class="odd">
<td>bend-sound</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.0</td>
<td>Collection of bend playback attributes</td>
</tr><tr class="even">
<td>bezier</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.0</td>
<td>Collection of Bezier curve attributes</td>
</tr><tr class="odd">
<td>bezier-offset</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Bezier point: horizontal in divisions</td>
</tr><tr class="even">
<td>bezier-offset2</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Outgoing Bezier point for continue type: horizontal in divisions</td>
</tr><tr class="odd">
<td>bezier-x</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Bezier point: horizontal in tenths</td>
</tr><tr class="even">
<td>bezier-x2</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Outgoing Bezier point for continue type: horizontal in tenths</td>
</tr><tr class="odd">
<td>bezier-y</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Bezier point: vertical in tenths</td>
</tr><tr class="even">
<td>bezier-y2</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Outgoing Bezier point for continue type: vertical in tenths</td>
</tr><tr class="odd">
<td>blank-page</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td>Number of blank pages to insert before current measure</td>
</tr><tr class="even">
<td>bookmark</td>
<td>link.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Well-defined target for incoming XLink</td>
</tr><tr class="odd">
<td>bottom-margin</td>
<td>layout.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td>Bottom margin in tenths</td>
</tr><tr class="even">
<td>bottom-staff</td>
<td>attributes.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td>Bottom staff for part-symbol element</td>
</tr><tr class="odd">
<td>bracket</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Show level with brackets? Values: yes, no</td>
</tr><tr class="even">
<td>bracket</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Flexible line and bracket definition, often combined with words</td>
</tr><tr class="odd">
<td>bracket</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td>Tuplet bracket displayed in metric relationship? Values: yes, no</td>
</tr><tr class="even">
<td>bracket</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Tuplet bracket displayed? Values: yes, no</td>
</tr><tr class="odd">
<td>bracket-degrees</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.1</td>
<td>All harmony degrees should be in a bracket</td>
</tr><tr class="even">
<td>breath-mark</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Breath mark. Values: comma, tick, empty string. Text values added in 3.0.</td>
</tr><tr class="odd">
<td>caesura</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Caesura or railroad tracks</td>
</tr><tr class="even">
<td>cancel</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Key signature cancellation</td>
</tr><tr class="odd">
<td>cancel</td>
<td>attributes.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td>Does key-octave refer to key signature cancellation? Values: yes, no</td>
</tr><tr class="even">
<td>capo</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Capo fret for tablature</td>
</tr><tr class="odd">
<td>cautionary</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Cautionary accidental? Values: yes, no</td>
</tr><tr class="even">
<td>chord</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Indicates note is an additional chord tone with preceding note</td>
</tr><tr class="odd">
<td>chromatic</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Chromatic steps for transposing written to sounding pitch</td>
</tr><tr class="even">
<td>circular-arrow</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td>Circular arrow direction. Values: clockwise, anticlockwise</td>
</tr><tr class="odd">
<td>clef</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Clef</td>
</tr><tr class="even">
<td>clef-octave-change</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Octave difference (e.g. -1 for treble clef used by tenor voice)</td>
</tr><tr class="odd">
<td>coda</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Coda sign</td>
</tr><tr class="even">
<td>coda</td>
<td>barline.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td>Place to jump forwards from tocoda with same value</td>
</tr><tr class="odd">
<td>coda</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Place to jump forwards from tocoda with same value</td>
</tr><tr class="even">
<td>color</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.1</td>
<td>Color. Values: hexadecimal RGB triple or ARGB tuple in sRGB color space.</td>
</tr><tr class="odd">
<td>color</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.1</td>
<td>Collection of color attributes</td>
</tr><tr class="even">
<td>container</td>
<td>container.dtd</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td>Document element for MusicXML container file</td>
</tr><tr class="odd">
<td>creator</td>
<td>identity.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Creator, similar to Dublin Core.</td>
</tr><tr class="even">
<td>credit</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td>Credit that appears on first page of a score</td>
</tr><tr class="odd">
<td>credit-image</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td>Graphical image to be included in credit</td>
</tr><tr class="even">
<td>credit-type</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td>Purpose behind a credit. Standard values: page number, title, subtitle, composer, arranger, lyricist, rights</td>
</tr><tr class="odd">
<td>credit-words</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td>Text portion of a credit, including formatting</td>
</tr><tr class="even">
<td>cue</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Indicates a cue note, written but not played</td>
</tr><tr class="odd">
<td>dacapo</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Go back to beginning of movement. Value: yes</td>
</tr><tr class="even">
<td>dalsegno</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Jump backwards to segno with same value</td>
</tr><tr class="odd">
<td>damp</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Harp damping</td>
</tr><tr class="even">
<td>damp-all</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Harp damping for all strings</td>
</tr><tr class="odd">
<td>damper-pedal</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Damper pedal control. Values: yes, no. Yes is depressed, no is released. Numeric values added in 2.0.</td>
</tr><tr class="even">
<td>dash-length</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">3.0</td>
<td>Length of dashes in a dashed line, in tenths</td>
</tr><tr class="odd">
<td>dashed-formatting</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">3.0</td>
<td>Length of dashes and spaces in a dashed line, in tenths</td>
</tr><tr class="even">
<td>dashes</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Dashed line, often used with cresc., dim., and other words</td>
</tr><tr class="odd">
<td>default-x</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Change origin of default horizontal position</td>
</tr><tr class="even">
<td>default-y</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Change origin of default vertical position</td>
</tr><tr class="odd">
<td>defaults</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td>Collect score-wide defaults, including layout and fonts</td>
</tr><tr class="even">
<td>degree</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Add, alter, or subtract individual notes from a harmony</td>
</tr><tr class="odd">
<td>degree-alter</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Alteration for degree, relative to dominant if adding: 1 for sharp, -1 for flat, etc.</td>
</tr><tr class="even">
<td>degree-type</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Type of degree aleration. Values: add, alter, subtract</td>
</tr><tr class="odd">
<td>degree-value</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Degree of chord being affected: 1 for root, 3 for third, etc.</td>
</tr><tr class="even">
<td>delayed-inverted-turn</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td>Inverted turn towards end of a note</td>
</tr><tr class="odd">
<td>delayed-turn</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Turn towards end of a note</td>
</tr><tr class="even">
<td>departure</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">3.0</td>
<td>How the ending of a compound ornament looks relative to the main part. Values: above, below</td>
</tr><tr class="odd">
<td>detached-legato</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Detached legato</td>
</tr><tr class="even">
<td>diatonic</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Diatonic steps for transposing written to sounding pitch</td>
</tr><tr class="odd">
<td>dir</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td>Text directionality, similar to W3C Internationalization Tag Set. Values: ltr, rtl, lro, rlo</td>
</tr><tr class="even">
<td>direction</td>
<td>barline.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Repeat direction. Values: backward, forward</td>
</tr><tr class="odd">
<td>direction</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Musical indication not tied to a particular note</td>
</tr><tr class="even">
<td>direction</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Direction of arpeggiation</td>
</tr><tr class="odd">
<td>direction-type</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Type of direction; may be combined</td>
</tr><tr class="even">
<td>directive</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td>If yes, use directive-style default-x position, aligned with start of time signature</td>
</tr><tr class="odd">
<td>directive</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">2.0</td>
<td>Collection of directive attributes</td>
</tr><tr class="even">
<td>directive</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Like directions, but at start of measure. Deprecated in Version 2.0; use directive attribute instead.</td>
</tr><tr class="odd">
<td>display-octave</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>What octave would this be if pitched? (If percussion clef, treat as if treble clef)</td>
</tr><tr class="even">
<td>display-step</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>What step would this be if pitched? (If percussion clef, treat as if treble clef)</td>
</tr><tr class="odd">
<td>display-text</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td>Portion of formatted text used by part-name-display and similar elements</td>
</tr><tr class="even">
<td>distance</td>
<td>layout.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td>Standard distance between notation elements, in tenths</td>
</tr><tr class="odd">
<td>divisions</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>How many divisions per quarter note for a duration</td>
</tr><tr class="even">
<td>divisions</td>
<td>barline.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td>New divisions per quarter note for use with segno and coda</td>
</tr><tr class="odd">
<td>divisions</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>New divisions per quarter note for use with segno and coda</td>
</tr><tr class="even">
<td>document-attributes</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">2.0</td>
<td>Collection of attributes for MusicXML document elements</td>
</tr><tr class="odd">
<td>doit</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Indeterminate slide up from pitch</td>
</tr><tr class="even">
<td>dot</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Dot of prolongation / augmentation dot</td>
</tr><tr class="odd">
<td>double</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Transposition involves doubling one octave down</td>
</tr><tr class="even">
<td>double-tongue</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Double tongue</td>
</tr><tr class="odd">
<td>down-bow</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Down bow</td>
</tr><tr class="even">
<td>duration</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Intended nominal (not performance-specific) duration, in divisions</td>
</tr><tr class="odd">
<td>dynamics</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Dynamics marking</td>
</tr><tr class="even">
<td>dynamics</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Dynamics or MIDI velocity in percentage of default forte value (90 for MIDI)</td>
</tr><tr class="odd">
<td>dynamics</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>MIDI Note On velocity as percentage of default MIDI forte volume of 90</td>
</tr><tr class="even">
<td>editorial</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.0</td>
<td>Footnote and level elements</td>
</tr><tr class="odd">
<td>editorial</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Editorial accidental? Values: yes, no</td>
</tr><tr class="even">
<td>editorial-voice</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.0</td>
<td>Footnote, level, and voice elements</td>
</tr><tr class="odd">
<td>effect</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td>Pictograms for sound effect percussion instruments. Values: anvil, auto horn, bird whistle, cannon, duck call, gun shot, klaxon horn, lions roar, police whistle, siren, slide whistle, thunder sheet, wind machine, wind whistle</td>
</tr><tr class="even">
<td>element</td>
<td>identity.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Element that has explicit indication of support or no support</td>
</tr><tr class="odd">
<td>element</td>
<td>link.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td>Descendant of next sibling element to use for bookmark or link</td>
</tr><tr class="even">
<td>elevation</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>3D elevation. Deprecated in 2.0; use elevation element instead.</td>
</tr><tr class="odd">
<td>elevation</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td>3D elevation from -180 to 180; 0 is level, 90 directly above, -90 directly below</td>
</tr><tr class="even">
<td>elision</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Elision symbol for multiple syllables on single note. Text values added in 2.0.</td>
</tr><tr class="odd">
<td>enclosure</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.1</td>
<td>Enclosure for non-rehearsal mark text. Values: rectangle, oval, none; enclosure-shape entity values added in 3.0</td>
</tr><tr class="even">
<td>enclosure</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.1</td>
<td>Enclosure for rehearsal mark. Values: square, circle, none; enclosure-shape entity values added in 3.0</td>
</tr><tr class="odd">
<td>enclosure-shape</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">3.0</td>
<td>Text enclosures using the enclosure attribute. Values: rectangle, square, oval, circle, bracket, triangle, diamond, none</td>
</tr><tr class="even">
<td>encoder</td>
<td>identity.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Who did the encoding</td>
</tr><tr class="odd">
<td>encoding</td>
<td>identity.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Information about this MusicXML encoding</td>
</tr><tr class="even">
<td>encoding-date</td>
<td>identity.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>When the encoding was done, as yyyy-mm-dd date</td>
</tr><tr class="odd">
<td>encoding-description</td>
<td>identity.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Description of encoding</td>
</tr><tr class="even">
<td>end-dynamics</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>MIDI Note Off velocity as percentage of default MIDI forte volume of 90</td>
</tr><tr class="odd">
<td>end-length</td>
<td>barline.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.1</td>
<td>Ending jog size in tenths</td>
</tr><tr class="even">
<td>end-length</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Bracket jog size in tenths</td>
</tr><tr class="odd">
<td>end-line</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>End of line for karaoke-style applications</td>
</tr><tr class="even">
<td>end-paragraph</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>End of paragraph for karaoke-style applications</td>
</tr><tr class="odd">
<td>ending</td>
<td>barline.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Multiple endings (e.g. first and second)</td>
</tr><tr class="even">
<td>ensemble</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td>Performance is intended for a section. Optional numeric value indicates size of section.</td>
</tr><tr class="odd">
<td>ensemble</td>
<td>sounds.dtd</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td>Mapping of ensemble instrument sound between its MusicXML ID and an application or library ID</td>
</tr><tr class="even">
<td>extend</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Word extension</td>
</tr><tr class="odd">
<td>eyeglasses</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Eyeglasses mark</td>
</tr><tr class="even">
<td>f</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>f dynamic</td>
</tr><tr class="odd">
<td>falloff</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Indeterminate slide down from pitch</td>
</tr><tr class="even">
<td>fan</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.1</td>
<td>Fanned beams. Values: accel, rit, none</td>
</tr><tr class="odd">
<td>feature</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Feature of this grouping</td>
</tr><tr class="even">
<td>fermata</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Fermata symbol. Text values added in 2.0: normal, angled, square</td>
</tr><tr class="odd">
<td>ff</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>ff dynamic</td>
</tr><tr class="even">
<td>fff</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>fff dynamic</td>
</tr><tr class="odd">
<td>ffff</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>ffff dynamic</td>
</tr><tr class="even">
<td>fffff</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>fffff dynamic</td>
</tr><tr class="odd">
<td>ffffff</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>ffffff dynamic</td>
</tr><tr class="even">
<td>fifths</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Number of flats or sharps in traditional key signature</td>
</tr><tr class="odd">
<td>figure</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Figured bass figure</td>
</tr><tr class="even">
<td>figure-number</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Figured bass number</td>
</tr><tr class="odd">
<td>figured-bass</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Figured bass</td>
</tr><tr class="even">
<td>filled</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Notehead filled? Values: yes, no.</td>
</tr><tr class="odd">
<td>fine</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Final note or rest value: duration if numeric, or “yes’ if no duration change</td>
</tr><tr class="even">
<td>fingering</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Fingering indication, typically 1, 2, 3, 4, 5</td>
</tr><tr class="odd">
<td>fingernails</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Fingernails for harp notation</td>
</tr><tr class="even">
<td>first-beat</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Percentage of direction for starting a bend</td>
</tr><tr class="odd">
<td>first-fret</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Fret shown in top space of frame</td>
</tr><tr class="even">
<td>font</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.0</td>
<td>Collection of font attributes</td>
</tr><tr class="odd">
<td>font-family</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Font family, like CSS. Generic styles are music, serif, sans-serif.</td>
</tr><tr class="even">
<td>font-size</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Font size, like CSS – either number or CSS size</td>
</tr><tr class="odd">
<td>font-style</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Font style, like CSS. Values: normal, italic</td>
</tr><tr class="even">
<td>font-weight</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Font weight, like CSS. Values: normal, bold</td>
</tr><tr class="odd">
<td>footnote</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Editorial footnote text</td>
</tr><tr class="even">
<td>forward</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Move forward to coordinate multiple voices in one part, as in invisible rest</td>
</tr><tr class="odd">
<td>forward-repeat</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Forward repeat sign is implied. Value: yes</td>
</tr><tr class="even">
<td>fp</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>fp dynamic</td>
</tr><tr class="odd">
<td>frame</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Chord frame or fretboard diagram</td>
</tr><tr class="even">
<td>frame-frets</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Size of frame in horizontal spaces</td>
</tr><tr class="odd">
<td>frame-note</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Note to include in frame</td>
</tr><tr class="even">
<td>frame-strings</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Size of frame in vertical lines</td>
</tr><tr class="odd">
<td>fret</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Fret for tablature / chord symbol: open string is 0</td>
</tr><tr class="even">
<td>full-note</td>
<td>note.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.0</td>
<td>Common note elements between cue/grace and regular notes</td>
</tr><tr class="odd">
<td>full-path</td>
<td>container.dtd</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td>Path relative to root folder of the zip file</td>
</tr><tr class="even">
<td>function</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Harmony function (e.g. I, V)</td>
</tr><tr class="odd">
<td>fz</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>fz dynamic</td>
</tr><tr class="even">
<td>glass</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td>Pictrograms for glass percussion instruments. Value: wind chimes</td>
</tr><tr class="odd">
<td>glissando</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Rapidly moving from one pitch to another, sounding discrete half steps</td>
</tr><tr class="even">
<td>grace</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Indicates a grace note</td>
</tr><tr class="odd">
<td>group</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Indicate purposes for part, e.g. score, parts, sound, data</td>
</tr><tr class="even">
<td>group-abbreviation</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Abbreviated version of group name</td>
</tr><tr class="odd">
<td>group-abbreviation-display</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td>Formatted version of group-abbreviation</td>
</tr><tr class="even">
<td>group-barline</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Common barline for group? Values: yes, no, Mensurstrich</td>
</tr><tr class="odd">
<td>group-name</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Full name of group</td>
</tr><tr class="even">
<td>group-name-display</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td>Formatted version of group-name</td>
</tr><tr class="odd">
<td>group-symbol</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>How group is indicated in score. Values: none, brace, line, bracket; square added in 3.0</td>
</tr><tr class="even">
<td>group-time</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td>Displayed time signature should stretch across all parts and staves in group</td>
</tr><tr class="odd">
<td>grouping</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Grouping for musical analysis</td>
</tr><tr class="even">
<td>halign</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.1</td>
<td>Horizontal alignment. Values: left, center, right</td>
</tr><tr class="odd">
<td>halign</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.1</td>
<td>Collection of horizontal alignment attributes</td>
</tr><tr class="even">
<td>hammer-on</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Hammer on (slur up the fretboard)</td>
</tr><tr class="odd">
<td>handbell</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td>Techniques used in handbell and handchime music. Values: damp, echo, gyro, hand martellato, mallet lift, mallet table, martellato, martellato lift, muted martellato, pluck lift, swing</td>
</tr><tr class="even">
<td>harmonic</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Natural and artificial harmonics</td>
</tr><tr class="odd">
<td>harmony</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Harmony data, used for chord symbols or analysis</td>
</tr><tr class="even">
<td>harmony-chord</td>
<td>direction.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.0</td>
<td>Harmony chord information; may be stacked in a single harmony element</td>
</tr><tr class="odd">
<td>harp-pedals</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td>Harp pedal diagram</td>
</tr><tr class="even">
<td>heel</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Heel indication for organ pedals</td>
</tr><tr class="odd">
<td>height</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.1</td>
<td>Frame height in tenths</td>
</tr><tr class="even">
<td>hole</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td>Symbols used for woodwind/brass fingerings and other notations</td>
</tr><tr class="odd">
<td>hole-closed</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td>Is the hole closed, open, or half-open? Values: yes, no, half</td>
</tr><tr class="even">
<td>hole-shape</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td>Shape of the hole symbol; circle by default</td>
</tr><tr class="odd">
<td>hole-type</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td>What the hole symbol represents in terms of instrument fingering or other techniques</td>
</tr><tr class="even">
<td>humming</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Humming</td>
</tr><tr class="odd">
<td>id</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>IDREF to score-instrument for midi-instrument element; added to midi-device and play elements in 3.0</td>
</tr><tr class="even">
<td>id</td>
<td>link.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Unique ID for bookmark</td>
</tr><tr class="odd">
<td>id</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>IDREF to score-instrument for instrument element</td>
</tr><tr class="even">
<td>id</td>
<td>score.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Unique ID for score-part or score-instrument</td>
</tr><tr class="odd">
<td>id</td>
<td>score.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>IDREF to score-part for part element</td>
</tr><tr class="even">
<td>id</td>
<td>sounds.dtd</td>
<td>Attribute</td>
<td style="width: 60px;">3.0</td>
<td>Unique ID for sound</td>
</tr><tr class="odd">
<td>identification</td>
<td>identity.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Basic score metadata</td>
</tr><tr class="even">
<td>image</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td>Graphical image to be included in score</td>
</tr><tr class="odd">
<td>implicit</td>
<td>score.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Show measure number never appear here? Values: yes, no</td>
</tr><tr class="even">
<td>instrument</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Which score-instrument to use for this note</td>
</tr><tr class="odd">
<td>instrument-abbreviation</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Abbreviated version of instrument name</td>
</tr><tr class="even">
<td>instrument-name</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Full name of instrument</td>
</tr><tr class="odd">
<td>instrument-sound</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td>Default timbre for playback; the standard sounds listed in sounds.xml may be used</td>
</tr><tr class="even">
<td>instruments</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Number of instruments per part</td>
</tr><tr class="odd">
<td>interchangeable</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td>Second in a pair of dual time signatures</td>
</tr><tr class="even">
<td>inversion</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Inversion for harmony: 0 for root position, 1 for first inversion, etc.</td>
</tr><tr class="odd">
<td>inverted-mordent</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Inverted mordent</td>
</tr><tr class="even">
<td>inverted-turn</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td>Inverted turn</td>
</tr><tr class="odd">
<td>ipa</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td>International Phonetic Alphabet sounds for vocal music</td>
</tr><tr class="even">
<td>isolat1</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.0</td>
<td>Character entities for ISO Latin-1</td>
</tr><tr class="odd">
<td>isolat2</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.0</td>
<td>Character entities for ISO Latin-2</td>
</tr><tr class="even">
<td>justify</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Justification. Values: left, center, right. In direction.mod in 1.0.</td>
</tr><tr class="odd">
<td>justify</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.1</td>
<td>Collection of justification attributes</td>
</tr><tr class="even">
<td>key</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Key signature</td>
</tr><tr class="odd">
<td>key-accidental</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td>Accidental in non-traditional key signature. Values: same as for accidental</td>
</tr><tr class="even">
<td>key-alter</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Amount of alteration in non-traditional key signature</td>
</tr><tr class="odd">
<td>key-octave</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td>Which octave does each element of a key signature appear?</td>
</tr><tr class="even">
<td>key-step</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Altered tone in non-traditional key signature</td>
</tr><tr class="odd">
<td>kind</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Type of chord. Many values from triads through 13ths.</td>
</tr><tr class="even">
<td>last-beat</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Percentage of trill where last beat falls, or percentage of direction for ending a bend</td>
</tr><tr class="odd">
<td>laughing</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Laughing</td>
</tr><tr class="even">
<td>layout-tenths</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.1</td>
<td>Positioning unit in tenths of interline space, used for elements.</td>
</tr><tr class="odd">
<td>left-divider</td>
<td>layout.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td>System separator mark on the left side of the page</td>
</tr><tr class="even">
<td>left-margin</td>
<td>layout.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td>Left margin in tenths</td>
</tr><tr class="odd">
<td>left-right</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">2.0</td>
<td>Does one element appear to the left or right of another element? Values: left, right</td>
</tr><tr class="even">
<td>letter-spacing</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td>Text spacing. Values: normal or a number representing ems to add</td>
</tr><tr class="odd">
<td>letter-spacing</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">2.0</td>
<td>Collection of text spacing attributes</td>
</tr><tr class="even">
<td>level</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Indication of editorial level</td>
</tr><tr class="odd">
<td>level-display</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.1</td>
<td>Collection of parentheses, bracket, and size attributes</td>
</tr><tr class="even">
<td>line</td>
<td>attributes.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Staff line numbered from bottom to top for staff-tuning</td>
</tr><tr class="odd">
<td>line</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Staff line numbered from bottom to top for clefs</td>
</tr><tr class="even">
<td>line</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Use line instead of Ped / * signs? Values: yes, no</td>
</tr><tr class="odd">
<td>line-end</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Bracket jog up, down, neither, or arrow? Values: up, down, both, arrow, none</td>
</tr><tr class="even">
<td>line-height</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td>Text leading. Values: normal or a number representing percent of font height to add</td>
</tr><tr class="odd">
<td>line-height</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">2.0</td>
<td>Collection of text leading attributes</td>
</tr><tr class="even">
<td>line-shape</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Values: straight, curved</td>
</tr><tr class="odd">
<td>line-shape</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.0</td>
<td>Collection of line shape attributes</td>
</tr><tr class="even">
<td>line-through</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td>Number of text strike-through lines. Values: 0, 1, 2, 3</td>
</tr><tr class="odd">
<td>line-type</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Values: solid, dashed, dotted, wavy</td>
</tr><tr class="even">
<td>line-type</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.0</td>
<td>Collection of line type attributes</td>
</tr><tr class="odd">
<td>line-width</td>
<td>layout.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td>Width of a line type in tenths</td>
</tr><tr class="even">
<td>link</td>
<td>link.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Outgoing XLink</td>
</tr><tr class="odd">
<td>link-attributes</td>
<td>link.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.0</td>
<td>Collection of XLink attributes supported in MusicXML files</td>
</tr><tr class="even">
<td>location</td>
<td>attributes.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td>Location of key signature cancellation relative to new key signature. Values: left, right; before-barline added in 3.0</td>
</tr><tr class="odd">
<td>location</td>
<td>barline.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Barline location. Values: left, right, middle</td>
</tr><tr class="even">
<td>location</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td>Location of first-fret text. Values: left, right</td>
</tr><tr class="odd">
<td>location</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">3.0</td>
<td>Which portion of hole is filled in when hole-closed is half? Values: right, bottom, left, top</td>
</tr><tr class="even">
<td>long</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Longer mordent appearance? Values: yes, no.</td>
</tr><tr class="odd">
<td>lyric</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Text underlay for lyrics</td>
</tr><tr class="even">
<td>lyric-font</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td>Lyric font</td>
</tr><tr class="odd">
<td>lyric-language</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td>Lyric language for a verse/section/chorus</td>
</tr><tr class="even">
<td>make-time</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Divisions to add in order to make time for grace note playback</td>
</tr><tr class="odd">
<td>measure</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">3.0</td>
<td>Complete measure rest? Values: yes, no</td>
</tr><tr class="even">
<td>measure</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Higher level element in timewise, lower level in partwise</td>
</tr><tr class="odd">
<td>measure-distance</td>
<td>layout.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td>Horizontal distance from previous measure, as for coda</td>
</tr><tr class="even">
<td>measure-layout</td>
<td>layout.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td>Measure layout including distance</td>
</tr><tr class="odd">
<td>measure-numbering</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td>How measure numbers are displayed on this part. Values: none, measure, system</td>
</tr><tr class="even">
<td>measure-repeat</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Single or multiple measure repeat mark</td>
</tr><tr class="odd">
<td>measure-style</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Special way to print</td>
</tr><tr class="even">
<td>media-type</td>
<td>container.dtd</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td>Type of different top-level root files</td>
</tr><tr class="odd">
<td>member-of</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Indicate hierarchy within grouping</td>
</tr><tr class="even">
<td>membrane</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td>Pictograms for membrane percussion instruments. Value: bass drum, bass drum on side, bongos, conga drum, goblet drum, military drum, snare drum, snare drum snares off, tambourine, tenor drum, timbales, tomtom</td>
</tr><tr class="odd">
<td>metal</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td>Pictograms for metal percussion instruments. Values: almglocken, bell, bell plate, brake drum, Chinese cymbal, cowbell, crash cymbals, crotale, cymbal tongs, domed gong, finger cymbals, flexatone, gong, hi-hat, high-hat cymbals, handbell, sistrum, sizzle cymbal, sleigh bells, suspended cymbal, tam tam, triangle, Vietnamese hat</td>
</tr><tr class="even">
<td>metronome</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Standard metronome marks</td>
</tr><tr class="odd">
<td>metronome-beam</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td>Beaming of notes displayed in metric relationship</td>
</tr><tr class="even">
<td>metronome-dot</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td>Dot displayed in metric relationship</td>
</tr><tr class="odd">
<td>metronome-note</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td>Note displayed in metric relationship</td>
</tr><tr class="even">
<td>metronome-relation</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td>Relationship symbol between two sets of metronome-note elements. Values: equals</td>
</tr><tr class="odd">
<td>metronome-tuplet</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td>Tuplet displayed in metric relationship</td>
</tr><tr class="even">
<td>metronome-type</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td>Type of note displayed in metric relationship. Values: same as type element</td>
</tr><tr class="odd">
<td>mf</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>mf dynamic</td>
</tr><tr class="even">
<td>midi-bank</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>MIDI bank from 1 to 16, 384</td>
</tr><tr class="odd">
<td>midi-channel</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>MIDI channel from 1 to 16</td>
</tr><tr class="even">
<td>midi-device</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>MIDI DeviceName meta event</td>
</tr><tr class="odd">
<td>midi-instrument</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Specify MIDI instrument for score-instrument or sound</td>
</tr><tr class="even">
<td>midi-name</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>MIDI ProgramName meta event</td>
</tr><tr class="odd">
<td>midi-program</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>MIDI program number from 1 to 128</td>
</tr><tr class="even">
<td>midi-unpitched</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>For unpitched instruments, MIDI note number from 1 to 128</td>
</tr><tr class="odd">
<td>millimeters</td>
<td>layout.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td>Number of millimeters in scaling ratio</td>
</tr><tr class="even">
<td>miscellaneous</td>
<td>identity.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Collection of metadata not yet specified in the MusicXML format</td>
</tr><tr class="odd">
<td>miscellaneous-field</td>
<td>identity.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Individual metadata field</td>
</tr><tr class="even">
<td>mode</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Mode for key signature</td>
</tr><tr class="odd">
<td>mordent</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Mordent</td>
</tr><tr class="even">
<td>movement-number</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Number of this movement</td>
</tr><tr class="odd">
<td>movement-title</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Title of this movement</td>
</tr><tr class="even">
<td>mp</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>mp dynamic</td>
</tr><tr class="odd">
<td>multiple-rest</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Multimeasure rest</td>
</tr><tr class="even">
<td>music-data</td>
<td>score.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.0</td>
<td>Basic musical data in a MusicXML score</td>
</tr><tr class="odd">
<td>music-font</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td>Music font</td>
</tr><tr class="even">
<td>mute</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td>Muting for different instruments. Values: on, off, straight, cup, harmon-no-stem, harmon-stem, bucket, plunger, hat, solotone, practice, stop-mute, stop-hand, echo, palm</td>
</tr><tr class="odd">
<td>name</td>
<td>identity.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Name of metadata field</td>
</tr><tr class="even">
<td>name</td>
<td>link.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Name of bookmark or link</td>
</tr><tr class="odd">
<td>name</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Type of lyric</td>
</tr><tr class="even">
<td>name</td>
<td>score.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.1</td>
<td>Lyric type for lyric font or language</td>
</tr><tr class="odd">
<td>natural</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Natural harmonic</td>
</tr><tr class="even">
<td>new-page</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Force a page break? Values: yes, no</td>
</tr><tr class="odd">
<td>new-page</td>
<td>opus.dtd</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td>Is first page of this score different than last page of previous score? Values: yes, no</td>
</tr><tr class="even">
<td>new-system</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Force a system break? Values: yes, no</td>
</tr><tr class="odd">
<td>niente</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">3.0</td>
<td>Circle at point of the wedge? Values: yes, no</td>
</tr><tr class="even">
<td>non-arpeggiate</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Note is at top or bottom of a bracket indicating not to arpeggiate</td>
</tr><tr class="odd">
<td>non-controlling</td>
<td>score.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Does this measure not synchronize with measures in other parts: Values: yes, no</td>
</tr><tr class="even">
<td>normal-dot</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Augmentation dot for normal-type value</td>
</tr><tr class="odd">
<td>normal-notes</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>How many notes usually occupy this time</td>
</tr><tr class="even">
<td>normal-type</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Type of note for normal-notes value</td>
</tr><tr class="odd">
<td>notations</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Musical notations for a note</td>
</tr><tr class="even">
<td>note</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Individual note or rest</td>
</tr><tr class="odd">
<td>note-size</td>
<td>layout.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td>Percentage of regular note size to use for cue, grace, or large notes</td>
</tr><tr class="even">
<td>notehead</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Notehead. Values: slash, triangle, diamond, square, cross, x, circle-x, normal, none; inverted triangle, arrow down, arrow up, slashed, back slashed, do, re, mi, fa, so, la, and ti values added in 1.1; cluster added in 2.0; fa up, circle dot, left triangle, and rectangle added in 3.0</td>
</tr><tr class="odd">
<td>notehead-text</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td>Text displayed inside a notehead. Not needed for TAB or jianpu clefs.</td>
</tr><tr class="even">
<td>number</td>
<td>attributes.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Staff number for attributes. Added to key and time in 1.1; added to transpose in 3.0</td>
</tr><tr class="odd">
<td>number</td>
<td>barline.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>What goes under ending line (e.g. “1″, “1, 2″)</td>
</tr><tr class="even">
<td>number</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>A number-level value for the wavy-line element</td>
</tr><tr class="odd">
<td>number</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Used in many elements, usually as a number-level entity</td>
</tr><tr class="even">
<td>number</td>
<td>layout.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.1</td>
<td>Staff number for staff-layout.</td>
</tr><tr class="odd">
<td>number</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Used in many elements, usually as a number-level entity</td>
</tr><tr class="even">
<td>number</td>
<td>score.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.1</td>
<td>Lyric number for font or language</td>
</tr><tr class="odd">
<td>number</td>
<td>sounds.dtd</td>
<td>Attribute</td>
<td style="width: 60px;">3.0</td>
<td>Size of ensemble</td>
</tr><tr class="even">
<td>number-level</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.0</td>
<td>Distinguishes 6 concurrent objects. Values: 1, 2, 3, 4, 5, 6</td>
</tr><tr class="odd">
<td>number-of-lines</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">2.0</td>
<td>Number of lines in text decoration. Values: 0, 1, 2, 3</td>
</tr><tr class="even">
<td>octave</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Octave number: Values: 0 through 9. Octave 4 is octave started by middle C.</td>
</tr><tr class="odd">
<td>octave-change</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Octaves for transposing written to sounding pitch</td>
</tr><tr class="even">
<td>octave-shift</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Octave shift up or down from sounding pitch positions</td>
</tr><tr class="odd">
<td>offset</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Visual offset from current position, in divisions</td>
</tr><tr class="even">
<td>open-string</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Open string</td>
</tr><tr class="odd">
<td>opus</td>
<td>opus.dtd</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Document element for opus DTD</td>
</tr><tr class="even">
<td>opus</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Link to a parent opus document</td>
</tr><tr class="odd">
<td>opus-link</td>
<td>opus.dtd</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Link to another opus document</td>
</tr><tr class="even">
<td>orientation</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Slur / ties overhand vs. underhand. Values: over, under</td>
</tr><tr class="odd">
<td>orientation</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.0</td>
<td>Collection of orientation attributes</td>
</tr><tr class="even">
<td>ornaments</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Collection of ornaments for a note</td>
</tr><tr class="odd">
<td>other-appearance</td>
<td>layout.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td>Other appearance not yet specified in the MusicXML format</td>
</tr><tr class="even">
<td>other-articulation</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Other articulation not yet specified in the MusicXML format</td>
</tr><tr class="odd">
<td>other-direction</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Other direction not yet specified in the MusicXML format</td>
</tr><tr class="even">
<td>other-dynamics</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Text dynamic</td>
</tr><tr class="odd">
<td>other-notation</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Notation not yet specified in the MusicXML format</td>
</tr><tr class="even">
<td>other-ornament</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Ornament not yet specified in the MusicXML format</td>
</tr><tr class="odd">
<td>other-percussion</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td>Percussion pictogram not yet specified in the MusicXML format</td>
</tr><tr class="even">
<td>other-play</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td>Playback technique not yet specified in the MusicXML format</td>
</tr><tr class="odd">
<td>other-technical</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Technical indication not yet specified in the MusicXML format</td>
</tr><tr class="even">
<td>overline</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td>Number of text overlines. Values: 0, 1, 2, 3</td>
</tr><tr class="odd">
<td>p</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>p dynamic</td>
</tr><tr class="even">
<td>page</td>
<td>score.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td>Page number where credit should appear. First page is 1 and does not take page-number attributes into account</td>
</tr><tr class="odd">
<td>page-height</td>
<td>layout.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td>Page height in tenths</td>
</tr><tr class="even">
<td>page-layout</td>
<td>layout.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td>Page layout including height, width, and margins</td>
</tr><tr class="odd">
<td>page-margins</td>
<td>layout.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td>Page margins</td>
</tr><tr class="even">
<td>page-number</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.1</td>
<td>Sets the number of a new page</td>
</tr><tr class="odd">
<td>page-width</td>
<td>layout.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td>Page width in tenths</td>
</tr><tr class="even">
<td>pan</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td>Horizontal pan from -180 to 180; 0 is straight ahead, -90 hard left, 90 hard right</td>
</tr><tr class="odd">
<td>pan</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Horizontal pan. Deprecated in 2.0; use pan element instead.</td>
</tr><tr class="even">
<td>parentheses</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Show level with parentheses? Values: yes, no</td>
</tr><tr class="odd">
<td>parentheses</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Is metronome mark parenthesized? Values: yes, no</td>
</tr><tr class="even">
<td>parentheses</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Notehead or figured bass in parentheses? Values: yes, no</td>
</tr><tr class="odd">
<td>parentheses-degrees</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.1</td>
<td>All harmony degrees should be in parentheses</td>
</tr><tr class="even">
<td>part</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Higher level element in partwise, lower level in timewise</td>
</tr><tr class="odd">
<td>part-abbreviation</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Abbreviated version of musical part name</td>
</tr><tr class="even">
<td>part-abbreviation-display</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td>Formatted version of part-abbreviation</td>
</tr><tr class="odd">
<td>part-group</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Grouping of parts in a score</td>
</tr><tr class="even">
<td>part-list</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>List of all the different musical parts in this movement</td>
</tr><tr class="odd">
<td>part-name</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Full name of the musical part</td>
</tr><tr class="even">
<td>part-name-display</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td>Formatted version of part-name</td>
</tr><tr class="odd">
<td>part-symbol</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td>Symbol for a multi-staff part. Values: none, brace, line, bracket; square added in 3.0</td>
</tr><tr class="even">
<td>pedal</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Piano pedal marks</td>
</tr><tr class="odd">
<td>pedal-alter</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td>Pitch alteration for harp pedal tuning</td>
</tr><tr class="even">
<td>pedal-step</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td>Pitch step for harp pedal tuning</td>
</tr><tr class="odd">
<td>pedal-tuning</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td>Harp pedal tuning for pedal diagram</td>
</tr><tr class="even">
<td>per-minute</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Per minute value, either number or text including numbers</td>
</tr><tr class="odd">
<td>percussion</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td>Percussion pictogram symbols</td>
</tr><tr class="even">
<td>pitch</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Pitch data: combination of step, alteration, and octave</td>
</tr><tr class="odd">
<td>pitched</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td>Pictograms for pitched percussion instruments. Values: chimes, glockenspiel, mallet, marimba, tubular chimes, vibraphone, xylophone</td>
</tr><tr class="even">
<td>pizzicato</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Within sound element, start pizzicato for all notes. Values: yes, no</td>
</tr><tr class="odd">
<td>pizzicato</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Is this single note pizzicato? Values: yes, no</td>
</tr><tr class="even">
<td>placement</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Placement relative to another symbol. Values: above, below</td>
</tr><tr class="odd">
<td>placement</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.0</td>
<td>Collection of placement attributes</td>
</tr><tr class="even">
<td>play</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td>Playback techniques</td>
</tr><tr class="odd">
<td>plop</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Indeterminate slide down to pitch</td>
</tr><tr class="even">
<td>pluck</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td>Plucking fingering on a fretted instrument. Text values added in 2.0. Typical values: p, i, m, a</td>
</tr><tr class="odd">
<td>plus-minus</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td>Use plus and minus instead of flat and sharp for harmony degree alteration. Values: yes, no</td>
</tr><tr class="even">
<td>port</td>
<td>score.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Unofficial MIDI 1.0 port / cable number from 1 to 16</td>
</tr><tr class="odd">
<td>position</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.0</td>
<td>Collection of positioning attributes</td>
</tr><tr class="even">
<td>position</td>
<td>link.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td>Position of descendant element for link or bookmark; first position is 1. Values: numbers</td>
</tr><tr class="odd">
<td>pp</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>pp dynamic</td>
</tr><tr class="even">
<td>ppp</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>ppp dynamic</td>
</tr><tr class="odd">
<td>pppp</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>pppp dynamic</td>
</tr><tr class="even">
<td>ppppp</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>ppppp dynamic</td>
</tr><tr class="odd">
<td>pppppp</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>pppppp dynamic</td>
</tr><tr class="even">
<td>pre-bend</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Negative bend-alter indicates a pre-bend</td>
</tr><tr class="odd">
<td>prefix</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Figured bass prefix</td>
</tr><tr class="even">
<td>primary</td>
<td>sounds.dtd</td>
<td>Attribute</td>
<td style="width: 60px;">3.0</td>
<td>Primary choice when multiple mappings exist between MusicXML and application/library sound IDs</td>
</tr><tr class="odd">
<td>principal-voice</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td>Principal and secondary voices</td>
</tr><tr class="even">
<td>print</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Print suggestions</td>
</tr><tr class="odd">
<td>print-dot</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Should an augmentation dot be printed? Values: yes, no</td>
</tr><tr class="even">
<td>print-frame</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Print frame for harmony? Values: yes, no</td>
</tr><tr class="odd">
<td>print-lyric</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.1</td>
<td>Should a lyric be printed? Values: yes, no</td>
</tr><tr class="even">
<td>print-object</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Should an object be printed? Values: yes, no</td>
</tr><tr class="odd">
<td>print-object</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.1</td>
<td>Collection of print object attributes</td>
</tr><tr class="even">
<td>print-spacing</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Should spacing be left? Values: yes, no</td>
</tr><tr class="odd">
<td>print-spacing</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.1</td>
<td>Collection of print spacing attributes</td>
</tr><tr class="even">
<td>print-style</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.1</td>
<td>Collection of position, font, and color entitites</td>
</tr><tr class="odd">
<td>printout</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.0</td>
<td>Collection of print / no print attributes</td>
</tr><tr class="even">
<td>pull-off</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Pull off (slur down the fretboard)</td>
</tr><tr class="odd">
<td>reference</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.1</td>
<td>Display-only editorial information? Values: yes, no</td>
</tr><tr class="even">
<td>rehearsal</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Rehearsal mark</td>
</tr><tr class="odd">
<td>relation</td>
<td>identity.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td>Related resource for the music that is encoded. similar to Dublin Core</td>
</tr><tr class="even">
<td>relative-x</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Change horizontal position relative to default</td>
</tr><tr class="odd">
<td>relative-y</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Change vertical position relative to default</td>
</tr><tr class="even">
<td>release</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Offset from stopping time for playback, in divisions</td>
</tr><tr class="odd">
<td>release</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Negative bend-alter indicates a release</td>
</tr><tr class="even">
<td>repeat</td>
<td>barline.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Repeat marks</td>
</tr><tr class="odd">
<td>repeater</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Tremolo beams? Values: yes, no; deprecated in 3.0</td>
</tr><tr class="even">
<td>rest</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Rest or silence</td>
</tr><tr class="odd">
<td>rf</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>rf dynamic</td>
</tr><tr class="even">
<td>rfz</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>rfz dynamic</td>
</tr><tr class="odd">
<td>right-divider</td>
<td>layout.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td>System separator mark on the right side of the page</td>
</tr><tr class="even">
<td>right-margin</td>
<td>layout.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td>Right margin in tenths</td>
</tr><tr class="odd">
<td>rights</td>
<td>identity.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Rights, similar to Dublin Core, including copyright and other notices</td>
</tr><tr class="even">
<td>root</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Root of harmony in terms of pitch, not function</td>
</tr><tr class="odd">
<td>root-alter</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Pitch alteration for root</td>
</tr><tr class="even">
<td>root-step</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Pitch step for root</td>
</tr><tr class="odd">
<td>rootfile</td>
<td>container.dtd</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td>Top-level file in a MusicXML container</td>
</tr><tr class="even">
<td>rootfiles</td>
<td>container.dtd</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td>Starting points for representations of MusicXML score</td>
</tr><tr class="odd">
<td>rotation</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td>Rotate text around halign/valign point. Values: numbers from -180 to 180</td>
</tr><tr class="even">
<td>scaling</td>
<td>layout.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td>Specify how many millimeters are equal to how many tenths</td>
</tr><tr class="odd">
<td>schleifer</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>German name to avoid conflict with slide element</td>
</tr><tr class="even">
<td>scoop</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Indeterminate slide up to pitch</td>
</tr><tr class="odd">
<td>scordatura</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td>Scordatura string tuning</td>
</tr><tr class="even">
<td>score</td>
<td>opus.dtd</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Link to a score within the opus</td>
</tr><tr class="odd">
<td>score-header</td>
<td>score.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.0</td>
<td>Basic score metadata plus the part-list</td>
</tr><tr class="even">
<td>score-instrument</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>How instruments are contained within parts</td>
</tr><tr class="odd">
<td>score-part</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>How a part is contained in the score</td>
</tr><tr class="even">
<td>score-partwise</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Document element for partwise.dtd</td>
</tr><tr class="odd">
<td>score-timewise</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Document element for timewise.dtd</td>
</tr><tr class="even">
<td>second-beat</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Percentage ot trill where second beat falls</td>
</tr><tr class="odd">
<td>segno</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Segno sign</td>
</tr><tr class="even">
<td>segno</td>
<td>barline.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td>Place to jump backwards from dalsegno with same value</td>
</tr><tr class="odd">
<td>segno</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Place to jump backwards from dalsegno with same value</td>
</tr><tr class="even">
<td>semi-pitched</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td>Categories of indefinite pitch for percussion. Values: high, medium-high, medium, medium-low, low, very-low</td>
</tr><tr class="odd">
<td>senza-misura</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Indicates no time signature; optional element content indicating symbol added in 3.0</td>
</tr><tr class="even">
<td>separator</td>
<td>attributes.mod</td>
<td>Attribute</td>
<td style="width: 60px;">3.0</td>
<td>Arrangement between beats and beat-type values in a time signature. Values: none, horizontal, diagonal, vertical, adjacent</td>
</tr><tr class="odd">
<td>sf</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>sf dynamic</td>
</tr><tr class="even">
<td>sffz</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>sffz dynamic</td>
</tr><tr class="odd">
<td>sfp</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>sfp dynamic</td>
</tr><tr class="even">
<td>sfpp</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>sfpp dynamic</td>
</tr><tr class="odd">
<td>sfz</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>sfz dynamic</td>
</tr><tr class="even">
<td>shake</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Shake</td>
</tr><tr class="odd">
<td>show-frets</td>
<td>attributes.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>How to display tablature frets. Values: letters, numbers</td>
</tr><tr class="even">
<td>show-number</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td>Tuplet number(s) displayed in metric relationship? Values: actual, both, none</td>
</tr><tr class="odd">
<td>show-number</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Tuplet number(s) displayed? Values: actual, both, none</td>
</tr><tr class="even">
<td>show-type</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Tuplet type(s) displayed? Values: actual, both, none.</td>
</tr><tr class="odd">
<td>sign</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Clef sign. Values: G, F, C, percussion, TAB, none; jianpu added in 3.0</td>
</tr><tr class="even">
<td>sign</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">3.0</td>
<td>Ped and * signs are used for pedal? Values: yes, no</td>
</tr><tr class="odd">
<td>size</td>
<td>attributes.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td>Additional clef symbol size. Values: full, cue, large</td>
</tr><tr class="even">
<td>size</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Show level with size? Values: full, cue, large</td>
</tr><tr class="odd">
<td>size</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Octave shift size: 8 for one octave, 15 for two octaves</td>
</tr><tr class="even">
<td>size</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Note size. Values: full, cue; large added in 1.1</td>
</tr><tr class="odd">
<td>slash</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Slash notation</td>
</tr><tr class="even">
<td>slash</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Grace note slashed? Values: yes, no</td>
</tr><tr class="odd">
<td>slash</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">3.0</td>
<td>Turn slashed by a vertical line? Values: yes, no</td>
</tr><tr class="even">
<td>slash-dot</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td>Definition of beat for beat-repeat and slash</td>
</tr><tr class="odd">
<td>slash-type</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td>Definition of beat for beat-repeat and slash. Values: same as type element</td>
</tr><tr class="even">
<td>slashes</td>
<td>attributes.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Number of slashes in repeat sign</td>
</tr><tr class="odd">
<td>slide</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Rapidly moving from one pitch to another continuously</td>
</tr><tr class="even">
<td>slur</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Note is at beginning, end, or inflection point of slur</td>
</tr><tr class="odd">
<td>snap-pizzicato</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Snap pizzicato</td>
</tr><tr class="even">
<td>soft-pedal</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Soft pedal control. Values: yes, no. Yes is depressed, no is released. Numeric values added in 2.0.</td>
</tr><tr class="odd">
<td>software</td>
<td>identity.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Software used for encoding</td>
</tr><tr class="even">
<td>solo</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td>Performance is intended by a solo instument</td>
</tr><tr class="odd">
<td>solo</td>
<td>sounds.dtd</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td>Mapping of solo instrument sound between its MusicXML ID and an application or library ID</td>
</tr><tr class="even">
<td>sostenuto-pedal</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Sostenuto pedal control. Values: yes, no. Yes is depressed, no is released. Numeric values added in 2.0.</td>
</tr><tr class="odd">
<td>sound</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td>Does offset affect playback as well as display? Values: yes, no</td>
</tr><tr class="even">
<td>sound</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Playback suggestions</td>
</tr><tr class="odd">
<td>sound</td>
<td>sounds.dtd</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td>MusicXML standard sound</td>
</tr><tr class="even">
<td>sounding-pitch</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Sounding pitch for harmonic</td>
</tr><tr class="odd">
<td>sounds</td>
<td>sounds.dtd</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td>Document element for MusicXML instrument sounds</td>
</tr><tr class="even">
<td>source</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td>URL for image file to be included in score direction</td>
</tr><tr class="odd">
<td>source</td>
<td>score.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td>URL for image file to be included in score credit</td>
</tr><tr class="even">
<td>source</td>
<td>identity.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Source for music that is encoded, similar to Dublin Core</td>
</tr><tr class="odd">
<td>space-length</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">3.0</td>
<td>Length of spaces in a dashed line, in tenths</td>
</tr><tr class="even">
<td>spiccato</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Spiccato / stroke articulation</td>
</tr><tr class="odd">
<td>spread</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Wedge spread in tenths</td>
</tr><tr class="even">
<td>staccatissimo</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Staccatissimo</td>
</tr><tr class="odd">
<td>staccato</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Staccato</td>
</tr><tr class="even">
<td>stack-degrees</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.1</td>
<td>Stack harmony degree elements above each other</td>
</tr><tr class="odd">
<td>staff</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Staff assignment for multi-staff parts</td>
</tr><tr class="even">
<td>staff-details</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Details for different types of staves</td>
</tr><tr class="odd">
<td>staff-distance</td>
<td>layout.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td>Staff distance within a system</td>
</tr><tr class="even">
<td>staff-layout</td>
<td>layout.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td>Staff distances for this part</td>
</tr><tr class="odd">
<td>staff-lines</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Number of lines in this staff</td>
</tr><tr class="even">
<td>staff-size</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td>Size of staff space, in percent of default scaling.</td>
</tr><tr class="odd">
<td>staff-spacing</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Spacing between part staves, in tenths; deprecated in 1.1</td>
</tr><tr class="even">
<td>staff-tuning</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Staff tuning for tablature</td>
</tr><tr class="odd">
<td>staff-type</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Values: ossia, cue, editorial, regular, alternate</td>
</tr><tr class="even">
<td>start-note</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Starting note for playback. Values: upper, main, below</td>
</tr><tr class="odd">
<td>start-stop</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.0</td>
<td>Typically used for type attribute. Values: start, stop</td>
</tr><tr class="even">
<td>start-stop-continue</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.0</td>
<td>Values: start, stop, continue</td>
</tr><tr class="odd">
<td>start-stop-single</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">2.0</td>
<td>For notations that can be multi- or single-note. Values: start, stop, single</td>
</tr><tr class="even">
<td>staves</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Number of staves per part</td>
</tr><tr class="odd">
<td>steal-time-following</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Percentage of time to steal from following note for grace note playback</td>
</tr><tr class="even">
<td>steal-time-previous</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Percentage of time to steal from previous note for grace note playback</td>
</tr><tr class="odd">
<td>stem</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Stem direction. Values: down, up, none, double.</td>
</tr><tr class="even">
<td>step</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Diatonic pitch step. Values: A, B, C, D, E, F, G</td>
</tr><tr class="odd">
<td>stick</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td>Pictograms where the material in the stick is included</td>
</tr><tr class="even">
<td>stick-location</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td>Pictograms for location of sticks on cymbals and other instruments. Values: center, rim, cymbal bell, cymbal edge</td>
</tr><tr class="odd">
<td>stick-material</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td>Material for stick pictograms. Values: soft, medium, hard, shaded, x</td>
</tr><tr class="even">
<td>stick-type</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td>Type of stick for material-specific pictograms. Values: bass drum, double bass drum, timpani, xylophone, yarn</td>
</tr><tr class="odd">
<td>stopped</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Stopped</td>
</tr><tr class="even">
<td>stress</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td>Stress articulation</td>
</tr><tr class="odd">
<td>string</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.1</td>
<td>String in scordatura accord element: highest string is 1</td>
</tr><tr class="even">
<td>string</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>String for tablature / chord symbol: highest string is 1</td>
</tr><tr class="odd">
<td>string-mute</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td>String mute on / string mute off symbols</td>
</tr><tr class="even">
<td>strong-accent</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Vertical accent</td>
</tr><tr class="odd">
<td>substitution</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Substitute fingering for middle of note? Values: yes, no</td>
</tr><tr class="even">
<td>substitution</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.1</td>
<td>Substitute heel or toe in middle of note? Values: yes, no</td>
</tr><tr class="odd">
<td>suffix</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Figured bass suffix</td>
</tr><tr class="even">
<td>supports</td>
<td>identity.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Are certain MusicXML elements supported in this encoding? (e.g. stem, beam)</td>
</tr><tr class="odd">
<td>syllabic</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Syllable type for hyphenation. Values: single, begin, end, middle</td>
</tr><tr class="even">
<td>symbol</td>
<td>attributes.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Time signature symbol. Values: common, cut, single-number, normal; note and dotted-note added in 3.0</td>
</tr><tr class="odd">
<td>symbol</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">3.0</td>
<td>Symbol to use to specify a degree. Values: major, minor, augmented, diminished, half-diminished</td>
</tr><tr class="even">
<td>symbol</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">3.0</td>
<td>Symbol for principal voice. Values: Hauptstimme, Nebenstimme, plain, none</td>
</tr><tr class="odd">
<td>symbol-size</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.0</td>
<td>Symbol size, such as for notes. Values: full, cue; large added in 1.1.</td>
</tr><tr class="even">
<td>system-distance</td>
<td>layout.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td>Vertical distance from previous system</td>
</tr><tr class="odd">
<td>system-dividers</td>
<td>layout.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td>System separator marks on left and right sides of the page</td>
</tr><tr class="even">
<td>system-layout</td>
<td>layout.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td>Left and right margins plus vertical distance</td>
</tr><tr class="odd">
<td>system-margins</td>
<td>layout.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td>System margins relative to page margins, in tenths</td>
</tr><tr class="even">
<td>tap</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Tap on fretboard</td>
</tr><tr class="odd">
<td>technical</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Performance indications for individual instruments</td>
</tr><tr class="even">
<td>tempo</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Tempo in quarter notes per minute</td>
</tr><tr class="odd">
<td>tenths</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.0</td>
<td>Positioning unit in tenths of interline space, used for attributes.</td>
</tr><tr class="even">
<td>tenths</td>
<td>layout.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td>Number of tenths in scaling ratio</td>
</tr><tr class="odd">
<td>tenuto</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Tenuto</td>
</tr><tr class="even">
<td>text</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.1</td>
<td>How harmony kind should be displayed if not using symbols</td>
</tr><tr class="odd">
<td>text</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td>How other parts of harmony elements should be displayed if not using symbols</td>
</tr><tr class="even">
<td>text</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Lyric text</td>
</tr><tr class="odd">
<td>text-decoration</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">2.0</td>
<td>Collection of text decoration attributes</td>
</tr><tr class="even">
<td>text-direction</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">2.0</td>
<td>Collection of text direction attributes, similar to W3C Internationalization Tag Set</td>
</tr><tr class="odd">
<td>text-formatting</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">2.0</td>
<td>Common formatting attributes for text elements</td>
</tr><tr class="even">
<td>text-rotation</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">2.0</td>
<td>Collection of text rotation attributes</td>
</tr><tr class="odd">
<td>text-x</td>
<td>barline.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td>Offset for start of ending text relative to start of the ending line</td>
</tr><tr class="even">
<td>text-y</td>
<td>barline.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td>Offset for baseline of ending text relative to start of the ending line</td>
</tr><tr class="odd">
<td>thumb-position</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Thumb position</td>
</tr><tr class="even">
<td>tie</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Note is part of a tie for performance purposes</td>
</tr><tr class="odd">
<td>tied</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Note appears graphically as part of a tie</td>
</tr><tr class="even">
<td>time</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Time signature</td>
</tr><tr class="odd">
<td>time-modification</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Time modification for tuplets and other durational changes</td>
</tr><tr class="even">
<td>time-only</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Which time in repeated section to apply the sound element</td>
</tr><tr class="odd">
<td>time-only</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Which time to play a note or tie in a repeated section. Added to tie element in 3.0.</td>
</tr><tr class="even">
<td>time-relation</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td>Symbol that represents interchangeable aspect of dual time signatures. Values: parentheses, bracket, equals, slash, space, hyphen.</td>
</tr><tr class="odd">
<td>time-separator</td>
<td>attributes.mod</td>
<td>Entity</td>
<td style="width: 60px;">3.0</td>
<td>Arrangement between beats and beat-type values in a time signature using the separator attribute</td>
</tr><tr class="even">
<td>time-symbol</td>
<td>attributes.mod</td>
<td>Entity</td>
<td style="width: 60px;">3.0</td>
<td>Time signature display using the symbol attribute</td>
</tr><tr class="odd">
<td>times</td>
<td>barline.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Number of times repeated section is played</td>
</tr><tr class="even">
<td>timpani</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td>Timpani pictogram</td>
</tr><tr class="odd">
<td>title</td>
<td>opus.dtd</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Title of this opus</td>
</tr><tr class="even">
<td>tocoda</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Jump forwards to coda with same value</td>
</tr><tr class="odd">
<td>toe</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Toe indication for organ pedals</td>
</tr><tr class="even">
<td>top-bottom</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.0</td>
<td>For vertical shapes. Values: top, bottom</td>
</tr><tr class="odd">
<td>top-margin</td>
<td>layout.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td>Top margin in tenths</td>
</tr><tr class="even">
<td>top-staff</td>
<td>attributes.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td>Top staff for part-symbol element</td>
</tr><tr class="odd">
<td>top-system-distance</td>
<td>layout.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td>Vertical distance from top page margin</td>
</tr><tr class="even">
<td>touching-pitch</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Pitch where string is touched for artificial harmonic</td>
</tr><tr class="odd">
<td>transpose</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Transposition from written to sounding pitch</td>
</tr><tr class="even">
<td>tremolo</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td>Single- or double-note tremolo ornament. Double-note added in 2.0.</td>
</tr><tr class="odd">
<td>trill-mark</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Trill mark</td>
</tr><tr class="even">
<td>trill-sound</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.0</td>
<td>Collection of trill playback attributes</td>
</tr><tr class="odd">
<td>trill-step</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Size of trill playback step. Values: whole, half, unison</td>
</tr><tr class="even">
<td>triple-tongue</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Triple tongue</td>
</tr><tr class="odd">
<td>tuning-alter</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Pitch alteration for a staff line. In attributes.mod in 1.0.</td>
</tr><tr class="even">
<td>tuning-octave</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Octave for a staff line. In attributes.mod in 1.0.</td>
</tr><tr class="odd">
<td>tuning-step</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Pitch step for a staff line. In attributes.mod in 1.0.</td>
</tr><tr class="even">
<td>tuplet</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Note is at beginning or end of a tuplet</td>
</tr><tr class="odd">
<td>tuplet-actual</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Indicates notes actually played</td>
</tr><tr class="even">
<td>tuplet-dot</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Augmentation dot for tuplet-type value</td>
</tr><tr class="odd">
<td>tuplet-normal</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Indicates notes usually occupying this time</td>
</tr><tr class="even">
<td>tuplet-number</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Number of tuplet notes</td>
</tr><tr class="odd">
<td>tuplet-type</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Type of tuplet notes</td>
</tr><tr class="even">
<td>turn</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Turn</td>
</tr><tr class="odd">
<td>two-note-turn</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Size of turn at end of trill. Values: whole, half, none</td>
</tr><tr class="even">
<td>type</td>
<td>attributes.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Measure style type. Values: start, stop</td>
</tr><tr class="odd">
<td>type</td>
<td>barline.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Ending type. Values: start, stop, discontinue</td>
</tr><tr class="even">
<td>type</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Fermata type. Values: upright, inverted</td>
</tr><tr class="odd">
<td>type</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">3.0</td>
<td>Playback technique type for other-play element</td>
</tr><tr class="even">
<td>type</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Wedge type. Values: crescendo, diminuendo, stop</td>
</tr><tr class="odd">
<td>type</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td>Metronome tuplet type. Values: start, stop</td>
</tr><tr class="even">
<td>type</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Pedal type. Values: start, stop; change added in 1.1</td>
</tr><tr class="odd">
<td>type</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Used in many elements, usually as start-stop, start-stop-continue, or start-stop-single entity</td>
</tr><tr class="even">
<td>type</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Octave shift type. Values: up, down, stop</td>
</tr><tr class="odd">
<td>type</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">3.0</td>
<td>String mute type. Values: on, off</td>
</tr><tr class="even">
<td>type</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Harmony type. Values: explicit, implied, alternate</td>
</tr><tr class="odd">
<td>type</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td>Image MIME type. Typical values: application/postscript, image/gif, image/jpeg, image/png, image/tiff</td>
</tr><tr class="even">
<td>type</td>
<td>identity.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Creator type. Standard values added in 2.0: composer, lyricist, arranger</td>
</tr><tr class="odd">
<td>type</td>
<td>identity.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Rights type. Standard values added in 2.0: music, words, arrangement</td>
</tr><tr class="even">
<td>type</td>
<td>identity.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td>Relation type. Standard values: music, words, arrangement</td>
</tr><tr class="odd">
<td>type</td>
<td>layout.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.1</td>
<td>Page numbers where layout applies. Values: odd, even, both</td>
</tr><tr class="even">
<td>type</td>
<td>layout.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td>Line width type. Values: beam, bracket, dashes, enclosure, ending, extend, heavy barline, leger, light barline, octave shift, pedal, slur middle, slur tip, staff, stem, tie middle, tie tip, tuplet bracket, wedge</td>
</tr><tr class="odd">
<td>type</td>
<td>layout.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td>Note size type. Values: cue, grace, large</td>
</tr><tr class="even">
<td>type</td>
<td>layout.mod</td>
<td>Attribute</td>
<td style="width: 60px;">3.0</td>
<td>Distance type. Values: hyphen, beam</td>
</tr><tr class="odd">
<td>type</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Values: 256th, 128th, 64th, 32nd, 16th, eighth, quarter, half, whole, breve, long; 1024th, 512th, and maxima added in 3.0</td>
</tr><tr class="even">
<td>type</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Used in many elements, usually as start-stop, start-stop-continue, or start-stop-single entity</td>
</tr><tr class="odd">
<td>type</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Strong accent direction. Values: up, down</td>
</tr><tr class="even">
<td>type</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Non-arpeggiate type. Values: top, bottom</td>
</tr><tr class="odd">
<td>type</td>
<td>score.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Part-group type. Values: start, stop</td>
</tr><tr class="even">
<td>type</td>
<td>score.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td>Credit image MIME type. Typical values: application/postscript, image/gif, image/jpeg, image/png, image/tiff</td>
</tr><tr class="odd">
<td>underline</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td>Number of text underlines. Values: 0, 1, 2, 3</td>
</tr><tr class="even">
<td>unpitched</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Musical notes notated on the staff but lacking definite pitch</td>
</tr><tr class="odd">
<td>unplayed</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">3.0</td>
<td>What to display above an unplayed string in a frame</td>
</tr><tr class="even">
<td>unstress</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td>Unstress articulation</td>
</tr><tr class="odd">
<td>up-bow</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Up bow</td>
</tr><tr class="even">
<td>up-down</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.0</td>
<td>For arrow direction. Values: up, down</td>
</tr><tr class="odd">
<td>use-dots</td>
<td>attributes.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Use dots with beat-repeat or slash</td>
</tr><tr class="even">
<td>use-stems</td>
<td>attributes.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Use stems with slash notation</td>
</tr><tr class="odd">
<td>use-symbols</td>
<td>attributes.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Use 1-bar / 2-bar / 4-bar symbols for multimeasure rests</td>
</tr><tr class="even">
<td>use-symbols</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.1</td>
<td>Use harmony symbols rather than letters and numbers</td>
</tr><tr class="odd">
<td>valign</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.1</td>
<td>Vertical alignment for text or images</td>
</tr><tr class="even">
<td>valign</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.1</td>
<td>Vertical alignment for text. Values: top, middle, bottom, baseline</td>
</tr><tr class="odd">
<td>valign-image</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">2.0</td>
<td>Vertical alignment for images. Values: top, middle, bottom</td>
</tr><tr class="even">
<td>value</td>
<td>identity.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td>Which value of an element or attribute is supported or not</td>
</tr><tr class="odd">
<td>version</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.1</td>
<td>MusicXML format version. Added to opus element in 2.0.</td>
</tr><tr class="even">
<td>vertical-turn</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td>Turn with shape arranged vertically from upper left to lower right</td>
</tr><tr class="odd">
<td>virtual-instrument</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td>Specific virtual instrument used for an instrument sound</td>
</tr><tr class="even">
<td>virtual-library</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td>Virtual instrument library name</td>
</tr><tr class="odd">
<td>virtual-name</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td>Library-specific name for virtual instrument</td>
</tr><tr class="even">
<td>voice</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Distinguish musical voice</td>
</tr><tr class="odd">
<td>volume</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td>MIDI channel volume as percentage of maximum. Values: 0 to 100</td>
</tr><tr class="even">
<td>wavy-line</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Wavy line symbol</td>
</tr><tr class="odd">
<td>wedge</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Crescendo / diminuendo wedges</td>
</tr><tr class="even">
<td>width</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.1</td>
<td>Frame width in tenths</td>
</tr><tr class="odd">
<td>width</td>
<td>score.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.1</td>
<td>Measure width in tenths</td>
</tr><tr class="even">
<td>winged</td>
<td>barline.mod</td>
<td>Attribute</td>
<td style="width: 60px;">3.0</td>
<td>Does repeat have winged extensions? Values: none, straight, curved, double-straight, double-curved</td>
</tr><tr class="odd">
<td>with-bar</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Bend is done at bridge with whammy or vibrato bar</td>
</tr><tr class="even">
<td>wood</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td>Pictograms for wood percussion instruments. Values: board clapper, cabasa, castanets, claves, guiro, log drum, maraca, maracas, ratchet, sandpaper blocks, slit drum, temple block, vibraslap, wood block</td>
</tr><tr class="odd">
<td>word-font</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td>Font for words and other non-lyric text</td>
</tr><tr class="even">
<td>words</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Text direction</td>
</tr><tr class="odd">
<td>work</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Information regarding the overall work</td>
</tr><tr class="even">
<td>work-number</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Number of work</td>
</tr><tr class="odd">
<td>work-title</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td>Title of work</td>
</tr><tr class="even">
<td>xlink.ns</td>
<td>link.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.0</td>
<td>XLink namespace</td>
</tr><tr class="odd">
<td>xlink:actuate</td>
<td>link.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>XLink 1.0 actuate. Values: onRequest, onLoad, other, none</td>
</tr><tr class="even">
<td>xlink:href</td>
<td>link.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>XLink 1.0 href</td>
</tr><tr class="odd">
<td>xlink:role</td>
<td>link.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>XLink 1.0 role</td>
</tr><tr class="even">
<td>xlink:show</td>
<td>link.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>XLink 1.0 show. Values: new, replace, embed, other, none</td>
</tr><tr class="odd">
<td>xlink:title</td>
<td>link.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>XLink 1.0 title</td>
</tr><tr class="even">
<td>xlink:type</td>
<td>link.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>XLink 1.0 type. Value: simple</td>
</tr><tr class="odd">
<td>xml:lang</td>
<td>attributes.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Language for directives</td>
</tr><tr class="even">
<td>xml:lang</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Language for words, credit-words, and other text elements</td>
</tr><tr class="odd">
<td>xml:lang</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.1</td>
<td>Language for rehearsal marks</td>
</tr><tr class="even">
<td>xml:lang</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>Language for lyric text</td>
</tr><tr class="odd">
<td>xml:lang</td>
<td>score.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.1</td>
<td>Default lyric language</td>
</tr><tr class="even">
<td>xml:space</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">3.0</td>
<td>Whitespace handling for formatted text</td>
</tr><tr class="odd">
<td>xmlns:xlink</td>
<td>link.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td>XLink 1.0 namespace. Value: %xlink.ns;</td>
</tr><tr class="even">
<td>yes-no</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.0</td>
<td>For boolean-like attributes. Values: yes, no</td>
</tr><tr class="odd">
<td>yes-no-number</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">2.0</td>
<td>For attributes that can be boolean or numeric. Values: yes, no, and numbers</td>
</tr><tr class="even">
<td>yyyy-mm-dd</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.0</td>
<td>Calendar dates in ISO 8601 format</td>
</tr></tbody></table>