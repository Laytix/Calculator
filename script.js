function getHistory(){
    return document.getElementById("history-value").innerHTML;
}
function printHistory(number){
    document.getElementById("history-value").innerHTML = number;
}
function getOutput(){
    return document.getElementById("output-value").innerHTML
}
function printOutput(number){
    if (number==""){
        document.getElementById("output-value").innerHTML = number
    }
    else{
        document.getElementById("output-value").innerHTML = getFormattedValue(number)
    }
}
function getFormattedValue(number){
    if(number == "-"){
        return ""
    }

    var n = Number(number)
    var value = n.toLocaleString("en")
    return value
}
function reverseFunctionFormat(number){

    return Number(number.replace(/,/g,''))
}

function stringEvaluator (string){
    // var equation = string.split(" ")
    // for(let i = 0; i < equation.length; i++){
    //     if (equation[i] == "+")
        
    // }

}
function evil(fn) {
    return new Function('return ' + fn)();
}
var operator = document.getElementsByClassName('operator')
for (var i = 0; i < operator.length; i++){
    operator[i].addEventListener('click', function(){
        if(this.id == "C"){
            printHistory("")
            printOutput("")
        }
        else if (this.id == "CE"){
            var output = reverseFunctionFormat(getOutput()).toString()
            if(output){
                output = output.substr(0, output.length - 1)
                printOutput(output)
            }
        }
        else{
            var history = getHistory()
            var output = getOutput()

            if ( output =="" && history != ""){
                if(isNaN(history[history.length - 1])){
                    history = history.substr(0, history.length - 1)
                }
            }
            if(output != "" || history != ""){
                output = output== ""?
                output: reverseFunctionFormat(output)

                history += output + " "
                
                if(this.id == "="){
                    

                    var result = evil(history);
                    printOutput(result)
                    printHistory("")
                }
                else{
                    history += this.id + " "
                    printHistory(history)
                    printOutput("")
                }
            }
        }
    })
}

var number = document.getElementsByClassName('number')
for (var i = 0; i < number.length; i++){
    number[i].addEventListener('click', function(){
        var output = reverseFunctionFormat(getOutput())
        if (output != "NaN"){
            output += this.id + " "
            printOutput(output)
        }

    })
}
