#pragma strict


function Update () {
	if (gameObject.GetComponent(OverlayGUI).paused == true || gameObject.GetComponent(OverlayGUI).upgradeMenu){
		gameObject.GetComponent(MouseLook).enabled = false;
		Camera.main.GetComponent(MouseLook).enabled = false;
	} else {
		gameObject.GetComponent(MouseLook).enabled = true;
		Camera.main.GetComponent(MouseLook).enabled = true;
	}
}