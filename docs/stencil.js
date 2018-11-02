var lineDrawing = anime({
	targets: '#lineDrawing .lines path',
	strokeDashoffset: [anime.setDashoffset, 0],
	easing: 'easeInOutSine',
	duration: 1500,
	backgroundColor: [
	{value: '#FFF'}, 
	{value: 'rgb(255, 0, 0)'},
	{value: 'hsl(100, 60%, 60%)'}
	],
	delay: function(el, i) { return i * 250 },
	direction: 'alternate',
	loop: false,
	autoplay: false
});
var lineDrawing2 = anime({
	targets: '#lineDrawing2 .lines path',
	strokeDashoffset: [anime.setDashoffset, 0],
	easing: 'easeInOutSine',
	duration: 1500,
	delay: function(el, i) { return i * 250 },
	direction: 'alternate',
	loop: false,
	autoplay: false
});

var tiltSettings = [
{},
{
	movement: {
		imgWrapper : {
			rotation : {x: -5, y: 10, z: 0},
			reverseAnimation : {duration : 50, easing : 'easeOutQuad'}
		},
		caption : {
			translation : {x: 20, y: 20, z: 0},
			reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
		},
		overlay : {
			translation : {x: 5, y: -5, z: 0},
			rotation : {x: 0, y: 0, z: 6},
			reverseAnimation : {duration : 1000, easing : 'easeOutQuad'}
		},
		shine : {
			translation : {x: 50, y: 50, z: 0},
			reverseAnimation : {duration : 50, easing : 'easeOutQuad'}
		}
	}
}];

function init() {
	var idx = 0;
	[].slice.call(document.querySelectorAll('a.tilter')).forEach(function(el, pos) { 
		idx = pos%2 === 0 ? idx+1 : idx;
		new TiltFx(el, tiltSettings[idx-1]);
	});
}

