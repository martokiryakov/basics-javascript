
function areaOfFigures(input){
    let figure = input[0];
    let area=0;
    if (figure==="square"){
        let side = Number(input[1]);
        area = side*side;
    }else if (figure==="rectangle"){
        let sideA= Number(input[1]);
        let sideB= Number(input[2]);
        area = sideA*sideB;
    }else if (figure==="circle"){
        let radius = Number(input[1]);
        area = Math.PI*radius*radius
    }else if (figure==="triangle"){
        let side1=Number(input[1]);
        let height=Number(input[2]);
        area = (side1*height)*0.5
    }
    console.log(area.toFixed(3));
    }
areaOfFigures(["square", "5"])
