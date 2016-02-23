var Tile = function (column, row, group) {
    
    this.states = {
        ZERO: 0,
        ONE: 1,
        TWO: 2,
        THREE: 3,
        FOUR: 4,
        FIVE: 5,
        SIX: 6,
        SEVEN: 7,
        EIGHT: 8,
        DEFAULT: 9,
        FLAG: 10,
        WRONG_FLAG: 11,
        UNKNOWN: 12,
        MINE: 13,
    };
	this.arrowstates = {
		ALPHA: 0,
		BETA: 1,
		DELTA: 2,
		EPSILON: 3,
		GAMMA: 4,
	}
    this.cursors = null;
    this.column = column;
    this.row = row;
    this.x = column * gameProperties.tileWidth;
    this.y = row * gameProperties.tileHeight;
	this.arrowButton = null;
    
    var tile = this;
    var currentState = this.states.DEFAULT;
    var currentValue = 9;
	var currentArrow = this.arrowstates.BETA
    var sprite = game.add.sprite(this.x, this.y, graphicAssets.tiles.name, currentState, group);
    var sprite2 = game.add.sprite(this.x, this.y, graphicAssets.arrows.name, currentArrow, group);
	

	    
    var init = function () {
		sprite.inputEnabled = true;
        sprite.input.useHandCursor = true;
        sprite.events.onInputOut.add(rollOut, this);
        sprite.events.onInputOver.add(rollOver, this);
        sprite.events.onInputDown.add(click, this);
		sprite2.visible = false;
 //       this.cursors = this.input.keyboard.createCursorKeys();
	//	this.arrowButton = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    };
    
    var rollOver = function () {
		var tween = game.add.tween(sprite);
        tween.to({x:tile.x-3, y:tile.y-3}, 100, Phaser.Easing.Exponential.easeOut);
        tween.start();
    };
    
    var rollOut = function () {
        var tween = game.add.tween(sprite);
        tween.to({x:tile.x, y:tile.y}, 100, Phaser.Easing.Exponential.easeOut);
        tween.start();
    }
    
    var click = function () {
        tile.reveal();
    }
    
    this.reveal = function () {
		if (this.getValue() == 9){
			this.setValue(0);
		}else{
			this.setValue(9);
		}
		sprite.animations.frame = currentValue;	
        //sprite.inputEnabled = false;
    };
	
	this.setValue = function (value) {
        currentValue = value;
    };
    
    this.getValue = function () {
        return currentValue;
    };
    
    init();
/*    
	var sprite = game.add.sprite(this.x, this.y, graphicAssets.tiles.name, currentState, group);
    var sprite = game.add.sprite(column * gameProperties.tileWidth, row * gameProperties.tileHeight, graphicAssets.tiles.name, currentFrame, group);
	 if (this.game.input.mouse.button != -1 || this.fomerMouse > -1) {
		 if(this.game.input.mouse.button<0 && this.fomerMouse ==2) {
			 console.log('destroySensor();');            
			 } else {                
				if (this.game.input.mouse.button == 2 && this.fomerMouse != this.game.input.mouse.button) {
                    console.log('shootSensor();');                
					} else if (this.game.input.mouse.button == 0 && this.fomerMouse !=this.game.input.mouse.button) {                    	
						console.log('shootFireball();');                
						}             }            this.fomerMouse = this.game.input.mouse.button;        }
  */  
};