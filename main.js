const op = document.getElementById('op')
const cl = document.getElementById('cl')
const ph1 = document.getElementById('ph1')
const ph2 = document.getElementById('ph2')

op.onclick = function () {
    ph1.style.display = 'none'
    ph2.style.display = 'block'    
    op.style.display='none'
    cl.style.display='block'
}

cl.onclick = function(){
    ph1.style.display = 'block'
    ph2.style.display = 'none'
    op.style.display = 'block'
    cl.style.display = 'none'
}








const mor = document.getElementById('mor1')
const les = document.getElementById('les1')
const num = document.getElementById('num')

let count = 0

mor.onclick = function () {
    if (count < 10) {
        count++
        num.textContent = count
    }
    else{
        alert( 'error  no more than 10 be counted')
    }
}
les.onclick = function (){
  if (count > 0) {
    count--
    num.textContent = count
  }else{
    alert('error  no less than 0 be count')
  }
}









let theam = prompt('light  or  dark').toLowerCase().trim() 

    function dark  () {
        if (theam == 'dark') {
            document.body.style.background = '#000000'
        }
        else if (theam == 'light'){
            document.body.style.background = '#f7f7f7ec'
        }        
        else{
            alert('only dark or light')
            document.body.style.background = '#e4b95c'
        }
    }
    dark()







    

const color = document.getElementById('color')
const box = document.getElementById('colors')
let x = 0


 color.onclick = function change(){
    x++
    if (x===1) {
       box.style.background = '#703f1e'
    }
    else if(x===2){
        box.style.background = '#149710'
    }
    else if(x===3){
        box.style.background = '#139171'
        x=0
    }
}
change()