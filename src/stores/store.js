import { defineStore } from "pinia";

export const Storage = defineStore({
  id: "myStore",
  state: () => ({
    // Define your store's state variables here
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
    currentPosition: "",
    aspiredPosition: "",
    experienceCurrentPosition: "",
    processState: 1,
    resumeUploaded: false,
    base64Image: "",

    // Add more variables as needed
  }),
  actions: {
    // Define actions to mutate the state
    updateFirstName(newFirstName) {
      this.firstName = newFirstName;
    },
    updateLastName(newLastName) {
      this.lastName = newLastName;
    },
    updateEmail(newEmail) {
      this.email = newEmail;
    },
    updateCountry(newCountry) {
      this.country = newCountry;
    },
    updateStreet(newStreet) {
      this.street = newStreet;
    },
    updateCity(newCity) {
      this.city = newCity;
    },
    updateState(newState) {
      this.state = newState;
    },
    updatePincode(newPincode) {
      this.pincode = newPincode;
    },
    updateCurrentPosition(newCurrentPosition) {
      this.currentPosition = newCurrentPosition;
    },
    updateAspiredPosition(newAspiredPosition) {
      this.aspiredPosition = newAspiredPosition;
    },
    updateExperienceCurrentPosition(newExperienceCurrentPosition) {
      this.experienceCurrentPosition = newExperienceCurrentPosition;
    },
    updateProcessState(newState) {
      this.processState = newState;
    },
    updateResume(newState) {
      this.resumeUploaded = newState;
    },
    updateBase64Image(newState) {
      this.base64Image = newState;
    },
    // Add more actions as needed
  },
});
