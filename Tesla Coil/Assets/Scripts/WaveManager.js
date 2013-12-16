#pragma strict
var currentWave : String = "";
var countdown : float;
private var accurateTime : float = 0;
private var counter : float = 0;

var waitForOne : boolean = true;
var waveOneDelayTime : float = 10;
var waveOne : boolean = false;
var waveOneTime : float = 120;

var waitForTwo : boolean = true;
var waveTwoDelayTime : float = 45;
var waveTwo : boolean = false;
var waveTwoTime : float = 120;

var totalTime : float;

var door : GameObject;
var backdoor : GameObject;

function Update () {
	if (Time.timeSinceLevelLoad < waveOneDelayTime && waitForOne){
		currentWave = "Wave One Starts in ";
		counter += Time.deltaTime;
		accurateTime = waveOneDelayTime - counter;
		countdown = Mathf.RoundToInt(accurateTime);
		
	} else if (Time.timeSinceLevelLoad > waveOneDelayTime && (waitForOne || waveOne)){
		DoorOpen();
		Debug.Log("Begin Wave 1");
		waitForOne = false;
		waveOne = true;
		currentWave = "Wave One ";
		counter += Time.deltaTime;
		accurateTime = (waveOneTime - counter) + waveOneDelayTime;
		countdown = Mathf.RoundToInt(accurateTime);
	}
}
function DoorOpen () {
	door.animation.Play();
}