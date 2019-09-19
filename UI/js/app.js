const customized = new Customized();

const tbody = document.querySelector("#tbody");
const modaldisplay = document.querySelector('#modaldisplay')

const getAllHotels = () => {
  customized
    .getAllHotels()
    .then(data => {
      console.log("data i dey wait", data);
      console.log("them profile", data.profile);
      data.profile.forEach(data => {
        console.log("their Hotel name", data.Hotel_name);

        tbody.innerHTML += `
        <tr>
        <td>${data.hotel_name}</td>
        <td>${data.address}</td>
        <td>${data.location} </td>
        <td>${data.state}</td>
        <td class="edit card-list" data-id="${data.id}"><i class="fas fa-pencil-alt"></i></td>
        <td class="delete card-list" data-id="${data.id}"><i class="fas fa-times"></i></td>
    </tr>
        
        `;
      });
    })
    .catch(err => {
      console.log(err);
    });
};

const getSingleHotel = id => {
  console.log("my id now", id);
  customized
    .getHotel(id)
    .then(res => {
      console.log('my data',res.data);
      modaldisplay.innerHTML = `<ul>
      <li class="list-group-item">Address: ${res.data.address}</li>
      <li class="list-group-item">location: ${res.data.location}</li>
      <li class="list-group-item">state: ${res.data.state}</li>
    </ul>`
    })
    .catch(err => {
      console.log(err);
    });
};

getAllHotels();
