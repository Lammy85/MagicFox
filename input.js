export class InputHandler {
    constructor(game) {
        this.game = game;
        this.keys = [];
        window.addEventListener('keydown', e => {
            if ((e.key === 'ArrowDown' ||
                e.key === 'ArrowUp' ||
                e.key === 'ArrowLeft' ||
                e.key === 'ArrowRight' ||
                (e.key === 'Enter' && !this.game.startscreen)
            ) && this.keys.indexOf(e.key) === -1) {
                this.keys.push(e.key);
                e.preventDefault();
            } else if (e.key === 'd') this.game.debug = !this.game.debug;
            else if (e.key === 'p') this.game.pause = !this.game.pause;
            else if (e.key === 'r') this.game.restartGame();
            else if (e.key === 'Enter' && this.game.startscreen) this.game.startscreen = false;
            
        });
        window.addEventListener('keyup', e => {
            if (e.key === 'ArrowDown' ||
                e.key === 'ArrowUp' ||
                e.key === 'ArrowLeft' ||
                e.key === 'ArrowRight' ||
                e.key === 'Enter') {
                this.keys.splice(this.keys.indexOf(e.key), 1);
            }
        });
    }
}