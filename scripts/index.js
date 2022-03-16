let action = prompt('Введите желаемую функцию(add,sub,mult,div): ', '');

if(action == 'mult'){
    function calcMult(a, b) {
        return a * b;
      }
      let a = prompt('Введите множитель1:', '');
      let b = prompt('Введите множитель2:', '');
    
      let c = calcMult(a, b);
      console.log(`Результат операции mult: ${a} - ${b} = `, c);
      alert(`Результат: ${a} * ${b} =  `+ c);
}
else if (action == 'sub'){
    function calcSub(n, m) {
        return n - m;
      }
      let n = prompt('Введите уменьшаемое:', '');
      let m = prompt('Введите вычитаемое:', '');
    
      let k = calcSub(n, m);
      console.log(`Результат операции sub: ${n} - ${m} = `, k);
      alert(`Результат: ${n} - ${m} =  `+ k);
}
else if(action == 'div'){
    function calcDiv(d, e) {
        return d / e;
      }
      let d = prompt('Введите делимое:', '');
      let e = prompt('Введите делитель:', '');
    
      let l = calcDiv(d, e);
      console.log(`Результат операции div: ${d} / ${e} = `, l);
      alert(`Результат: ${d} / ${e} =  `+ l);
}
else if(action == 'add'){
    function calcSum(i, j) {
        return i + j;
      }
      let i = prompt('Введите слагаемое1:', '');
      let j = prompt('Введите слагаемое2:', '');
    
      let s = calcSum(i, j);
      alert('Press OK to get the answer');
      alert(+i + +j);
      console.log(`Результат операции add:`);
      console.log( +i + +j);
}
else{
    alert('Такой функции не существует.');
}
