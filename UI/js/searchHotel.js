// init Github
const hotel = new Hotel; 

// init UI
const ui = new UI;

// serach input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;

    if (userText !== '') {
        // Make http call
        hotel.getHotel(userText)
        .then(data => {
            console.log(data)

            if (data.profile.message === 'Not found') {
                // Show alert 
               ui.showAlert('User not found', 'alert alert-danger');
            } else {
                // show profile
                ui.showProfile(data.profile);
            }
        })
    } 
    else{
        // Clear profile
        ui.clearProfile();
    }
   
});