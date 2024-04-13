const OPTIONS = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'cf7a5687a3msh2b4e6cbcb9a99cep1b2cb6jsnd116282b6cc5',
      'X-RapidAPI-Host': 'ip-whois-geolocation1.p.rapidapi.com'
    }
  };

const fetchIpInfo = ip=>{
    return fetch(`https://ip-whois-geolocation1.p.rapidapi.com/${ip}`)
    .then(res=> res.json())
    .catch(err => console.error(err))
}

const $form = document.querySelector('#form')
const $input= document.querySelector('#input')
const $submit = document.querySelector('#submit')
const $results = document.querySelector('#results')

$form.addEventListener('submit', async (event)=>{
    event.preventDefault()
    const {value} = $input
    if(!value) return

    $submit.setAttribute('disabled', '')
    $submit.setAttribute('aria-busy', true)

    const ipInfo = await fetchIpInfo(value)
    if(ipInfo){
        $results.innerHTML = JSON.stringify(ipInfo, null, 2)
    }
    console.log($results.innerHTML = JSON.stringify(ipInfo, null, 2))

    $submit.removeAttribute('disabled', '')
    $submit.removeAttribute('aria-busy')
})