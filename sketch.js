var galaxy, galaxyImage
var player, playerImage
var alien1Img, alien2Img, alien3Img
var bulletImg

var alien1Group, alien2Group
var bulletsGroup

var isAlien1Allowed = true

var gameState = "play"

var score = 0

var isAlien2Allowed = false

function preload(){
  playerImage = loadImage("./assets/human.png")
  galaxyImage = loadImage("./assets/bg1.jpg")
  bulletImg = loadImage("./assets/bullet.png")
  alien1Img = loadImage("./assets/alien1.png")
  alien2Img = loadImage("./assets/alien2.png")
  alien3Img = loadImage("./assets/alien3.png")
}

function setup(){

  createCanvas(400, 800)

  galaxy = createSprite(width/2, height/2, width, height)
  galaxy.addImage(galaxyImage)
  galaxy.velocityY = 3

  player = createSprite(200, 700, 10, 10)
  player.addImage(playerImage)
  player.scale = 0.3

  alien1Group = createGroup()
  alien2Group = createGroup()
  bulletsGroup = createGroup()
  


}

function draw(){
  
  background("white")

  if(gameState === "play"){
    gamePlay()
  }
  else{

  }

  drawSprites()

  textSize(30)
  fill("red")
  text("Score:" + score, 10, 780)
}

function gamePlay(){

  if(galaxy.y > 630){

    galaxy.y = height/2
  }

  if(keyDown("left")){
    player.x = player.x - 5
  }

  if(keyDown("right")){
    player.x = player.x + 5
  }

  if(keyDown("space")){
    spawnBullets()
  }

  spawnAlien_A()
  spawnAlien_B()

  if(player.x > 350){
    player.x = 350
  }

  if(player.x < 50){
    player.x = 50
  }

  bulletsGroup.overlap(alien1Group, (collector, collected)=>{
    score = score + 50
    collector.remove()
    collected.remove()
  })

  if(!alien1Group[0]){
    isAlien2Allowed = true
  }
}

function spawnBullets(){

  if(frameCount%15 === 0){
    var bullet = createSprite(player.x, player.y, 10, 10)
    bullet.addImage(bulletImg)
    bullet.scale = 0.3
    bullet.depth = player.depth
    player.depth += 1
    bullet.velocityY = -8
    bullet.lifetime = 100
    bulletsGroup.add(bullet)
    bullet.debug = true 
    bullet.setCollider("rectangle", 0, 0, 50, 190)
  }
}

function spawnAlien_A(){
  if(isAlien1Allowed){
    var alien_1 = createSprite(70, 100, 10, 10)
    alien_1.addImage(alien1Img)
    alien_1.scale = 0.22

    var alien_2 = createSprite(195, 100, 10, 10)
    alien_2.addImage(alien1Img)
    alien_2.scale = 0.22

    var alien_3 = createSprite(320, 100, 10, 10)
    alien_3.addImage(alien1Img)
    alien_3.scale = 0.22

    var alien_4 = createSprite(320, 220, 10, 10)
    alien_4.addImage(alien1Img)
    alien_4.scale = 0.22

    var alien_5 = createSprite(195, 220, 10, 10)
    alien_5.addImage(alien1Img)
    alien_5.scale = 0.22

    var alien_6 = createSprite(70, 220, 10, 10)
    alien_6.addImage(alien1Img)
    alien_6.scale = 0.22

    alien_1.debug = true
    alien_1.setCollider("rectangle", 0, 0, alien_1.width - 175, alien_1.height - 20)
    alien_2.debug = true
    alien_2.setCollider("rectangle", 0, 0, alien_2.width - 175, alien_2.height - 20)
    alien_3.debug = true
    alien_3.setCollider("rectangle", 0, 0, alien_3.width - 175, alien_3.height - 20)
    alien_4.debug = true
    alien_4.setCollider("rectangle", 0, 0, alien_4.width - 175, alien_4.height - 20)
    alien_5.debug = true
    alien_5.setCollider("rectangle", 0, 0, alien_5.width - 175, alien_5.height - 20)
    alien_6.debug = true
    alien_6.setCollider("rectangle", 0, 0, alien_6.width - 175, alien_6.height - 20)

    alien1Group.add(alien_1)
    alien1Group.add(alien_2)
    alien1Group.add(alien_3)
    alien1Group.add(alien_4)
    alien1Group.add(alien_5)
    alien1Group.add(alien_6)

    isAlien1Allowed = false
  }
}

function spawnAlien_B(){
  if(isAlien2Allowed){

    var alien_1 = createSprite(70, 100, 10, 10)
    alien_1.addImage(alien2Img)
    alien_1.scale = 0.5
    spawnEnemyBullets(70, 100)

    var alien_2 = createSprite(195, 100, 10, 10)
    alien_2.addImage(alien2Img)
    alien_2.scale = 0.5

    var alien_3 = createSprite(320, 100, 10, 10)
    alien_3.addImage(alien2Img)
    alien_3.scale = 0.5

    var alien_4 = createSprite(320, 220, 10, 10)
    alien_4.addImage(alien2Img)
    alien_4.scale = 0.5

    var alien_5 = createSprite(195, 220, 10, 10)
    alien_5.addImage(alien2Img)
    alien_5.scale = 0.5

    var alien_6 = createSprite(70, 220, 10, 10)
    alien_6.addImage(alien2Img)
    alien_6.scale = 0.5

    alien_1.debug = true
    alien_1.setCollider("rectangle", 0, 0, alien_1.width - 100, alien_1.height - 40)
    alien_2.debug = true
    alien_2.setCollider("rectangle", 0, 0, alien_2.width - 100, alien_2.height - 40)
    alien_3.debug = true
    alien_3.setCollider("rectangle", 0, 0, alien_3.width - 100, alien_3.height - 40)
    alien_4.debug = true
    alien_4.setCollider("rectangle", 0, 0, alien_4.width - 100, alien_4.height - 40)
    alien_5.debug = true
    alien_5.setCollider("rectangle", 0, 0, alien_5.width - 100, alien_5.height - 40)
    alien_6.debug = true
    alien_6.setCollider("rectangle", 0, 0, alien_6.width - 100, alien_6.height - 40)

    alien2Group.add(alien_1)
    alien2Group.add(alien_2)
    alien2Group.add(alien_3)
    alien2Group.add(alien_4)
    alien2Group.add(alien_5)
    alien2Group.add(alien_6)

    isAlien2Allowed = false
  }
}

function spawnEnemyBullets(x, y){

  if(frameCount%20 === 0){
    var enemyBullet = createSprite(x, y, 10, 30)
    enemyBullet.shapeColor = "yellow"
    enemyBullet.velocityY = 8
  }
}




// random enemy ships are supposed to spawn the bullets
// create an enemy bullet group, add all the enemy bullets as a member, provide the lifetime
// write down the condition if entire enemy bullet group is touching the play, game will be in the end state, and display game over text and provide restart buton 
