class Window {
    constructor(options = {}){
        this.width = options.width || 300;
        this.height = options.height || 300;
        this.posX = options.posX || 150;
        this.posY = options.posY || 500;
        
        this.el = document.createElement('div');
        this.el.style.width = this.width + 'px';
        this.el.style.height = this.height + 'px';
        this.el.style.top = this.posX + 'px';
        this.el.style.left = this.posY + 'px';
        this.el.style.position = 'absolute';
        this.el.style.backgroundColor = 'blue';

        document.body.appendChild(this.el);
    }

    setTitle(title){
        this.el.innerText = title;
    }

}

class Calculator extends Window{
    constructor(options = {}){
        super();
        
        var content = document.createElement('div');
        content.classList.add('container');

        content.innerHTML = `<input class="display col-12 m-2">
            <div class="row col-12 mb-3 d-flex">
            <button class="number-button col-2 m-1 flex-grow-1" data-value="0">0</button>
            <button class="number-button col-2 m-1 flex-grow-1" data-value="1">1</button>
            <button class="number-button col-2 m-1 flex-grow-1" data-value="2">2</button>
            <button class="number-button col-2 m-1 flex-grow-1" data-value="3">3</button>
            </div>
            <div class="row col-12 mb-3">
            <button class="number-button col-2 m-1 flex-grow-1" data-value="4">4</button>
            <button class="number-button col-2 m-1 flex-grow-1" data-value="5">5</button>
            <button class="number-button col-2 m-1 flex-grow-1" data-value="6">6</button>
            <button class="number-button col-2 m-1 flex-grow-1" data-value="7">7</button>
            </div>
            <div class="row col-12 mb-3">
            <button class="number-button col-2 m-1 flex-grow-1" data-value="8">8</button>
            <button class="number-button col-2 m-1 flex-grow-1" data-value="9">9</button>
            <button class="number-button col-2 m-1 flex-grow-1" data-value="AC">AC</button>
            <button class="number-button col-2 m-1 flex-grow-1" data-value="=">=</button>
            </div>
            <div class="row col-12 mb-3">
            <button class="number-button col-2 m-1 flex-grow-1" data-value="+">+</button>
            <button class="number-button col-2 m-1 flex-grow-1" data-value="-">-</button>
            <button class="number-button col-2 m-1 flex-grow-1" data-value="*">*</button>
            <button class="number-button col-2 m-1 flex-grow-1" data-value="/">/</button>
            </div>
        `;
        this.el.appendChild(content);

        this.display = content.querySelector('.display');
        function buttonClick(e) {
            this.value +=  e.target.dataset.value;
        }
        content.querySelectorAll('.number-button').forEach(button =>
            button.addEventListener('click', buttonClick.bind(this.display))
        );

        // this.display = document.createElement('input');
        // this.buttons = [];
        // this.buttons.push(document.createElement('button'));

        // this.buttons[0].innerText= '0';

        // this.el.appendChild(this.display);
        // this.el.appendChild(this.buttons[0]);

        // function buttonClick(e) {
        //     this.value +=  e.target.innerText;
        // }
        // this.buttons[0].onclick = buttonClick.bind(this.display);
    }
}

let cal = new Calculator;
cal.appendChild(content);