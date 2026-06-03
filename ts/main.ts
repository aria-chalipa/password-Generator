let passwordInputTag : HTMLInputElement | null = document.querySelector('#passInput')
const place :Element | null = document.querySelector('#result')

interface  generatePss {
    (char: string | undefined) : string;
}
let generatePssword : generatePss =(char) =>  {
    const num : number[] = [0,1,2,3,4,5,6,7,8,9];
    const UpperLetter: string[] = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    const LowerLetter: string[] = UpperLetter.map(a => a.toLowerCase());
    const character: string[] = ["~","!","@","#","$","%","^","&","*","(",")","_","|","/"]
    let passWord: string = '';

    for (let i = 0; i < Number(char); i++) {
        const randomIndex = Math.floor(Math.random() * (num.length + UpperLetter.length + LowerLetter.length + character.length));
        let chosenChar: string;

        // Determine which type of character to choose based on the random index
        if (randomIndex < num.length) {
            chosenChar = num[randomIndex].toString();
        } else if (randomIndex < num.length + UpperLetter.length) {
            chosenChar = UpperLetter[randomIndex - num.length];
        } else if (randomIndex < num.length + UpperLetter.length + LowerLetter.length) {
            chosenChar = LowerLetter[randomIndex - (num.length + UpperLetter.length)];
        } else {
            chosenChar = character[randomIndex - (num.length + UpperLetter.length + LowerLetter.length)];
        }

        // Append the chosen character to the password
        passWord += chosenChar;
    }
    Showresult(passWord)
    return passWord;
}


let Showresult = (result:string) => {
    const show= document.createElement('p')
    show.className='text-base/7'
    show.className='text-lg'
    show.className='text-white'
    show.innerText = ` ${result}`
    place?.appendChild(show)
}

let btn : Element | null = document.querySelector('#generateBtn');
// @ts-ignore
btn.addEventListener('click', (e) => {
    e.preventDefault()
    // @ts-ignore
    while (place?.children.length > 0) {
        place?.children[0].remove();
    }

    const char = passwordInputTag?.value;
    if (char !== undefined && char !== "") {
        generatePssword(char);
    }
})
let CopyFunc = () => {
    const place: Element | null = document.querySelector('#result');
    if (place?.children.length === 0) {
        alert('there is nothing to copy!');
    } else {
        // @ts-ignore
        if ("children" in place) {
            navigator.clipboard.writeText(<string>place.children[0].textContent)
                .then(() => alert("Copied!"))
                .catch(err => console.error(err));
        }
    }
}




