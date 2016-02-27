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
		DOWN: 0,
		LEFT: 12,
		RIGHT: 24,
		UP: 36,
	}
    this.cursors = null;
    this.column = column;
    this.row = row;
    this.x = column * gameProperties.tileWidth;
    this.y = row * gameProperties.tileHeight;
	this.arrowButton = null;
    
    var tile = this;
    var currentState = this.states.ZERO;
    var currentValue = 9;
	var currentArrow = this.arrowstates.UP
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
		var tween2 = game.add.tween(sprite2);
        tween2.to({x:tile.x-3, y:tile.y-3}, 100, Phaser.Easing.Exponential.easeOut);
        tween2.start();
    };
    
    var rollOut = function () {
        var tween = game.add.tween(sprite);
        tween.to({x:tile.x, y:tile.y}, 100, Phaser.Easing.Exponential.easeOut);
        tween.start();
		var tween2 = game.add.tween(sprite2);
        tween2.to({x:tile.x, y:tile.y}, 100, Phaser.Easing.Exponential.easeOut);
        tween2.start();
    }
    
    var click = function () {
        tile.reveal();
    }
    
    this.reveal = function () {
		if (!sprite2.visible){
			sprite2.visible = true;
			this.setValue(this.arrowstates.UP);
		}else if(this.getValue() == this.arrowstates.UP){
			this.setValue(this.arrowstates.RIGHT);
		}else if(this.getValue() == this.arrowstates.RIGHT){
			this.setValue(this.arrowstates.DOWN);
		}else if(this.getValue() == this.arrowstates.DOWN){
			this.setValue(this.arrowstates.LEFT);
		}else if(this.getValue() == this.arrowstates.LEFT){
			sprite2.visible = false;
		}
		sprite2.animations.frame = currentArrow;

	/*	
		if (this.getValue() == this.arrowstates.UP){
			this.setValue(this.arrowstates.DOWN);
		}else{
			this.setValue(this.arrowstates.UP);
		}
		sprite2.animations.frame = currentArrow;
		*/
        //sprite.inputEnabled = false;
    };
	
	this.setValue = function (value) {
        currentArrow = value;
    };
    
    this.getValue = function () {
        return currentArrow;
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