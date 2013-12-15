#pragma strict
var player : GameObject;


function OnGUI () {
	GUI.Label(Rect(10,10,100,30),"Health "+player.GetComponent(Stats).health);
	GUI.Label(Rect(110,10,100,30), "Charge "+player.GetComponent(PlayerStats).charge);
}