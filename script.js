* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #ecf0f3;
    font-family: sans-serif;
    outline: none;
    background-color: rgba(17, 16, 16, 0.137);
}

.container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.calculator {
    background-color: #ecf0f3;
    padding: 15px;
    border-radius: 30px;
    box-shadow: inset 5px 5px 12px #ffffff, 5px 5px 12px rgba(0, 0, 0, .16);
    display: grid;
    grid-template-columns: repeat(4, 60px);
}

input {
    grid-column: span 4;
    height: 70px;
    width: 240px;
    background-color: #ecf0f3;
    box-shadow: inset -5px -5px 12px #ffffff, inset 5px 5px 12px rgba(0, 0, 0, .16);
    border: none;
    border-radius: 30px;
    color: rgba(70, 70, 70);
    font-size: 50px;
    text-align: end;
    margin: auto;
    margin-top: 40px;
    margin-bottom: 30px;
    padding: 20px;
}

button {
    height: 48px;
    width: 48px;
    background-color: #ecf0f3;
    box-shadow: -5px -5px 12px #ffffff, 5px 5px 12px rgba(0, 0, 0, .16);
    border: none;
    border-radius: 50%;
    margin: 8px;
    font-size: 16px;
}

.equal {
    width: 115px;
    border-radius: 40px;
    background-color: #ecf0f3;
    box-shadow: inset -5px -5px 12px #ffffff, 5px 5px 12px rgba(0, 0, 0, .16);
}
