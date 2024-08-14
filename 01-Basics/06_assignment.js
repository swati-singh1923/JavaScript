/* Write a javascript function to extract unique character of string.
example str = "abcdabcdefgggh";
uniqueStr = "abcdefgh"; */

let str = "abcdabcdefgggh";

function uniqueString(str){
    let ans = " ";
    for(let i=0; i<str.lenght; i++){
        let curChar = str[i];
        if(ans.indexOf(curChar) == -1){
            ans += curChar;
        }
    }
    console.log(ans);
}

uniqueString(str);