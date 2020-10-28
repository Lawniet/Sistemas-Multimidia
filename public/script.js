	const config = {
					type: Phaser.AUTO,
					width: 600,
					height: 500,
          //LightGreen
					backgroundColor: '#90EE90',
					physics: {
						default: 'arcade',
						arcade: {
							gravity: {
								y: 0
							},
							debug: true
						}
					},
					scene: {
						preload: preload,
						create: create,
						update: update, 
						//render: render
					}
				};


				const game = new Phaser.Game(config);
				var snake;
				var food;
				var cursors;
				var sprite;
				var score = 0;
				var life = 3;

				//  Constantes para a direção
				var UP = 0;
				var DOWN = 1;
				var LEFT = 2;
				var RIGHT = 3;


				function preload () {
					this.load.image('food','./assets/food.png');
					this.load.image('body', './assets/body.png');
					this.load.image('head', './assets/head.png');
           this.load.image('bckgrnd', 'assets/scenario.png');
          this.load.image('stone', './assets/stone.png');
            //this.load.spritesheet('head', '.assets/dude.png',{ frameWidth: 32, frameHeight: 48 });
					//this.load.spritesheet('head', 'assets/righthead.png', 85, 85, 12);
				}

				function create () {
          this.add.image(300, 251, 'bckgrnd');
          
         /* obstacle = this.physics.add.staticGroup();
          obstacle.create(550, 30, 'stone').setScale(0.25).refreshBody();
          obstacle.create(550, 470, 'stone').setScale(0.25).refreshBody();
          obstacle.create(50, 30, 'stone').setScale(0.25).refreshBody();
          obstacle.create(50, 470, 'stone').setScale(0.25).refreshBody();*/

          var Obstacle = new Phaser.Class({

						Extends: Phaser.GameObjects.Image,
						initialize:

						function Obstacle (scene, x, y)  {
							Phaser.GameObjects.Image.call(this, scene)

							this.setTexture('stone');
							this.setScale(0.25, 0.20);
							this.setPosition(x * 16, y * 16);
							this.setOrigin(0);

							this.total = 0;

							scene.children.add(this);
						},

						eat: function () { this.total++; }
					});

					var Food = new Phaser.Class({

						Extends: Phaser.GameObjects.Image,
						initialize:

						function Food (scene, x, y)  {
							Phaser.GameObjects.Image.call(this, scene)

							this.setTexture('food');
							this.setScale(0.21, 0.21);
							this.setPosition(x * 16, y * 16);
							this.setOrigin(0);

							this.total = 0;

							scene.children.add(this);
						},

						eat: function () { this.total++; }
					});

					var Snake = new Phaser.Class({

						initialize:

						function Snake (scene, x, y) {
							this.headPosition = new Phaser.Geom.Point(x, y);

							this.body = scene.add.group();

							//sprite = this.add.sprite(40, 100, 'head');

							this.head = this.body.create(x * 16, y * 16, 'head');
							this.head = this.head.setScale(0.25, 0.25);
							this.head.setOrigin(0);
							this.alive = true;
							this.speed = 70;
							this.moveTime = 0;
							this.tail = new Phaser.Geom.Point(x, y);
							this.heading = RIGHT;
							this.direction = RIGHT;
							sprite = this.head;
						},

						update: function (time) {
							if (time >= this.moveTime) { return this.move(time); }
						},
						
						faceLeft: function () {
							if (this.direction === UP || this.direction === DOWN)
							{this.heading = LEFT;}
						},
						faceRight: function () {
							if (this.direction === UP || this.direction === DOWN)
							{this.heading = RIGHT;}
						},
						faceUp: function () {
							if (this.direction === LEFT || this.direction === RIGHT)
							{this.heading = UP;}
						},
						faceDown: function ()  {
							if (this.direction === LEFT || this.direction === RIGHT)
							{this.heading = DOWN;}
						},
						move: function (time) {
							switch (this.heading) {
								case LEFT:
									this.headPosition.x = Phaser.Math.Wrap(this.headPosition.x - 1, 0, 40);
									//this.head.angle = 0;
									break;

								case RIGHT:
									this.headPosition.x = Phaser.Math.Wrap(this.headPosition.x + 1, 0, 40);
									//this.head.angle = 0;
									break;

								case UP:
									this.headPosition.y = Phaser.Math.Wrap(this.headPosition.y - 1, 0, 30);
									//this.head.angle = 270;
									break;

								case DOWN:
									this.headPosition.y = Phaser.Math.Wrap(this.headPosition.y + 1, 0, 30);
									//this.head.angle = 270;
									break;
							}
							this.direction = this.heading;

							//  Atualizando o comprimento da cobra por inserir o elemento na cauda da lista
							Phaser.Actions.ShiftPosition(this.body.getChildren(), this.headPosition.x * 16, this.headPosition.y * 16, 1, this.tail);

							//  Verificando se houve colisão com a própria cobra 
							var hitBody = Phaser.Actions.GetFirst(this.body.getChildren(), { x: this.head.x, y: this.head.y }, 1);

							if (hitBody) {
								alert('Fim de jogo');
								console.log('dead');
								this.alive = false;
								return false;
							}
							else {
								//  Atualizando o temporizador para o próximo movimento
								this.moveTime = time + this.speed;

								return true;
							}
						},
						grow: function () {
							var newPart = this.body.create(this.tail.x, this.tail.y, 'body');
							newPart.setScale(0.25, 0.25);
							newPart.setOrigin(0);
							score += 5;
							document.getElementById("score").innerHTML = "Score: "+score;
						},
						collideWithFood: function (food) {
							if (this.head.x === food.x && this.head.y === food.y) {
								this.grow();
								food.eat();
								//  Para cada 5 itens de comida a velocidade é decrementada
								if (this.speed > 20 && food.total % 5 === 0) { this.speed -= 5; }
								
								return true;
							}
							else { return false; }
						},
            downGrow: function () {
              if(life > 0)
              {
                life -= 1;
                document.getElementById("life").innerHTML = "Lifes: "+life;
              }
              alert('Fim de jogo');
              console.log('dead');
              this.alive = false;
              return false;
						},
            	collideWithStone: function (obstacle) {
							if (this.head.x === obstacle.x && this.head.y === obstacle.y) {
								this.downGrow();
								//  Para cada 5 itens de comida a velocidade é decrementada
								if (this.speed > 20) { this.head.setOrigin(0); }
								
								return true;
							}
							else { return false; }
						},
						updateGrid: function (grid) {
							//  Removendo todas as peças do corpo para posições válidas
							this.body.children.each(function (segment) {
								var bx = segment.x / 16;
								var by = segment.y / 16;
								grid[by][bx] = false;
							});
							return grid;
						}
					});

					// Posições iniciais da cobra e comida
					food = new Food(this, 3, 4);
					snake = new Snake(this, 8, 8);
          // Obstaculos
          obstacle = new Obstacle(this, 1, 1);
          obstacle = new Obstacle(this, 30, 1);
          obstacle = new Obstacle(this, 30, 27);
          obstacle = new Obstacle(this, 1, 27);
					//  Criando os controles do jogo
					cursors = this.input.keyboard.createCursorKeys();
				}

				//function render() { this.debug.spriteInfo(snake, 32, 32); }

				function update (time, delta)
				{
					if (!snake.alive) { return; }
					// Verificando os eventos de teclas para direcionamentos 
					if (cursors.left.isDown) { snake.faceLeft(); }
					else if (cursors.right.isDown) { snake.faceRight(); }
					else if (cursors.up.isDown) { snake.faceUp(); }
					else if (cursors.down.isDown) { snake.faceDown(); }
					if (snake.update(time)) {
						//  A cada atualização de frame precisamos verificar a colisão com a camida
						if (snake.collideWithFood(food)) { repositionFood(); }
            if (snake.collideWithStone(obstacle)) { }
					}
				}

				/**
				* Metodo para verificação de área, inicialmente consideramos todos os pontos
				* (x,y) disponível para guadarmos a comida.
				* @method repositionFood
				* @return {boolean} verdadeiro se o grid puder ser utilizado, falso do contrário 
				**/
				function repositionFood ()
				{
					/* Primeiro consideramos todas as posições da tela,
					 *  mas utilizamos apenas as áreas válidas
					 *  para repor a comida */
					var testGrid = [];

					for (var y = 0; y < 35; y++) {
						testGrid[y] = [];

						for (var x = 0; x < 45; x++) {
							testGrid[y][x] = true;
						}
					}

					snake.updateGrid(testGrid);

					//  Para eliminar falsas posições
					var validLocations = [];

					for (var y = 0; y < 25; y++) {
						for (var x = 0; x < 35; x++) {
							if (testGrid[y][x] === true) {
								//  Testando a validade da posição
								validLocations.push({ x: x, y: y });
							}
						}
					}
					if (validLocations.length > 0) {
						//  Usando o metodo RND para gerar posições aleatórias para a comida
						var pos = Phaser.Math.RND.pick(validLocations);

						//  Setado o valor
						food.setPosition(pos.x * 16, pos.y * 16);

						return true;
					} else
					{ return false; }
				}
