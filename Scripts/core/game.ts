/// <reference path="../typings/createjs-lib.d.ts" />
/// <reference path="../typings/easeljs.d.ts" />
/// <reference path="../typings/preloadjs.d.ts" />
/// <reference path="../typings/soundjs.d.ts" />
/// <reference path="../typings/tweenjs.d.ts" />
/// <reference path="../typings/waa.d.ts" />
/// <reference path="../typings/mediastream.d.ts" />
/// <reference path="../typings/rtcpeerconnection.d.ts" />
/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// global game framework variables
var canvas: HTMLElement;
var stage: createjs.Stage;

// game variables
var helloLabel: createjs.Text;


function init() {
	canvas = document.getElementById("canvas");// makes reference to canvas in html page
	stage = new createjs.Stage(canvas); //associate the canvas element with the stage
	createjs.Ticker.setFPS(60);// set the frame to 60 fps
	createjs.Ticker.on("tick", gameLoop, this);
	
	main();
}


function gameLoop(event:createjs.Event):void {
	stage.update();
}

function main():void {
	console.log("we are in main method!");
	helloLabel = new createjs.Text("Hello World!", "40px Consolas", "#FFFF00");
	// 0 point is top left corner
	// draw to the right - positive x
	// draw to the right - negative x
	// draw up - negative y
	// draw down - positive y
	helloLabel.x = 320;
	helloLabel.y = 240;
	
	stage.addChild(helloLabel);
}
