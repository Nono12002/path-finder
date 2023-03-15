input.onPinPressed(TouchPin.P0, function () {
    sprite.move(1)
})
input.onButtonPressed(Button.A, function () {
    sprite.turn(Direction.Left, 90)
})
input.onButtonPressed(Button.B, function () {
    radio.setGroup(1)
})
input.onPinPressed(TouchPin.P1, function () {
    sprite.move(-1)
})
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 2)
sprite.turn(Direction.Left, 90)
game.setScore(0)
game.setLife(3)
basic.forever(function () {
    game.setLife(3)
    if (game.score() == 3) {
        game.gameOver()
    }
    if (sprite.get(LedSpriteProperty.X) == 1 && sprite.get(LedSpriteProperty.Y) == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # . . #
            . # . # .
            . . # . .
            `)
    } else {
        if (sprite.get(LedSpriteProperty.X) == 1 && sprite.get(LedSpriteProperty.Y) == 1) {
            basic.showLeds(`
                . . . . .
                . # . . .
                . . . . #
                . # . # .
                . . # . .
                `)
        } else {
            if (sprite.get(LedSpriteProperty.X) == 0 && sprite.get(LedSpriteProperty.Y) == 1) {
                basic.showLeds(`
                    . . . . .
                    # . . . .
                    . . . . #
                    . # . # .
                    . . # . .
                    `)
                game.gameOver()
            } else {
                if (sprite.get(LedSpriteProperty.X) == 0 && sprite.get(LedSpriteProperty.Y) == 0) {
                    game.removeLife(1)
                    game.addScore(1)
                } else {
                    if (sprite.get(LedSpriteProperty.X) == 1 && sprite.get(LedSpriteProperty.Y) == 0) {
                        game.removeLife(1)
                        game.addScore(1)
                    } else {
                        if (sprite.get(LedSpriteProperty.X) == 2 && sprite.get(LedSpriteProperty.Y) == 0) {
                            game.removeLife(1)
                            game.addScore(1)
                        } else {
                            if (sprite.get(LedSpriteProperty.X) == 2 && sprite.get(LedSpriteProperty.Y) == 1) {
                                game.removeLife(1)
                            } else {
                                if (sprite.get(LedSpriteProperty.X) == 3 && sprite.get(LedSpriteProperty.Y) == 1) {
                                    game.removeLife(1)
                                } else {
                                    if (sprite.get(LedSpriteProperty.X) == 3 && sprite.get(LedSpriteProperty.Y) == 2) {
                                        game.removeLife(1)
                                    } else {
                                        if (sprite.get(LedSpriteProperty.X) == 3 && sprite.get(LedSpriteProperty.Y) == 3) {
                                            game.removeLife(1)
                                        } else {
                                            if (sprite.get(LedSpriteProperty.X) == 2 && sprite.get(LedSpriteProperty.Y) == 3) {
                                                game.removeLife(1)
                                            } else {
                                                if (sprite.get(LedSpriteProperty.X) == 1 && sprite.get(LedSpriteProperty.Y) == 3) {
                                                    game.removeLife(1)
                                                } else {
                                                    if (sprite.get(LedSpriteProperty.X) == 0 && sprite.get(LedSpriteProperty.Y) == 3) {
                                                        game.removeLife(1)
                                                    } else {
                                                        if (sprite.get(LedSpriteProperty.X) == 0 && sprite.get(LedSpriteProperty.Y) == 2) {
                                                            game.removeLife(1)
                                                        } else {
                                                        	
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})
