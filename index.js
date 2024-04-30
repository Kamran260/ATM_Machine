//  ATM Machine
import inquirer from "inquirer";
let password = 1234;
let accoountBalance = 10000;
let get_password = await inquirer.prompt({
    name: "PIN",
    message: "Enter a PIN",
    type: "number"
});
if (password === get_password.PIN) {
    console.log("PIN is correct");
    let choose_option = await inquirer.prompt({
        name: "Options",
        message: "Choose Any one",
        type: "list",
        choices: ['Fast Cash', 'Withdrawl', 'Balance Inquiry']
    });
    if (choose_option.Options == "Withdrawl") {
        let withdrawlAmount = await inquirer.prompt({
            name: "Wihdrawl Amount",
            message: "Enter Amount",
            type: "number",
        });
        let creditBalance = withdrawlAmount["Wihdrawl Amount"];
        if (creditBalance > accoountBalance) {
            console.log(`Sorry your withdrawal amount is greater than your account balance \n Withdrawal Amount: ${creditBalance} \n Account Balance: ${accoountBalance}`);
        }
        else if (creditBalance <= accoountBalance) {
            let remaningAmount = accoountBalance - creditBalance;
            console.log(`${creditBalance} is sucessfully withdrawal \n Your remaning balance is ${remaningAmount}`);
        }
        else {
            console.log('technical error occur');
        }
    }
    if (choose_option.Options == "Fast Cash") {
        let FastCash = await inquirer.prompt({
            name: "Fast_Cash",
            message: "Select the anount",
            type: "list",
            choices: ['500', '1000', '1500', '2000', '2500', '5000', '15000']
        });
        let numConversion = parseInt(FastCash.Fast_Cash);
        if (numConversion > accoountBalance) {
            console.log(`Sorry your withdrawal amount is greater than your account balance \n Withdrawal Amount: ${numConversion} \n Account Balance: ${accoountBalance}`);
        }
        else if (numConversion <= accoountBalance) {
            let remaningAmount = accoountBalance - numConversion;
            console.log(`${numConversion} is sucessfully withdrawal \n Your remaning balance is ${remaningAmount}`);
        }
        else {
            console.log('Fast Cash are in technical error');
        }
    }
    if (choose_option.Options == "Balance Inquiry") {
        console.log(accoountBalance);
    }
}
else {
    console.log("PIN is incorrect");
    async function startAgain() {
        while (startAgain()) {
            let wrongPass = await inquirer.prompt({
                name: "restart",
                message: "Do you want to try again",
                type: "input",
            });
        }
    }
    startAgain();
}
