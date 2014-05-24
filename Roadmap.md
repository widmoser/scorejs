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
		</tr>
	</thead>
<tfoot></tfoot>
<tbody><tr class="odd first">
<td>accelerate</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>accent</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>accidental</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>accidental-mark</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>accidental-text</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="even">
<td>accord</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="odd">
<td>accordion-high</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="even">
<td>accordion-low</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="odd">
<td>accordion-middle</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="even">
<td>accordion-registration</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="odd">
<td>actual-notes</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>additional</td>
<td>attributes.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="odd">
<td>after-barline</td>
<td>attributes.mod</td>
<td>Attribute</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="even">
<td>alter</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>alternate</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>any</td>
<td>sounds.dtd</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="odd">
<td>appearance</td>
<td>layout.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="even">
<td>approach</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="odd">
<td>arpeggiate</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>arrow</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="odd">
<td>arrow-direction</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="even">
<td>arrow-style</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="odd">
<td>articulations</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>artificial</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd last">
<td>attack</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>attribute</td>
<td>identity.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="odd">
<td>attributes</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>backup</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>bar-style</td>
<td>barline.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>barline</td>
<td>barline.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>barre</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="even">
<td>base-pitch</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>bass</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>bass-alter</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>bass-step</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>beam</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>beam-level</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>beat-repeat</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>beat-type</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>beat-unit</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>beat-unit-dot</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>beater</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="odd">
<td>beats</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>beats</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>bend</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>bend-alter</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>bend-sound</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>bezier</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>bezier-offset</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>bezier-offset2</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>bezier-x</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>bezier-x2</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>bezier-y</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>bezier-y2</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>blank-page</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="even">
<td>bookmark</td>
<td>link.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>bottom-margin</td>
<td>layout.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="even">
<td>bottom-staff</td>
<td>attributes.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="odd">
<td>bracket</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>bracket</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>bracket</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="even">
<td>bracket</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>bracket-degrees</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="even">
<td>breath-mark</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>caesura</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>cancel</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>cancel</td>
<td>attributes.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="even">
<td>capo</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>cautionary</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>chord</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>chromatic</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>circular-arrow</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="odd">
<td>clef</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>clef-octave-change</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>coda</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>coda</td>
<td>barline.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="odd">
<td>coda</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>color</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="odd">
<td>color</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="even">
<td>container</td>
<td>container.dtd</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="odd">
<td>creator</td>
<td>identity.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>credit</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="odd">
<td>credit-image</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="even">
<td>credit-type</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="odd">
<td>credit-words</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="even">
<td>cue</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>dacapo</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>dalsegno</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>damp</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>damp-all</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>damper-pedal</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>dash-length</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="odd">
<td>dashed-formatting</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="even">
<td>dashes</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>default-x</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>default-y</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>defaults</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="even">
<td>degree</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>degree-alter</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>degree-type</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>degree-value</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>delayed-inverted-turn</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="odd">
<td>delayed-turn</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>departure</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="odd">
<td>detached-legato</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>diatonic</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>dir</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="even">
<td>direction</td>
<td>barline.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>direction</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>direction</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>direction-type</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>directive</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="odd">
<td>directive</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="even">
<td>directive</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>display-octave</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>display-step</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>display-text</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="even">
<td>distance</td>
<td>layout.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="odd">
<td>divisions</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>divisions</td>
<td>barline.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="odd">
<td>divisions</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>document-attributes</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="odd">
<td>doit</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>dot</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>double</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>double-tongue</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>down-bow</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>duration</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>dynamics</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>dynamics</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>dynamics</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>editorial</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>editorial</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>editorial-voice</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>effect</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="even">
<td>element</td>
<td>identity.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>element</td>
<td>link.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="even">
<td>elevation</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>elevation</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="even">
<td>elision</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>enclosure</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="even">
<td>enclosure</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="odd">
<td>enclosure-shape</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="even">
<td>encoder</td>
<td>identity.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>encoding</td>
<td>identity.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>encoding-date</td>
<td>identity.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>encoding-description</td>
<td>identity.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>end-dynamics</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>end-length</td>
<td>barline.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="even">
<td>end-length</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>end-line</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>end-paragraph</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>ending</td>
<td>barline.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>ensemble</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="odd">
<td>ensemble</td>
<td>sounds.dtd</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="even">
<td>extend</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>eyeglasses</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>f</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>falloff</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>fan</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="odd">
<td>feature</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>fermata</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>ff</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>fff</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>ffff</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>fffff</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>ffffff</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>fifths</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>figure</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>figure-number</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>figured-bass</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>filled</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>fine</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>fingering</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>fingernails</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>first-beat</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>first-fret</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>font</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>font-family</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>font-size</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>font-style</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>font-weight</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>footnote</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>forward</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>forward-repeat</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>fp</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>frame</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>frame-frets</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>frame-note</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>frame-strings</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>fret</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>full-note</td>
<td>note.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>full-path</td>
<td>container.dtd</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="even">
<td>function</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>fz</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>glass</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="odd">
<td>glissando</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>grace</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>group</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>group-abbreviation</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>group-abbreviation-display</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="even">
<td>group-barline</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>group-name</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>group-name-display</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="odd">
<td>group-symbol</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>group-time</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="odd">
<td>grouping</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>halign</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="odd">
<td>halign</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="even">
<td>hammer-on</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>handbell</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="even">
<td>harmonic</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>harmony</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>harmony-chord</td>
<td>direction.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>harp-pedals</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="even">
<td>heel</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>height</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="even">
<td>hole</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="odd">
<td>hole-closed</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="even">
<td>hole-shape</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="odd">
<td>hole-type</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="even">
<td>humming</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>id</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>id</td>
<td>link.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>id</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>id</td>
<td>score.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>id</td>
<td>score.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>id</td>
<td>sounds.dtd</td>
<td>Attribute</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="odd">
<td>identification</td>
<td>identity.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>image</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="odd">
<td>implicit</td>
<td>score.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>instrument</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>instrument-abbreviation</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>instrument-name</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>instrument-sound</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="even">
<td>instruments</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>interchangeable</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="even">
<td>inversion</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>inverted-mordent</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>inverted-turn</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="odd">
<td>ipa</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="even">
<td>isolat1</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>isolat2</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>justify</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>justify</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="even">
<td>key</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>key-accidental</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="even">
<td>key-alter</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>key-octave</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="even">
<td>key-step</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>kind</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>last-beat</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>laughing</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>layout-tenths</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="odd">
<td>left-divider</td>
<td>layout.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="even">
<td>left-margin</td>
<td>layout.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="odd">
<td>left-right</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="even">
<td>letter-spacing</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="odd">
<td>letter-spacing</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="even">
<td>level</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>level-display</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="even">
<td>line</td>
<td>attributes.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>line</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>line</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>line-end</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>line-height</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="odd">
<td>line-height</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="even">
<td>line-shape</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>line-shape</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>line-through</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="odd">
<td>line-type</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>line-type</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>line-width</td>
<td>layout.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="even">
<td>link</td>
<td>link.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>link-attributes</td>
<td>link.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>location</td>
<td>attributes.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="odd">
<td>location</td>
<td>barline.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>location</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="odd">
<td>location</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="even">
<td>long</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>lyric</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>lyric-font</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="odd">
<td>lyric-language</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="even">
<td>make-time</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>measure</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="even">
<td>measure</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>measure-distance</td>
<td>layout.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="even">
<td>measure-layout</td>
<td>layout.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="odd">
<td>measure-numbering</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="even">
<td>measure-repeat</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>measure-style</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>media-type</td>
<td>container.dtd</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="odd">
<td>member-of</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>membrane</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="odd">
<td>metal</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="even">
<td>metronome</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>metronome-beam</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="even">
<td>metronome-dot</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="odd">
<td>metronome-note</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="even">
<td>metronome-relation</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="odd">
<td>metronome-tuplet</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="even">
<td>metronome-type</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="odd">
<td>mf</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>midi-bank</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>midi-channel</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>midi-device</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>midi-instrument</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>midi-name</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>midi-program</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>midi-unpitched</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>millimeters</td>
<td>layout.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="even">
<td>miscellaneous</td>
<td>identity.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>miscellaneous-field</td>
<td>identity.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>mode</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>mordent</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>movement-number</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>movement-title</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>mp</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>multiple-rest</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>music-data</td>
<td>score.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>music-font</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="even">
<td>mute</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="odd">
<td>name</td>
<td>identity.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>name</td>
<td>link.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>name</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>name</td>
<td>score.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="odd">
<td>natural</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>new-page</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>new-page</td>
<td>opus.dtd</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="even">
<td>new-system</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>niente</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="even">
<td>non-arpeggiate</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>non-controlling</td>
<td>score.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>normal-dot</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>normal-notes</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>normal-type</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>notations</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>note</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>note-size</td>
<td>layout.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="even">
<td>notehead</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>notehead-text</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="even">
<td>number</td>
<td>attributes.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>number</td>
<td>barline.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>number</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>number</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>number</td>
<td>layout.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="odd">
<td>number</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>number</td>
<td>score.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="odd">
<td>number</td>
<td>sounds.dtd</td>
<td>Attribute</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="even">
<td>number-level</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>number-of-lines</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="even">
<td>octave</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>octave-change</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>octave-shift</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>offset</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>open-string</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>opus</td>
<td>opus.dtd</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>opus</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>opus-link</td>
<td>opus.dtd</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>orientation</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>orientation</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>ornaments</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>other-appearance</td>
<td>layout.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="even">
<td>other-articulation</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>other-direction</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>other-dynamics</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>other-notation</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>other-ornament</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>other-percussion</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="even">
<td>other-play</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="odd">
<td>other-technical</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>overline</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="odd">
<td>p</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>page</td>
<td>score.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="odd">
<td>page-height</td>
<td>layout.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="even">
<td>page-layout</td>
<td>layout.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="odd">
<td>page-margins</td>
<td>layout.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="even">
<td>page-number</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="odd">
<td>page-width</td>
<td>layout.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="even">
<td>pan</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="odd">
<td>pan</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>parentheses</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>parentheses</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>parentheses</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>parentheses-degrees</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="even">
<td>part</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>part-abbreviation</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>part-abbreviation-display</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="odd">
<td>part-group</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>part-list</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>part-name</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>part-name-display</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="odd">
<td>part-symbol</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="even">
<td>pedal</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>pedal-alter</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="even">
<td>pedal-step</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="odd">
<td>pedal-tuning</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="even">
<td>per-minute</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>percussion</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="even">
<td>pitch</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>pitched</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="even">
<td>pizzicato</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>pizzicato</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>placement</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>placement</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>play</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="odd">
<td>plop</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>pluck</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="odd">
<td>plus-minus</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="even">
<td>port</td>
<td>score.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>position</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>position</td>
<td>link.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="odd">
<td>pp</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>ppp</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>pppp</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>ppppp</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>pppppp</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>pre-bend</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>prefix</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>primary</td>
<td>sounds.dtd</td>
<td>Attribute</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="odd">
<td>principal-voice</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="even">
<td>print</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>print-dot</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>print-frame</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>print-lyric</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="even">
<td>print-object</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>print-object</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="even">
<td>print-spacing</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>print-spacing</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="even">
<td>print-style</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="odd">
<td>printout</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>pull-off</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>reference</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="even">
<td>rehearsal</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>relation</td>
<td>identity.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="even">
<td>relative-x</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>relative-y</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>release</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>release</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>repeat</td>
<td>barline.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>repeater</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>rest</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>rf</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>rfz</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>right-divider</td>
<td>layout.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="even">
<td>right-margin</td>
<td>layout.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="odd">
<td>rights</td>
<td>identity.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>root</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>root-alter</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>root-step</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>rootfile</td>
<td>container.dtd</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="even">
<td>rootfiles</td>
<td>container.dtd</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="odd">
<td>rotation</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="even">
<td>scaling</td>
<td>layout.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="odd">
<td>schleifer</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>scoop</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>scordatura</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="even">
<td>score</td>
<td>opus.dtd</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>score-header</td>
<td>score.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>score-instrument</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>score-part</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>score-partwise</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>score-timewise</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>second-beat</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>segno</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>segno</td>
<td>barline.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="odd">
<td>segno</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>semi-pitched</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="odd">
<td>senza-misura</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>separator</td>
<td>attributes.mod</td>
<td>Attribute</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="odd">
<td>sf</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>sffz</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>sfp</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>sfpp</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>sfz</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>shake</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>show-frets</td>
<td>attributes.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>show-number</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="odd">
<td>show-number</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>show-type</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>sign</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>sign</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="odd">
<td>size</td>
<td>attributes.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="even">
<td>size</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>size</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>size</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>slash</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>slash</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>slash</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="even">
<td>slash-dot</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="odd">
<td>slash-type</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="even">
<td>slashes</td>
<td>attributes.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>slide</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>slur</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>snap-pizzicato</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>soft-pedal</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>software</td>
<td>identity.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>solo</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="odd">
<td>solo</td>
<td>sounds.dtd</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="even">
<td>sostenuto-pedal</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>sound</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="even">
<td>sound</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>sound</td>
<td>sounds.dtd</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="even">
<td>sounding-pitch</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>sounds</td>
<td>sounds.dtd</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="even">
<td>source</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="odd">
<td>source</td>
<td>score.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="even">
<td>source</td>
<td>identity.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>space-length</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="even">
<td>spiccato</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>spread</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>staccatissimo</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>staccato</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>stack-degrees</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="odd">
<td>staff</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>staff-details</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>staff-distance</td>
<td>layout.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="even">
<td>staff-layout</td>
<td>layout.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="odd">
<td>staff-lines</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>staff-size</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="odd">
<td>staff-spacing</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>staff-tuning</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>staff-type</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>start-note</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>start-stop</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>start-stop-continue</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>start-stop-single</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="even">
<td>staves</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>steal-time-following</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>steal-time-previous</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>stem</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>step</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>stick</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="even">
<td>stick-location</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="odd">
<td>stick-material</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="even">
<td>stick-type</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="odd">
<td>stopped</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>stress</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="odd">
<td>string</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="even">
<td>string</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>string-mute</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="even">
<td>strong-accent</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>substitution</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>substitution</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="odd">
<td>suffix</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>supports</td>
<td>identity.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>syllabic</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>symbol</td>
<td>attributes.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>symbol</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="even">
<td>symbol</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="odd">
<td>symbol-size</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>system-distance</td>
<td>layout.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="odd">
<td>system-dividers</td>
<td>layout.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="even">
<td>system-layout</td>
<td>layout.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="odd">
<td>system-margins</td>
<td>layout.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="even">
<td>tap</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>technical</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>tempo</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>tenths</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>tenths</td>
<td>layout.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="odd">
<td>tenuto</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>text</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="odd">
<td>text</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="even">
<td>text</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>text-decoration</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="even">
<td>text-direction</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="odd">
<td>text-formatting</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="even">
<td>text-rotation</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="odd">
<td>text-x</td>
<td>barline.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="even">
<td>text-y</td>
<td>barline.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="odd">
<td>thumb-position</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>tie</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>tied</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>time</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>time-modification</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>time-only</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>time-only</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>time-relation</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="odd">
<td>time-separator</td>
<td>attributes.mod</td>
<td>Entity</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="even">
<td>time-symbol</td>
<td>attributes.mod</td>
<td>Entity</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="odd">
<td>times</td>
<td>barline.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>timpani</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="odd">
<td>title</td>
<td>opus.dtd</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>tocoda</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>toe</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>top-bottom</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>top-margin</td>
<td>layout.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="even">
<td>top-staff</td>
<td>attributes.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="odd">
<td>top-system-distance</td>
<td>layout.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="even">
<td>touching-pitch</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>transpose</td>
<td>attributes.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>tremolo</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="odd">
<td>trill-mark</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>trill-sound</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>trill-step</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>triple-tongue</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>tuning-alter</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>tuning-octave</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>tuning-step</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>tuplet</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>tuplet-actual</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>tuplet-dot</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>tuplet-normal</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>tuplet-number</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>tuplet-type</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>turn</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>two-note-turn</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>type</td>
<td>attributes.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>type</td>
<td>barline.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>type</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>type</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="even">
<td>type</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>type</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="even">
<td>type</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>type</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>type</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>type</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="even">
<td>type</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>type</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="even">
<td>type</td>
<td>identity.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>type</td>
<td>identity.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>type</td>
<td>identity.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="odd">
<td>type</td>
<td>layout.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="even">
<td>type</td>
<td>layout.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="odd">
<td>type</td>
<td>layout.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="even">
<td>type</td>
<td>layout.mod</td>
<td>Attribute</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="odd">
<td>type</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>type</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>type</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>type</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>type</td>
<td>score.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>type</td>
<td>score.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="odd">
<td>underline</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="even">
<td>unpitched</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>unplayed</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="even">
<td>unstress</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="odd">
<td>up-bow</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>up-down</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>use-dots</td>
<td>attributes.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>use-stems</td>
<td>attributes.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>use-symbols</td>
<td>attributes.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>use-symbols</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="odd">
<td>valign</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="even">
<td>valign</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="odd">
<td>valign-image</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="even">
<td>value</td>
<td>identity.mod</td>
<td>Attribute</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="odd">
<td>version</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="even">
<td>vertical-turn</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="odd">
<td>virtual-instrument</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="even">
<td>virtual-library</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="odd">
<td>virtual-name</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="even">
<td>voice</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>volume</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="even">
<td>wavy-line</td>
<td>common.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>wedge</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>width</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="odd">
<td>width</td>
<td>score.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="even">
<td>winged</td>
<td>barline.mod</td>
<td>Attribute</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="odd">
<td>with-bar</td>
<td>note.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>wood</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="odd">
<td>word-font</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="even">
<td>words</td>
<td>direction.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>work</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>work-number</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>work-title</td>
<td>score.mod</td>
<td>Element</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>xlink.ns</td>
<td>link.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>xlink:actuate</td>
<td>link.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>xlink:href</td>
<td>link.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>xlink:role</td>
<td>link.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>xlink:show</td>
<td>link.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>xlink:title</td>
<td>link.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>xlink:type</td>
<td>link.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>xml:lang</td>
<td>attributes.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>xml:lang</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>xml:lang</td>
<td>direction.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="even">
<td>xml:lang</td>
<td>note.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>xml:lang</td>
<td>score.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.1</td>
<td></td></tr><tr class="even">
<td>xml:space</td>
<td>common.mod</td>
<td>Attribute</td>
<td style="width: 60px;">3.0</td>
<td></td></tr><tr class="odd">
<td>xmlns:xlink</td>
<td>link.mod</td>
<td>Attribute</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="even">
<td>yes-no</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.0</td>
<td></td></tr><tr class="odd">
<td>yes-no-number</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">2.0</td>
<td></td></tr><tr class="even">
<td>yyyy-mm-dd</td>
<td>common.mod</td>
<td>Entity</td>
<td style="width: 60px;">1.0</td>
<td></td></tr></tbody></table>