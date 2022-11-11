const select = document.getElementById('fuad')
function getVal(){
    console.log(select.value)
}

select.addEventListener('change',getVal)