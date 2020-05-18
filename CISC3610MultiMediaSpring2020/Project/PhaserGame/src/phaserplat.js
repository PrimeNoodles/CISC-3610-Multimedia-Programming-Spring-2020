
const game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
  preload: preload,
  create: create,
  update: update
})

let score = 0
let scoreText
let platforms
let diamonds
let cursors
let player

function preload () {

  game.load.image('sky', 'https://raw.githubusercontent.com/PrimeNoodles/CISC-3610-Multimedia-Programming-Spring-2020/master/CISC3610MultiMediaSpring2020/assets/images/sky.png')
  game.load.image('ground', 'https://raw.githubusercontent.com/PrimeNoodles/CISC-3610-Multimedia-Programming-Spring-2020/master/CISC3610MultiMediaSpring2020/assets/images/platform.png')
  game.load.image('coin', 'https://raw.githubusercontent.com/PrimeNoodles/CISC-3610-Multimedia-Programming-Spring-2020/master/CISC3610MultiMediaSpring2020/assets/sprites/coin.png')
  game.load.spritesheet('duster', 'https://raw.githubusercontent.com/PrimeNoodles/CISC-3610-Multimedia-Programming-Spring-2020/master/CISC3610MultiMediaSpring2020/assets/spritesheet/cloaker.png', 26, 27)
}

function create () {
  game.physics.startSystem(Phaser.Physics.ARCADE)

  game.add.sprite(0, 0, 'sky')

  platforms = game.add.group()
  platforms.enableBody = true
  const ground = platforms.create(0, game.world.height - 64, 'ground')

  ground.scale.setTo(2, 2)
  ground.body.immovable = true

  let ledge = platforms.create(400, 450, 'ground')
  ledge.body.immovable = true
  ledge = platforms.create(-75, 350, 'ground')
  ledge.body.immovable = true


  player = game.add.sprite(32, game.world.height - 150, 'duster')
  game.physics.arcade.enable(player)

  player.body.bounce.y = 0.2
  player.body.gravity.y = 800
  player.body.collideWorldBounds = true

  player.animations.add('left', [0, 4], 10, true)
  player.animations.add('right', [5, 8], 10, true)

  coins = game.add.group()
  coins.enableBody = true
  for (var i = 0; i < 12; i++) {
    const coin = coins.create(i * 70, 0, 'coin')
    coin.body.gravity.y = 1000
    coin.body.bounce.y = 0.3 + Math.random() * 0.2
  }

  scoreText = game.add.text(16, 16, '', { fontSize: '32px', fill: '#000' })

  cursors = game.input.keyboard.createCursorKeys()
}

function update () {
  player.body.velocity.x = 0

  game.physics.arcade.collide(player, platforms)
  game.physics.arcade.collide(coins, platforms)

  game.physics.arcade.overlap(player, coins, collectCoin, null, this)

  if (cursors.left.isDown) {
    player.body.velocity.x = -150
    player.animations.play('left')
  } else if (cursors.right.isDown) {
    player.body.velocity.x = 150
    player.animations.play('right')
  } else {
    player.animations.stop()
  }

  if (cursors.up.isDown && player.body.touching.down) {
    player.body.velocity.y = -400
  }
  if (score === 100) {
    alert('You win!')
    score = 0
  }
}

function collectCoin (player, coin) {
  coin.kill()

  score += 10
  scoreText.text = 'Score: ' + score

  //put sound here
}