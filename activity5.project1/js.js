class Window {

    constructor(options = {}) {

        this.width = options.width || 150;
        this.height = options.height || 150;
        this.posX = options.posX || 150;
        this.posY = options.posY || 150;

        this.el = document.createElement('div');
        this.el.style.width = this.width + 'px';
        this.el.style.height = this.height + 'px';
        this.el.style.top = this.posX + 'px';
        this.el.style.left = this.posY + 'px';
        this.el.style.position = 'absolute';
        this.el.style.backgroundColor = 'blue';

        document.body.appendChild(this.el);

    }

    setTitle() {

        this.el.innerText = 'title';

    }

    setContent() {
        this.el.innerText = 'contenido';
    }

}

class Calculator extends Window {
    constructor(options = {}) {
        super();
        this.display = document.createElement('input');
        this.buttons = [];


    }
}