// function find_burday()

	// JavaScript program to illustrate
	// calculation of no. of days between two date
	
	// // To set two dates to two variables
	// var date1 = new Date("06/30/2019");
	// var date2 = new Date("07/30/2019");
	
	// To calculate the time difference of two dates
	// var Difference_In_Time = date2.getDate() - date1.getDate();
	
	//To calculate the no. of days between two dates
	// var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    //============================================

    // function person(birthyear,birthmonth,birthdate)
    // {
    //     this.birthdate=new Date(birthyear,birthmonth,birthdate)
    // }


    function employee(ename,job,birthyear)
    {
        this.ename=ename;
        this.job=job;
        this.birthyear=birthyear;

        this.calci_age=function(birthyear)
        {
            const currentDate=new Date()
            const burdaydate=new Date(birthyear)

            var age=currentDate.getFullYear()-burdaydate.getFullYear();
            console.log(age)
        }
    }

    var emp1=new employee("arthi","devops","2002")
   console.log(emp1.ename)
   emp1.calci_age(emp1.birthyear)
   var emp2=new employee("loki","sql","2003")
emp2.calci_age(emp2.birthyear)






