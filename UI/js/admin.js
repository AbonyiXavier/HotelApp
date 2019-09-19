 
  
  const http = new EasyHTTP;

  
    
   document.getElementById('postData').addEventListener('submit', postData);
    document.getElementById('tbody').addEventListener('click', deleteData);
    document.getElementById('tbody').addEventListener('click', updateData);

      function postData(event){
            event.preventDefault();

            let hotel_name = document.getElementById('name').value;
            let address = document.getElementById('address').value;
            let location = document.getElementById('location').value;
            let state = document.getElementById('state').value;
            

            const data = {
                hotel_name, address,location,state
            }
            console.log(data)

            http.post('http://localhost:3000/hotels', data) 
            .then((data) => 
            console.log(data)
            )
            .catch((err)=>console.log(err))
        }

        function deleteData(e) {
            console.log(e.target)
            if (e.target) {
                let id = e.target.parentElement.dataset.id;
                console.log(id)
                if (confirm("Delete list.... if you are sure")) {
                   
            fetch(`http://localhost:3000/hotels/${id}`, {
                method: 'DELETE',
                headers: {
          'Content-type': 'application/json'
        },
            }).then((res) => res.json())
            .then((data) => 
            console.log(data)
            )
            .catch((err)=>console.log(err)) 
                }
            }
            event.preventDefault();

        }


        function updateData(e) {
            console.log(e.target)

            if (e.target) {
                let id = e.target.parentElement.dataset.id;
                console.log(id)
                // let hotel_name = document.getElementById('name').value;
                // let address = document.getElementById('address').value;
                // let location = document.getElementById('location').value;
                // let state = document.getElementById('state').value;
                
                let hotel_name =  e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
                console.log(hotel_name)
                let address = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
                console.log(address)
                let location = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
                console.log(location)
                let state = e.target.parentElement.previousElementSibling.textContent;
                console.log(state)
    
                const data = {
                    hotel_name, address,location,state
                }
              
                if (confirm("update sure")) {
                   
            http.put(`http://localhost:3000/hotels/${id}`, data)
            .then((data) => 
            console.log(data)
            )
            .catch((err)=>console.log(err)) 
                }
            }

            event.preventDefault();

        }