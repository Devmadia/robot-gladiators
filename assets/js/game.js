// Game States
// "WIN" - Player robot has defeated all enemy robots
//    * Fight all enemy robots
//    * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

// Multiple enemy robots defined
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// Details enemies by name
for(var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index");
}

// create function to fight enemy robots
var fight = function(enemyName) {
    // repeat and execute as long as the enemy robot is alive if player is also alive
    while (enemyHealth  > 0 && playerHealth > 0) {
    
    // asks for user input if they will fight or skip battle
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    // if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
    
        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            break;
            } 
            
            else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
    
        // remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );
    
        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            //while (enemyHealth  > 0 && playerHealth > 0); 
            break;

            } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }

        // if player choses to skip
        } else if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm user wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes (true), leave fight
            if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney);
            }
            // if no (false), ask question again by running fight() again
            else {
            fight();
            } 
            
            // this will prompt user to enter a valid option, but the program continues running at this point regardless
            } else {
                window.alert("You need to pick a valid option. Try again!");
            }
        }
    };

    for (var i = 0; i < enemyNames.length; i++) {
        var pickedEnemyName = enemyNames[i];
        enemyHealth = 50;
        fight(pickedEnemyName);
    }

    // execute function
    for(var i = 0; i < enemyNames.length; i++) {
        fight(enemyNames[i]);
    }