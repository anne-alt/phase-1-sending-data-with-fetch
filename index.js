// Add your code here
const body = document.querySelector('body');

function submitData(userName, userEmail) {
  let users = {
        name: userName,
        email: userEmail
    }
  return fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
        "Content-Type" : "application/json",
        Accept: "application/json"
    },
    body : JSON.stringify(users)
  })
  .then(response => response.json())
  .then((user) => {body.append(id)})
  .catch(error => {
    alert("unauthorised User!");
    body.append(error);
  })
}
submitData();