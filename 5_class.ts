{
    class myInformationClass {
        myName: string;
        myAge: number;
        constructor(myName: string, myAge: number) {
            console.log("constructor running");
            console.log("Constructor -> My Name Is " + myName);
            console.log("Constructor -> My Ager Is " + myAge);
            console.log("constructor close");
        }
        printMyInformation() {
            if (this.myName)
                console.log("My Name Is " + this.myName);
            if (this.myAge)
                console.log("My Ager Is " + this.myAge);

        }
    }


    let myInfo = new myInformationClass("Abhishek", 20);
    myInfo.myAge = 22;
    myInfo.printMyInformation();
}