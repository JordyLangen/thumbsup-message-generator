const messages = [
    "[random doge message]",
    "why not", 
    "looks good", 
    "very nice!",
    "awesome",
    "looks about right",
    "sick!",
    "exactly what we need",
    "even better than i thought",
    "uber",
    "speechless",
    "nice",
    "cool :dark_sunglasses:",
    "flawless",
    "damn pretty",
    ":)",
    "o.O",
    "¯\\_(ツ)_/¯",
    "bloody brilliant",
    "made my day",
    "holy moly",
    "hell yeah",
    "about time",
    "not too shabby",
    "if only we came up with this earlier",
    "instant-deploy material",
    "genius",
    "finally",
    "ship it :ship:",
    "┻━┻ ︵﻿ ¯\\(ツ)/¯ ︵ ┻━┻",
	"netjes<br><img src=\"http://www.memelove.nl/media/created/ecd5zr.jpg\">",
	"vet netjes<br><img src=\"https://pbs.twimg.com/media/CMhD4YFUkAAVfri.jpg\">",
	"ik vind helemaal mooi<br><img src=\"http://www.quickmeme.com/img/b7/b7d113ed4f66a4dcf1558c78fa01b65ed3ec77559d21cbd199119a445b6c5b0b.jpg\">"
];

const dogeMessages = [
	"such cool",
	"much wow",
	"such awesome",
	"much awesome",
	"much wow",
	"very wow"
];

export function generateMessage() {
	let index = new Date().getTime() % messages.length;
	if (index === 0) {
		let start = dogeMessages[Math.floor((Math.random() * dogeMessages.length))];
		let end = dogeMessages[Math.floor((Math.random() * dogeMessages.length))];
		return `${start}, ${end}`;
	} else {
		return messages[new Date().getTime() % messages.length];	
	}
}
