function max(n1, n2) {
    'use strict';
    // Définir une fonction max() qui prend en paramètres deux nombres n1 et n2 et retourne le plus grand d'entre eux. Utiliser la logique conditionnelle if
    if (n1 > n2) {
      return n1;
    } else {
      return n2;
    }
}

function maxOfThree(n1, n2, n3) {
    'use strict';
    // Définir une fonction maxOfThree() qui prend en paramètres 3 nombres n1, n2 et n3 et retourne le plus grand d'entre eux. Utiliser la méthode max()
    var maxn1n2 = max(n1, n2);
    return max(maxn1n2, n3);
}

function maxOfArray(array) {
    'use strict';
    // Définir une fonction maxOfArray() qui prend en paramètre un tableau de nombres et retourne le plus grand d'entre eux. Utiliser la récursion
    switch (array.length) {
        case 1: return array[0];
        case 2: return max(array[0], array[1]);
        default:
            var first = array.shift();
            return max(first, maxOfArray(array));
    }
}

function times(array) {
    'use strict';
    // Définir une fonction times() qui prend en paramètre un tableau de nombres entiers et retourne le produit des nombres qui le composent
    var result = 1;
    for (var i = 0; i < array.length; i++) {
        result = result * array[i];
    }
    return result;
}

function fact(n) {
    'use strict';
    // Définir une fonction fact() qui prend en paramètre un nombre entier i et retourne le produit des entiers de 1 jusqu'à lui compris
    var results = [];
    for (var i = 1; i < n+1; i++) {
        results.push(i);
    }
    return times(results);
}

function isVowel(car) {
    'use strict';
    // Définir une fonction isVowel() qui prend en paramètre une chaîne de caractères de taille 1 et retourne true si la c'est une voyelle, false sinon. 
    // On se limitera à l'alphabet Latin non accentué.
    // Vous pouvez vous aider vous de l'objet Regexp.test().
    var pattern = new RegExp("[aeiouy]");
    return pattern.test(car.toLowerCase());
}


function hasVowel(text) {
    'use strict';
    // Définir une fonction hasVowel() qui prend en paramètre une chaîne de caractères et retourne true si elle contient une voyelle, false sinon. 
    // Utiliser la fonction isVowel() définie précédemment.
    var words = text.split();
    for (var i = 0; i < words.length; i++) {
        if (isVowel(words[i])) {
            return true;
        }
    }
    return false;
}

function translate(text) {
    'use strict';
    // Définir une fonction translate() qui prend en paramètre une chaîne de caractères et retourne la traduction de celle-ci. Elle se base sur l'objet JavaScript suivant (qui peut être enrichi) :
    var translations = {
        hello   : 'salut',
        world   : 'monde',
        goodbye : 'adieu',
        cruel   : 'cruel'
    };
    // Pour récupérer une valeur dans un tableau associatif, utiliser object[key]. Par exemple, translation['hello'] retournera 'salut'.
    // Pour segmenter le paramètre initial, aidez-vous de la méthode split().
    var words = text.split(' ');
    var acc = "";
    for (var i = 0; i < words.length; i++) {
        if (words[i] in translations) {
        var word = translations[words[i]];
        acc += word;
    } else {
        acc += words[i];
    }
    acc += " ";
  }
  return acc.length > 0 ? acc.substring(0, acc.length - 1) : acc;
}

