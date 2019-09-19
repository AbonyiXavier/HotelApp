class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

// Display profile in UI
    showProfile(text) {
        text.forEach((element) => {
            this.profile.innerHTML = `
        <div clas="card card-body mb-3">
          <div class="row">
            <div class="col-md-3">
               <img class="img-fluid mb-2" src="../UI/img/hotels.png">
                <a href="bookNow.html" target="_blank" class="btn btn-primary btn-block mb-4">Book Now</a>
            </div>
            <div class="col-md-9">
               <span class="badge badge-primary">Enquires:
               </span>
               <span class="badge badge-secondary">Our services: 
               </span>
               <span class="badge badge-success">facebook: 
               </span>
               <span class="badge badge-info">twitter: 
               </span>
               <br><br>
               <ul class="list-group">
                  <li class="list-group-item">Name:${element.hotel_name}</li>
                  <li class="list-group-item">State: ${element.state}</li>
                  <li class="list-group-item">Address: ${element.address}</li>
                  <li class="list-group-item">Location: ${element.location}</li>
               </ul> 
            </div>
          </div>
        </div>
        <h6 class="page-heading mb-3"><em>Your comfort is our priority......</em></h6>
        `;  
        })
        
    }



    // Show alert message
    showAlert(message, className) {
        // Clear any remaining alerts
        this.clearAlert();
        // Create div
        const div = document.createElement('div');
        // Add classes
        div.className = className;
        // Add text
        div.appendChild(document.createTextNode(message));
            // Get parent
        const container = document.querySelector('.searchContainer');
        // Get search box
        const search = document.querySelector('.search');
        // Insert alert
        container.insertBefore(div, search);

        // Timeout after 3 sec
        setTimeout (() => {
            this.clearAlert();
        }, 3000);
    }

    // Clear alert message
    clearAlert() {
        const currentAlert = document.querySelector('.alert');

        if (currentAlert) {
            currentAlert.remove();
        }
    }


    // Clear profile
    clearProfile() {
       this.profile.innerHTML = ''; 
    }
}