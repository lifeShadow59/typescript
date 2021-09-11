{
    // let myInformation = (firstName: string, lastName: string, age: number) => {
    //     return [firstName, lastName, age];
    // }

    // console.log(myInformation("Abhishek", "Dhanani", 22));


    // interface

    interface MyInformationInterface {
        firstName: string, lastName: string, age: number
    }

    let myInformation = (myInfo:MyInformationInterface): MyInformationInterface => {return myInfo;}

    let myInfo:MyInformationInterface = myInformation({
        firstName : "Abhishek",
        lastName : "Dhanani",
        age: 22,
    });

    console.log("My First name = "+ myInfo.firstName);
    console.log("My Last name = "+ myInfo.lastName);
    console.log("My Age = "+ myInfo.age);



}