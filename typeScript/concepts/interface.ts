interface Iperson{
    fName:String
    lName:String
    greet: () => String
}

var prem: Iperson;
prem = {
    fName: "",
    lName: "",
    greet(): String {
        return "";
    }
};