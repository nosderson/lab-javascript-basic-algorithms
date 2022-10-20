// @ts-check

function interaction1(driver, navigator) {
    return [
        `The driver's name is ${driver}`,
        `The navigator's name is ${navigator}`
    ]
}

function interaction2(driver, navigator) {
    if (driver.length > navigator.length) return (`${driver} has the longest name, it has ${driver.length} characters`)
    else if (navigator.length > driver.length) return (`${navigator} has the longest name, it has ${navigator.length} characters`)
    else return (`Wow, you both have equally long names, ${driver.length} characters`)
}

function interaction3(idriver, inavigator) {

    return ([colocarEspacos(idriver), reverso(idriver), ordemAlfabetica(idriver, inavigator)])

    function colocarEspacos(driver) {
        let copiaDriver = "";
        for (let i = 0; i < driver.length - 1; i++) {
            copiaDriver += driver[i] + " "
        }
        copiaDriver += driver[driver.length - 1]
        return copiaDriver.toUpperCase();
    }

    function reverso(driver) {
        let copiaDriver = "";
        for (let i = driver.length - 1; i >= 0; i--)
            copiaDriver += driver[i];
        return copiaDriver;
    }

    function ordemAlfabetica(driver, navigator) {
        const ordem = driver.localeCompare(navigator);
        console.log(navigator);
        if (ordem < 0) return (`${driver} goes first`)
        else if (ordem > 0) return (`Yo, ${navigator} goes first definitely`)
        else return ("What?! You both have the same name?")
    }
}

function bonus1(iparagrafo) {

    return ([contarPalavras(iparagrafo), buscarPalavras_et(iparagrafo)])

    function contarPalavras(paragrafo) {
        let Quantidadepalavras = 1;
        for (let i = 1; i < paragrafo.length - 1; i++)
            if ((paragrafo[i] === " ") && (paragrafo[i + 1] !== " "))
                Quantidadepalavras++;

        return Quantidadepalavras;
    }

    function buscarPalavras_et(paragrafo) { //talvez precise ser corrigida, não busca et no inicio da frase, nem no fim, nem se vier seguido de caracteres de pontuação.
        let QuantidadePalavrasEncontradas = 0;
        for (let i = 1; i < paragrafo.length - 2; i++)
            if ((paragrafo[i - 1] === " ") && (paragrafo[i] === "e") && (paragrafo[i + 1] === "t") && paragrafo[i + 2] == " ")
                QuantidadePalavrasEncontradas++;

        return QuantidadePalavrasEncontradas;
    }
}

function bonus2(iphraseToCheck) {
    const removerCaracteres = ["!", "?", "'", ","]
    let isPalindrome = true;
    let inicio = 0;
    let fim = iphraseToCheck.length - 1;
    for (let i = 0; i < iphraseToCheck.length - 1 && isPalindrome; i++) {
        for (let j = 0; j < removerCaracteres.length; j++) {
            if (iphraseToCheck[inicio] === removerCaracteres[j])
                inicio++;
            if (iphraseToCheck[fim] === removerCaracteres[j])
                fim--;
        }
        if (iphraseToCheck[inicio].toUpperCase() !== (iphraseToCheck[fim].toUpperCase()))
            isPalindrome = false;
    }
    return (`${iphraseToCheck} palindrome is ${isPalindrome}`);
}

const hacker1 = "Anderson"; //driver
const hacker2 = "Alices"; //navigator
const phraseToCheck = [
    "A man, a plan, a canal, Panama!",
    "Amor, Roma",
    "race car",
    "stack cats",
    "step on no pets",
    "taco cat",
    "put it up",
    "Was it a car or a cat I saw?",
    "No 'x' in Nixon",
    "Caixa",
    "Omo",
    "OmmO"
]

const paragrafo =
    "Duis eget auctor neque, in suscipit ante. Praesent condimentum elit a sapien porta ultricies. Aliquam non sodales nibh. Donec est enim, porttitor vel leo ut, porta vulputate arcu. Morbi dignissim enim vitae consectetur faucibus. Sed nisi tellus, consequat in ullamcorper vitae, sagittis eu orci. Mauris fringilla justo nibh, sit amet suscipit ligula pharetra eleifend. Sed ullamcorper luctus nunc. Duis quis turpis rutrum, interdum ex dapibus, sagittis purus. \
    Aenean sit amet nulla dui. Sed a velit id eros tincidunt viverra. Donec ac felis quis augue ullamcorper placerat ac sed dolor. Aliquam condimentum, ante at eleifend sodales, erat ex dignissim nunc, a faucibus quam nibh a magna. Fusce quis porttitor nibh. Integer ullamcorper enim quis lectus lobortis, in rutrum diam varius. In et semper nibh, eu efficitur urna. \
    Mauris neque orci, tempus sit amet mi in, finibus varius leo. Curabitur cursus volutpat posuere. Suspendisse vitae nibh eu lectus condimentum dignissim sed eget augue. Morbi elementum felis a pulvinar varius. Aenean ullamcorper eget lacus non sollicitudin. Fusce quis volutpat odio. Duis id tempus massa, at dictum sem."

console.log(interaction1(hacker1, hacker2))
console.log(interaction2(hacker1, hacker2))
console.log(interaction3(hacker1, hacker2))
console.log(`${bonus1(paragrafo)[0]} palavras tem o paragrafo. Foi encontrado ${bonus1(paragrafo)[1]} palavra et.`)
console.log(bonus2(phraseToCheck[8]));
