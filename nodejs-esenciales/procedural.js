var reverse = function (x) {
    const length = x.length;
    for(let i = 0; i < Math.floor(length / 2); i++) {
      const temp = x[i]
      x = x.substring(0, i) + 
        x.charAt(length - i - 1) +  
        x.substring(i + 1, length - i - 1) + 
        temp + 
        x.substring(length - i)
    }
    return x
  };

  function toCapitalize(input){
      let arrayOfString = input.split(' ');
      for (let i = 0; i < arrayOfString.length; i++) {
          let firstChar = arrayOfString[i].charAt(0);
          arrayOfString[i] = firstChar.toUpperCase() + arrayOfString[i].slice(1);
      }

      return arrayOfString.join(' ');
  }

  console.log('NodeJs');
  let cadena = "anitalavalatina";
  console.log(reverse(cadena));


  let title = "Once upon a time in new york";
  console.log(toCapitalize(title));
  