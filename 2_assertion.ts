{
    let myName;
    myName = "Abhishek Dhanani";

    console.log(myName);

    let myNameLengthWithAngleBracket: number = (<string> myName).length;
    console.log(myNameLengthWithAngleBracket);

    let myNameLengthWithAsKeyWord = (myName as string).length;
    console.log(myNameLengthWithAsKeyWord);



}