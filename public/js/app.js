const weatherform = document.querySelector('form')
const search = document.querySelector('input')
const msg1 = document.querySelector('#msg1')
const msg2 = document.querySelector('#msg2')
weatherform.addEventListener('submit',(e)=>{
    e.preventDefault()
 msg1.textContent = 'Loading'
 msg2.textContent = ''
    const location = search.value
    fetch('/products?address=' + location).then((response) =>
{
    response.json().then((data) => 
    {
       // console.log('data' , data)
        if(data.error)
        {
            msg1.textContent = data.error
        }
        else
        {
           
                msg1.textContent = data.latitude
                msg2.textContent = data.longitude
            
        }
      
    })
})

    
})

