/*
OK So, this is the game file that contains the actual thingy that runs the game.  I'll go into greater detail here later.  Yeah so this is Drew, it's February 22, 2016 (Tony's birthday!!) and this is a work in progress.
*/

//in gameProperties a number of different 
var gameProperties = {
    screenWidth: 640,
    screenHeight: 480,
    
    tileWidth: 32,
    tileHeight: 32,
        
    boardWidth: 9,
    boardHeight: 9,
    
    totalMines: 10,
};

var states = {
    game: "game",
};

var graphicAssets = {
    tiles:{URL:'assets/tiles.png', name:'tiles', frames:14},
	arrows:{URL:'assets/neon_arrow_sign.png', name:'arrows', frames:96}
};

var gameState = function(game){
    this.boardTop;
    this.boardLeft;
    this.board;
};

gameState.prototype = {
    
    init: function () {
        this.boardTop = (gameProperties.screenHeight - (gameProperties.tileHeight * gameProperties.boardHeight)) * 0.5;
        this.boardLeft = (gameProperties.screenWidth - (gameProperties.tileWidth * gameProperties.boardWidth)) * 0.5;
    },
    
    preload: function () {
        game.load.spritesheet(graphicAssets.tiles.name, graphicAssets.tiles.URL, gameProperties.tileWidth, gameProperties.tileHeight, graphicAssets.tiles.frames);
		game.load.spritesheet(graphicAssets.arrows.name, graphicAssets.arrows.URL, gameProperties.tileWidth, gameProperties.tileHeight, graphicAssets.arrows.frames);
    },
    
    create: function () {
        this.initBoard();
    },

    update: function () {
        
    },
    
    initBoard: function () {
        this.board = new Board(gameProperties.boardWidth, gameProperties.boardHeight);
		console.log(this.boardLeft)
        this.board.moveTo(this.boardLeft, this.boardTop);
    },
    
    revealTile: function () {
        
    },
    
    flagTile: function () {
        
    },
    
};

var game = new Phaser.Game(gameProperties.screenWidth, gameProperties.screenHeight, Phaser.AUTO, 'gameDiv');
game.state.add(states.game, gameState);
game.state.start(states.game);