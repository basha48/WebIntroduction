let firstFoot = 60;
let secondFoot = 40;
let inches = 42;
let feet = 12;

    singleDigitRandom();
    betweenRange();
    printRandom();
    calculateAreaOfRectangel(firstFoot,secondFoot);
    convertInchesToFeet(inches,feet )
    calculateRandom();


    //Random function single digit

    function singleDigitRandom(){
    let random = Math.floor(Math.random() * 10 );
    console.log("The random number is " + random);
    }

    //Random function single digit between one to six

    function betweenRange(){
    let randomNumber = Math.floor(Math.random() * 6 + 1 );
    console.log("The random number is " + randomNumber);
    }

    //Add two Random numbers Print Result

    function sum(){
        let randomNumber = Math.floor(Math.random() * 6 + 1 );
        let randomOne = Math.floor(Math.random() * 6 + 1 );
        let sum = randomNumber + randomOne;
        console.log("The sum of two Random numbers is " + sum);
    }

    //Print 5 Random Two Digit Values of Sum and Avg

    function printRandom(){
        let sum = 0;
        let avg = 0;
        for(let i = 0;i<= 5;i++){
            sum = sum + Math.floor(Math.random() * 20 + 1);
        }
        avg = sum / 5 ;
        console.log("sum of random numbers is :" + sum + "\n" + "Avg of Random is " + avg )
    }

    //calculation problems

    function convertInchesToFeet(inches,feet ){
        console.log("Result is :" + inches / feet); 
    }

    //Area of Rectangle 
    
    function calculateAreaOfRectangel(firstFoot,secondFoot){
    let FirstDimension =  firstFoot * 0.3048;
    let SecondDimension = secondFoot * 0.3048;
    let Area = FirstDimension * SecondDimension;
        console.log("Area of Rectangle is : " + Area);
    }

    //5 Random 3 digit values

    function calculateRandom(){
        let storeRandom = [];
        for(let i = 0;i<5;i++){
            let randomValue = Math.floor(Math.random()*(999-100+1)+100);
            storeRandom[i] = randomValue;
        }
        let min = Math.min(...storeRandom);
        let max = Math.max(...storeRandom);
        console.log("The Min  number is :" + min + "\n" + "The Max Number is " + max);
    }
