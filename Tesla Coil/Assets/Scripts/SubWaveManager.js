#pragma strict
var subwaves : GameObject[];
var delays : float[];
var readyIndex : float = 0;
function Start () {

}

function Update () {
	for (var i : float; i < delays.length; i++){
		var delay : float = delays[i];
		if (delay - Time.timeSinceLevelLoad < 0){
			readyIndex = i;
		}
	}
	if (readyIndex != 0 && subwaves[readyIndex] != null){
		Instantiate (subwaves[readyIndex], transform.position, Quaternion.identity);
		Debug.Log(subwaves[readyIndex].name+" released");
		subwaves[readyIndex] = null;
		delays[readyIndex] = 0;
		readyIndex = 0;
	}
}