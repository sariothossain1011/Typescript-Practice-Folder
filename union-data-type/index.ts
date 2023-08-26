
let userID: (string | number | boolean);
userID = "100";
userID = 1001;
userID = true;



function displayUserInfo(userID: number |string){
    console.log(userID);
}

displayUserInfo("100")