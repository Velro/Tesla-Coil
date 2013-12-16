#pragma strict
var player : GameObject;
private var playerStats : PlayerStats;
private var waveManager : WaveManager;

var paused : boolean = false; 
var upgradeMenu : boolean = false;

var alphagrey : Texture2D;
private var timePausedHit : float = 0;
private var pausedCooldown : float = 1; //without this the Input manager will register pause/unpause several times in a frame
var upgradesLabel : GUIStyle;
var upgradesTitleLabel : GUIStyle;

function Update(){
	waveManager = gameObject.GetComponent(WaveManager);
	playerStats = player.GetComponent(PlayerStats);
	if (Input.GetButtonDown("pause") && paused == false && Time.realtimeSinceStartup - timePausedHit > pausedCooldown){	//pause game
		Time.timeScale = 0;
		timePausedHit = Time.realtimeSinceStartup;
		paused = true;
		Debug.Log("pause");
	}
	if (Input.GetButtonDown("pause") && paused == true && Time.realtimeSinceStartup - timePausedHit > pausedCooldown){	//and unpause
		Time.timeScale = 1;
		timePausedHit = Time.realtimeSinceStartup;
		paused = false;
		Debug.Log("unpause");
	}

}
function OnGUI () {
	/**** Overlay ****/
	GUI.Label(Rect(10,10,100,30),"Health "+Mathf.RoundToInt(player.GetComponent(PlayerStats).health));
	GUI.Label(Rect(110,10,100,30), "Charge "+Mathf.RoundToInt(player.GetComponent(PlayerStats).charge));
	GUI.Label(Rect(Screen.width/2, 10, 200, 60), waveManager.currentWave+waveManager.countdown);
	
	/**** Upgroids ****/
	if (waveManager.waitForOne == true && paused == false){
		if(GUI.Button(Rect(5, Screen.height - 40 - 5, 80, 25), "Research")){
			upgradeMenu = !upgradeMenu;
		}
		if (upgradeMenu == true){
			GUI.DrawTexture(Rect(30,30,Screen.width-(30*2),Screen.height-(30*2)),alphagrey,ScaleMode.StretchToFill, true, 1.0f); //dim
			GUILayout.BeginArea(Rect(45,45,Screen.width-(45*2),Screen.height-(45*2)));
			GUILayout.BeginVertical();
			
			GUILayout.BeginHorizontal();
			GUILayout.Label("Research");
			GUILayout.Label("Points Available: "+playerStats.upgradePoints);
			GUILayout.EndHorizontal();
			
			GUILayout.BeginHorizontal();
			GUILayout.Label("Wizardry", upgradesTitleLabel);
			GUILayout.EndHorizontal();
			
			GUILayout.BeginHorizontal();
			GUILayout.Label("Damage halved per jump", upgradesLabel);
			GUILayout.Button("Chain Lightning 1");
			GUILayout.Button("Chain Lightning 2");
			GUILayout.Button("Chain Lightning 3");
			GUILayout.EndHorizontal();
			
			GUILayout.BeginHorizontal();
			GUILayout.Label("Total damage increased by 25%", upgradesLabel);
			GUILayout.Button("Damage 1");
			GUILayout.Button("Damage 2");
			GUILayout.Button("Damage 3");
			GUILayout.EndHorizontal();
			
			GUILayout.BeginHorizontal();
			GUILayout.Label("Range increased by 50%", upgradesLabel); //distance and angle
			GUILayout.Button("Wizard Range 1");
			GUILayout.Button("Wizard Range 2");
			GUILayout.Button("Wizard Range 3");
			GUILayout.EndHorizontal();
			
			GUILayout.BeginHorizontal();
			GUILayout.Label("Technology", upgradesTitleLabel);
			GUILayout.EndHorizontal();
			
			GUILayout.BeginHorizontal();
				GUILayout.Button("Coil shoots");
				GUILayout.BeginVertical();
					GUILayout.BeginHorizontal();
					GUILayout.Label("Range increased by 50%", upgradesLabel); //distance and angle
					GUILayout.Button("Range 1");
					GUILayout.Button("Range 2");
					GUILayout.Button("Range 3");
					GUILayout.EndHorizontal();
					
					GUILayout.BeginHorizontal();
					GUILayout.EndHorizontal();
					
					GUILayout.BeginHorizontal();
					GUILayout.Label("Frequency increased by 50%", upgradesLabel); //distance and angle
					GUILayout.Button("Frequency 1");
					GUILayout.Button("Frequency 2");
					GUILayout.Button("Frequency 3");
					GUILayout.EndHorizontal();
				GUILayout.EndVertical();
			GUILayout.EndHorizontal();
			
			GUILayout.BeginHorizontal();
			GUILayout.Label("Fitness", upgradesTitleLabel);
			GUILayout.EndHorizontal();
			
			GUILayout.BeginHorizontal();
			GUILayout.Label("Health increases by 33%", upgradesLabel); //distance and angle
			GUILayout.Button("Health 1");
			GUILayout.Button("Health 2");
			GUILayout.Button("Health 3");
			GUILayout.EndHorizontal();
			
			GUILayout.BeginHorizontal();
			GUILayout.Label("Charge increases more slowly", upgradesLabel); //distance and angle
			GUILayout.Button("Resistance 1");
			GUILayout.Button("Resistance 2");
			GUILayout.Button("Resistance 3");
			GUILayout.EndHorizontal();
					
			GUILayout.EndVertical();
			GUILayout.EndArea();
		}
	} 
	
	/**** Pause ****/
	if (paused){	//pause game
	
		GUI.DrawTexture(Rect(0,0,Screen.width,Screen.height),alphagrey,ScaleMode.StretchToFill, true, 1.0f); //dim the screen with negro-engineered filter since filters are only for Pro
		GUI.BeginGroup(Rect(Screen.width/2 - 50, Screen.height/2 - 50, 140, 140)); //GUI organization tool
		GUI.Box (Rect(0, 0, 140, 140),"Paused");
		//basic menu
		if (GUI.Button (Rect(30,20,80,30),"Main Menu")){
			Application.LoadLevel("MainMenu");
		}
		
		GUI.EndGroup();
	}
}

