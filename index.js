function submitData(name, email){
  return fetch('http://localhost:3000/users', {
    method: 'post',
    headers: {
      'content-type': 'application/json',
      'accept': 'application/json'
    },
    body: JSON.stringify({
      name,
      email
    }),
  })
  .then(response => response.json())
  .then(obj => {
    document.body.innerHTML = obj['id']
  })
  .catch((error) => {
    document.body.innerHTML = error.message
  })
}
