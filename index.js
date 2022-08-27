    let inside1El = document.getElementById("inside1")
    let inside2El = document.getElementById("inside2")
    

    let inside1count = 0
    let inside2count = 0
    
    function aone(){
        inside1count++
        inside1El.textContent = inside1count
    }
    function atwo(){
        inside1count+=2
        inside1El.textContent = inside1count
    }
    function athree(){
        inside1count+=3
        inside1El.textContent = inside1count
    }
    
    function bone(){
        inside2count++
        inside2El.textContent = inside2count
    }
    function btwo(){
        inside2count+=2
        inside2El.textContent = inside2count
    }
    function bthree(){
        inside2count+=3
        inside2El.textContent = inside2count
    }
    
    
    