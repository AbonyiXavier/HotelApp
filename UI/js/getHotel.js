class Hotel {
  constructor() {}

  async getHotel(text) {
    console.log(text);
    const profileResponse = await fetch(
      `http://localhost:3000/hotels?hotel_name_like=^${text}`
    );
    //  console.log(profileResponse)

    const profile = await profileResponse.json();
    console.log(profile);
    return {
      profile
    };
  }
}
