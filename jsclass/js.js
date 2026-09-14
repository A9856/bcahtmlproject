// ==========================================
// 1. GLOBAL SCOPE
// ==========================================
// Global variable
// Isko program ke almost kisi bhi scope se access kar sakte hain.
let globalVar = "I am Global";
function myFunction() {
    // ==========================================
    // 2. FUNCTION SCOPE
    // ==========================================
    // Ye variable sirf is function ke andar available hai.
    let functionVar = "I am Function Variable";
    console.log(globalVar);     //  Global variable access
    console.log(functionVar);   //  Function variable access
   // ==========================================
    // 3. BLOCK SCOPE
    // ==========================================
    if (true) {
        // Ye BLOCK variable hai.
        // let/const block-scoped hote hain.
        let blockVar = "I am Block Variable";
        console.log(globalVar);     //  Access
        console.log(functionVar);   //  Access
        console.log(blockVar);       //  Access
    }
    //  Error
    // blockVar sirf if { } block ke andar available tha.
    // console.log(blockVar);
}
// Function call
myFunction();
// ==========================================
// GLOBAL SCOPE
// ==========================================
console.log(globalVar);       //  Access
//  Error
// functionVar function ke andar bana tha.
// console.log(functionVar);
//  Error
// blockVar if block ke andar bana tha.
// console.log(blockVar);