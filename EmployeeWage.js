    const PART_TIME_PRESENT = 2;
    const   PART_TIME_WORK_HR = 4;
    const   FULL_TIME_PRESENT = 1;
    const   FULL_TIME_WORK_HR = 8;
    const   SALARY_PER_HR = 20;

    getAttendance();
    getPartTime();
    usingSwitchCase();
    getWagePerMonth();
    maxHrsReached();
    function getAttendance() {
		
    let checkStatus =  Math.floor(Math.random() * 10) %  2;
    if(checkStatus == 0)
        console.log("emp is absent");
    else
    console.log("emp is present");
    }

    function getPartTime() {
            
        let workHr = 0;
        let dailyWage = 0;
        let emp = Math.floor(Math.random() * 10) %  3;

        if (emp == 	FULL_TIME_PRESENT) {
        console.log("Employee is present");
        workHr = FULL_TIME_WORK_HR;
        }
        else if (emp == PART_TIME_PRESENT) {
            console.log("Employee is part timer");
            workHr = PART_TIME_WORK_HR;
        }
        else{
        console.log("Employee is absent");
        workHr = 0;
        }
        
        dailyWage= (SALARY_PER_HR * workHr);
        console.log("salary will be :" + dailyWage);
        
    }





    function maxHrsReached() {
			
        let empHr = 0;
        let total = 0;
        let days = 0;
        let workHr = 0;
        
        while(days < 21 && workHr < 100) {
        let emp =  Math.floor(Math.random() * 10) %  3;
        switch(emp) { 
            case 1:
                console.log("Employee is present");
                empHr = 8;
                break;
            case 2:
                console.log("Employee is parttimer");
                empHr = 4;
                break;
            case 3:
                console.log("Employee is absent");
                empHr = 0;
                break;
            default:
                console.log("contition doesnot exit");
        }
        
            let dailyWage = (SALARY_PER_HR * empHr);
        total = (total + dailyWage);
        days = (days+1);
        workHr = (workHr + empHr);
        }
        
        console.log("totalsalary will be: " + total);
        console.log(total);
        console.log("total working days will be: " + days);
        console.log("total working hours will be: " + workHr);
    }



    function usingSwitchCase() {
                
        let workHr = 0;
        let emp =  Math.floor(Math.random() * 10) %  3;
        switch(emp) { 
            case 1:
                console.log("Employee is present");
                workHr = FULL_TIME_WORK_HR;
                break;
            case 2:
                console.log("Employee is parttimer");
                workHr = PART_TIME_WORK_HR;
                break;
            case 3:
                console.log("Employee is absent");
                workHr = 0;
                break;
            default:
                console.log("condition does not exit");
        }
        
        let dailyWage = (SALARY_PER_HR * workHr);
        console.log("salary will be" + dailyWage);
    }


    function getWagePerMonth() {
			
        let empHr = 0;
        let total = 0;
        let days = 0;
        let workHr = 0;
        
        while( days<20 ) {
            
        let emp =  Math.floor(Math.random() * 10) %  3;
        switch(emp) { 
            case 1:
                console.log("Employee is present");
                empHr = 8;
                break;
            case 2:
                console.log("Employee is PartTime ");
                empHr = 4;
                break;
            case 3:
                console.log("Employee is Absent");
                empHr = 0;
                break;
            default:
                console.log("contition doesnot exit");
        }
        let dailyWage = (SALARY_PER_HR * empHr);
        total = (total + dailyWage);
        days = (days + 1);
        workHr = (workHr + empHr);
        }
        console.log("totalsalary will be :" + total);
    
        console.log("total working hours will be:" + workHr);
        
    }
    





