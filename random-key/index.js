/**
 *
 * Created by lizeyan on 2017/7/12.
 */

let lowercase = [], uppercase = [], numebrs = [];
let c1 = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=', '+' , ',', '.', '~', '`'];
let c2 = ['\'', '\"', '/', '\\'];
for (let i = 0; i < 26; ++i)
{
    lowercase.push(String.fromCharCode('a'.charCodeAt(0) + i));
    uppercase.push(String.fromCharCode('A'.charCodeAt(0) + i));
}
for (let i = 0; i < 10; ++i)
{
    numebrs.push(String.fromCharCode('0'.charCodeAt(0) + i));
}


function random_string(size, dict) {
    let result = "";
    for (let i = 0; i < size; ++i) {
        result += (dict[Math.floor(Math.random() * dict.length)]);
    }
    return result;
}

let line_number = 20;
let each_line = 144;
function resample(clear) {
    let dict = [];
    if (document.getElementById("lowercase").checked)
        dict = dict.concat(lowercase);
    if (document.getElementById("uppercase").checked)
        dict = dict.concat(uppercase);
    if (document.getElementById("numbers").checked)
        dict = dict.concat(numebrs);
    if (document.getElementById("c1").checked)
        dict = dict.concat(c1);
    if (document.getElementById("c2").checked)
        dict = dict.concat(c2);
    let dom = document.getElementById("random-key");
    console.log(dom.length);
    if (clear)
        dom.innerHTML = "";
    if (dict.length === 0)
    {
        dom.innerHTML = "Please choose at least one."
    }
    else {
        for (let i = 0; i < line_number; ++i)
            dom.innerHTML += random_string(each_line, dict) + "<br/>";
    }
}
resample();
