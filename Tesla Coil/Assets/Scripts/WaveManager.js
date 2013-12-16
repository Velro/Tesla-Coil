#pragma strict

var currentWave : String = "";
var countdown : float;
private var accurateTime : float = 0;
private var counter : float = 0;

var waveTime : float = 80;
var waveDelayTime : float = 40;

var waitForOne : boolean = true;
var waveOne : boolean = false;

var waitForTwo : boolean = true;
var waveTwo : boolean = false;

var waitForThree : boolean = true;
var waveThree : boolean = false;

var totalTime : float;

var doorLeft : GameObject;
var doorRight : GameObject;
var backdoor : GameObject;

var waveOneSubManager : GameObject;

var dishPointsOnce : boolean = true;

var debugCoefficient : float = 0;

function Update () {
	if (Time.timeSinceLevelLoad < waveDelayTime && waitForOne){
		currentWave = "Wave One Starts in ";
		//counter += Time.deltaTime;
		accurateTime = waveDelayTime - Time.timeSinceLevelLoad;
		countdown = Mathf.RoundToInt(accurateTime);
		if (dishPointsOnce == true){
			gameObject.GetComponent(PlayerStats).upgradePoints += 3;
			dishPointsOnce = false;
		}
	} else if (Time.timeSinceLevelLoad > waveDelayTime && Time.timeSinceLevelLoad < (waveDelayTime + waveTime) && (waitForOne || waveOne) 
	&& !(waitForTwo || waveTwo)){
		DoorsOpen();
		SpawnWave1();
		Debug.Log("Begin Wave 1");
		waitForOne = false;
		waveOne = true;
		currentWave = "Wave One ";
		//counter += Time.deltaTime;
		accurateTime = (waveTime - Time.timeSinceLevelLoad) + waveDelayTime;
		countdown = Mathf.RoundToInt(accurateTime);
		dishPointsOnce = true;
	} else if (Time.timeSinceLevelLoad > (waveTime + waveDelayTime) && Time.timeSinceLevelLoad < (waveTime + waveDelayTime*2)){
		DoorsClose();
		waveOne = false;
		waitForTwo = true;
		currentWave = "Wave Two Starts in ";
		//counter += Time.deltaTime;
		accurateTime = (waveDelayTime - Time.timeSinceLevelLoad) + (waveDelayTime + waveTime);
		countdown = Mathf.RoundToInt(accurateTime);
		if (dishPointsOnce == true){
			gameObject.GetComponent(PlayerStats).upgradePoints += 3;
			dishPointsOnce = false;
		}
	} else if (Time.timeSinceLevelLoad > (waveTime + waveDelayTime * 2)  && Time.timeSinceLevelLoad < (waveTime + waveDelayTime)*2){
		DoorsOpen();
		waitForTwo = false;
		waveTwo = true;
		currentWave = " Wave Two ";
		accurateTime = (waveTime*2 - Time.timeSinceLevelLoad) + (waveDelayTime*2);
		countdown = Mathf.RoundToInt(accurateTime);
		dishPointsOnce = true;
		
	}
}

function DoorsOpen () {
	doorLeft.animation.Play("doorOpen");
	doorRight.animation.Play("doorOpen2");
}

function DoorsClose () {
	doorLeft.animation.Play("doorClose");
	doorRight.animation.Play("doorClose2");
	
}

function SpawnWave1(){
	waveOneSubManager.SetActive(true);
}