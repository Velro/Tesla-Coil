#pragma strict
var oneTimer : AudioClip;
var loop : AudioClip;

function Start () {
		audio.clip = oneTimer;
		audio.Play();
	Wait();
}

function Wait (){
	yield WaitForSeconds(oneTimer.length);
	audio.clip = loop;
	audio.Play();
	audio.loop = true;
}