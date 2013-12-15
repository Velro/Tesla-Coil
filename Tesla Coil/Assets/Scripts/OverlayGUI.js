#pragma strict
var player : GameObject;
var waveManager : WaveManager;

function Update(){
	waveManager = gameObject.GetComponent(WaveManager);
}
function OnGUI () {
	
	GUI.Label(Rect(10,10,100,30),"Health "+Mathf.RoundToInt(player.GetComponent(PlayerStats).health));
	GUI.Label(Rect(110,10,100,30), "Charge "+Mathf.RoundToInt(player.GetComponent(PlayerStats).charge));
	GUI.Label(Rect(Screen.width/2, 10, 200, 60), waveManager.currentWave+waveManager.countdown);
	
}

