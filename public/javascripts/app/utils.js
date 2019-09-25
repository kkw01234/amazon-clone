
const insertSentenceHTML = (errordiv, sentence, color = "black")=>{
    errordiv.innerHTML = sentence;
    errordiv.style.color = color;
}

/**
 * 
 * @param {String} value 
 * @param {Element} element
 * @return {Element} Element
 */
const $ = (value, element = document)=>{
    
    return element.querySelector(value);
}
const $$ = (value, element = document)=>{
    return element.querySelectorAll(value);
}

export {
    insertSentenceHTML,
    $,
    $$
}