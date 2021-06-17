class Window {
    constructor(options = {}){
        this.width = options.width || 300;
        this.height = options.height || 320;
        this.posX = options.posX || 150;
        this.posY = options.posY || 500;
        
        this.el = document.createElement('div');
        this.el.style.width = this.width + 'px';
        this.el.style.height = this.height + 'px';
        this.el.style.top = this.posX + 'px';
        this.el.style.left = this.posY + 'px';
        this.el.style.position = 'absolute';
        this.el.style.backgroundColor = 'lightblue';
        this.el.style.border = "thick solid #0000FF";

        document.body.appendChild(this.el);
    }

    setTitle(title){
        this.el.innerText = title;
    }

}

class Calculator extends Window{
    constructor(options = {}){
        super();
        
        let content = document.createElement('div');
        content.classList.add('container');

        content.innerHTML = `<input class="display col-12 mt-2 mb-2">
        <div class="container" id="main">
            <div class="row col-12 mb-3 d-flex">
            <button class="number-button col-2 m-1 flex-grow-1" data-value="1">1</button>
            <button class="number-button col-2 m-1 flex-grow-1" data-value="2">2</button>
            <button class="number-button col-2 m-1 flex-grow-1" data-value="3">3</button>
            <button class="number-button col-2 m-1 flex-grow-1" data-value="+">+</button>
            </div>
            <div class="row col-12 mb-3">
            <button class="number-button col-2 m-1 flex-grow-1" data-value="4">4</button>
            <button class="number-button col-2 m-1 flex-grow-1" data-value="5">5</button>
            <button class="number-button col-2 m-1 flex-grow-1" data-value="6">6</button>
            <button class="number-button col-2 m-1 flex-grow-1" data-value="-">-</button>
            </div>
            <div class="row col-12 mb-3">
            <button class="number-button col-2 m-1 flex-grow-1" data-value="7">7</button>
            <button class="number-button col-2 m-1 flex-grow-1" data-value="8">8</button>
            <button class="number-button col-2 m-1 flex-grow-1" data-value="9">9</button>
            <button class="number-button col-2 m-1 flex-grow-1" data-value="*">*</button>
            </div>
            <div class="row col-12 mb-3">
            <button class="number-button col-2 m-1 flex-grow-1" data-value="0">0</button>
            <button class="number-button col-2 m-1 flex-grow-1" data-value=".">.</button>
            <button class="number-button col-2 m-1 flex-grow-1" data-value="/">/</button>
            <button class="result col-2 m-1 flex-grow-1" data-value="=">=</button>
            
            </div>
            <div class="row col-12 mb-3">
            <button class="clear col-2 m-1 flex-grow-1" data-value="clear">Clear</button>
            </div>

        </div>
        `;
        this.el.appendChild(content);

        this.display = content.querySelector('.display');
        function buttonClick(e) {
            this.value += e.target.dataset.value;
        }
        content.querySelectorAll('.number-button').forEach(button =>
            button.addEventListener('click', buttonClick.bind(this.display))
        );

    
        let res = document.querySelector(".result");
        res.addEventListener("click", calculateResult);


        function calculateResult() {
            let result = eval(document.querySelector('.display').value);
            document.querySelector('.display').value = result;
        }

        let cl = document.querySelector(".clear");
        cl.addEventListener("click", clean);

        function clean(){
            document.querySelector('.display').value = '';
        }

        
    }
}

    let cal = new Calculator;
    cal.appendChild(content);

