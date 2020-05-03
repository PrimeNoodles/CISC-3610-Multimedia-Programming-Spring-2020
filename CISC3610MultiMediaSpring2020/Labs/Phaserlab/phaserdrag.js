var config = {
    type: Phaser.AUTO,
    width: 820,
    height: 488,
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('background', 'https://raw.githubusercontent.com/PrimeNoodles/CISC-3610-Multimedia-Programming-Spring-2020/master/CISC3610MultiMediaSpring2020/assets/images/table.png');
    this.load.image('banana', 'https://raw.githubusercontent.com/PrimeNoodles/CISC-3610-Multimedia-Programming-Spring-2020/master/CISC3610MultiMediaSpring2020/assets/sprites/banana.png');
    this.load.image('cake', 'https://raw.githubusercontent.com/PrimeNoodles/CISC-3610-Multimedia-Programming-Spring-2020/master/CISC3610MultiMediaSpring2020/assets/sprites/cake.png');
    this.load.image('cherry', 'https://raw.githubusercontent.com/PrimeNoodles/CISC-3610-Multimedia-Programming-Spring-2020/master/CISC3610MultiMediaSpring2020/assets/sprites/cherry.png');
    this.load.image('doughnut', 'https://raw.githubusercontent.com/PrimeNoodles/CISC-3610-Multimedia-Programming-Spring-2020/master/CISC3610MultiMediaSpring2020/assets/sprites/doughnut.png');
    this.load.image('grape', 'https://raw.githubusercontent.com/PrimeNoodles/CISC-3610-Multimedia-Programming-Spring-2020/master/CISC3610MultiMediaSpring2020/assets/sprites/grape.png');
    this.load.image('icecream', 'https://raw.githubusercontent.com/PrimeNoodles/CISC-3610-Multimedia-Programming-Spring-2020/master/CISC3610MultiMediaSpring2020/assets/sprites/icecream.png');
    this.load.image('lolipop', 'https://raw.githubusercontent.com/PrimeNoodles/CISC-3610-Multimedia-Programming-Spring-2020/master/CISC3610MultiMediaSpring2020/assets/sprites/lolipop.png');
    this.load.image('pancake', 'https://raw.githubusercontent.com/PrimeNoodles/CISC-3610-Multimedia-Programming-Spring-2020/master/CISC3610MultiMediaSpring2020/assets/sprites/pancake.png');
    this.load.image('peach', 'https://raw.githubusercontent.com/PrimeNoodles/CISC-3610-Multimedia-Programming-Spring-2020/master/CISC3610MultiMediaSpring2020/assets/sprites/peach.png');
    this.load.image('pudding', 'https://raw.githubusercontent.com/PrimeNoodles/CISC-3610-Multimedia-Programming-Spring-2020/master/CISC3610MultiMediaSpring2020/assets/sprites/pudding.png');
    this.load.image('strawberry', 'https://raw.githubusercontent.com/PrimeNoodles/CISC-3610-Multimedia-Programming-Spring-2020/master/CISC3610MultiMediaSpring2020/assets/sprites/strawberry.png');
    this.load.image('watermelon', 'https://raw.githubusercontent.com/PrimeNoodles/CISC-3610-Multimedia-Programming-Spring-2020/master/CISC3610MultiMediaSpring2020/assets/sprites/watermelon.png');
}

function create ()
{
    this.add.image(410, 244, 'background');
    var banana = this.add.sprite(32, 32, 'banana');
    var cake = this.add.sprite(64, 32, 'cake');
    var cherry = this.add.sprite(96, 32, 'cherry');
    var doughnut = this.add.sprite(128, 32, 'doughnut');
    var grape = this.add.sprite(160, 32, 'grape');
    var icecream = this.add.sprite(192, 32, 'icecream');
    var lolipop = this.add.sprite(224, 32, 'lolipop');
    var pancake = this.add.sprite(256, 32, 'pancake');
    var peach = this.add.sprite(288, 32, 'peach');
    var pudding = this.add.sprite(320, 32, 'pudding');
    var strawberry = this.add.sprite(352, 32, 'strawberry');
    var watermelon = this.add.sprite(384, 32, 'watermelon');

    banana.setInteractive();
    cake.setInteractive();
    cherry.setInteractive();
    doughnut.setInteractive();
    grape.setInteractive();
    icecream.setInteractive();
    lolipop.setInteractive();
    pancake.setInteractive();
    peach.setInteractive();
    pudding.setInteractive();
    strawberry.setInteractive();
    watermelon.setInteractive();

    this.input.setDraggable(banana);
    this.input.setDraggable(cake);
    this.input.setDraggable(cherry);
    this.input.setDraggable(doughnut);
    this.input.setDraggable(grape);
    this.input.setDraggable(icecream);
    this.input.setDraggable(lolipop);
    this.input.setDraggable(pancake);
    this.input.setDraggable(peach);
    this.input.setDraggable(pudding);
    this.input.setDraggable(strawberry);
    this.input.setDraggable(watermelon);

    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

        gameObject.x = dragX;
        gameObject.y = dragY;

    });
}
