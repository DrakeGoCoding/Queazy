const style = `
.add-question-btn{
    margin: 30px auto;
    width: 200px;
    height: 40px;
    background-color: white;
    border-radius: 30px;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
}
.add-question-btn-plus{
    margin: 30px 20px;
    font-size: 35px;
    display: none;
}
.add-question-btn:hover{
    cursor: pointer;
    box-shadow: 4px 4px 0 #69C9D0,-4px -4px 0 #EE1D52;
}
.add-question-btn-plus:hover{
    cursor: pointer;
    text-shadow:3px 3px 0 #69C9D0,-3px -3px 0 #EE1D52;
}

@media only screen and (max-width: 768px){
    .add-question-btn{
        display: none;
    }
    .add-question-btn-plus{
        display: block;
    }
}

`

class AddQuestionBtn extends HTMLElement{
    constructor(){
        super()
        this._shadowDom = this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this._shadowDom.innerHTML=`
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <style>
        ${style}
        </style>
        <div class="add-question-btn">Add Question</div>
        <div class="add-question-btn-plus"><i class="fa fa-plus-square"></i></div>
        `
    }
}

window.customElements.define('add-question-btn', AddQuestionBtn)