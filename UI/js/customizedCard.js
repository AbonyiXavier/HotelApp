class Customized {
  constructor() {
    
  }

  async getAllHotels() {
    const profileResponse = await fetch(
      "http://localhost:3000/hotels"
    );
    const profile = await profileResponse.json();

    return {
      profile
    };
  }
  async getHotel(id) {
    const response = await fetch(
      `http://localhost:3000/hotels/${id}`
    );
    const res = await response.json();

    return {
      data: res,
    };
  }
}
