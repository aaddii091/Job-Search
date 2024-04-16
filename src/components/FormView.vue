<template>
  <div v-if="currentStep === 1" class="Personal-Info">
    <form @submit.prevent="submitPersonalInfo">
      <div class="space-y-12">
        <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-base font-semibold leading-7 text-gray-900">
            Personal Information
          </h2>
          <p class="mt-1 text-sm leading-6 text-gray-600">
            Use a permanent address where you can receive mail.
          </p>

          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <label
                for="first-name"
                class="block text-sm font-medium leading-6 text-gray-900"
                >First name</label
              >
              <div class="mt-2">
                <input
                  required="true"
                  type="text"
                  name="first-name"
                  id="first-name"
                  autocomplete="given-name"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 px-2"
                />
              </div>
            </div>

            <div class="sm:col-span-3">
              <label
                for="last-name"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Last name</label
              >
              <div class="mt-2">
                <input
                  required="true"
                  type="text"
                  name="last-name"
                  id="last-name"
                  autocomplete="family-name"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                />
              </div>
            </div>

            <div class="sm:col-span-3">
              <label
                for="email"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Email address</label
              >
              <div class="mt-2">
                <input
                  required="true"
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                />
              </div>
            </div>

            <div class="sm:col-span-3">
              <label
                for="country"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Country</label
              >
              <div class="mt-2">
                <select
                  id="country"
                  name="country"
                  autocomplete="country-name"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                >
                  <option>United States</option>
                  <option>Canada</option>
                </select>
              </div>
            </div>
            <!-- 
            <div class="col-span-full">
              <label
                for="street-address"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Street address</label
              >
              <div class="mt-2">
                <input
                  required="true"
                  type="text"
                  name="street-address"
                  id="street-address"
                  autocomplete="street-address"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                />
              </div>
            </div> -->

            <!-- <div class="sm:col-span-2 sm:col-start-1">
              <label
                for="city"
                class="block text-sm font-medium leading-6 text-gray-900"
                >City</label
              >
              <div class="mt-2">
                <input
                  required="true"
                  type="text"
                  name="city"
                  id="city"
                  autocomplete="address-level2"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label
                for="region"
                class="block text-sm font-medium leading-6 text-gray-900"
                >State / Province</label
              >
              <div class="mt-2">
                <input
                  required="true"
                  type="text"
                  name="region"
                  id="region"
                  autocomplete="address-level1"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label
                for="postal-code"
                class="block text-sm font-medium leading-6 text-gray-900"
                >ZIP / Postal code</label
              >
              <div class="mt-2">
                <input
                  required="true"
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  autocomplete="postal-code"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                />
              </div>
            </div> -->
          </div>
        </div>
      </div>

      <div class="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          class="text-sm font-semibold leading-6 text-gray-600"
          @click="prevStep"
        >
          Back
        </button>
        <button
          type="submit"
          class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Next
        </button>
      </div>
    </form>
  </div>
  <div v-if="currentStep === 2" class="Job-Info">
    <form @submit.prevent="submitCareerInfo">
      <div class="space-y-12">
        <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-base font-semibold leading-7 text-gray-900">
            Job Information
          </h2>
          <p class="mt-1 text-sm leading-6 text-gray-600">
            <!-- Fill up the below boxs -->
          </p>

          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <label
                for="last-name"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Current Profile</label
              >
              <div class="mt-2">
                <input
                  required="true"
                  type="text"
                  name="last-name"
                  id="current-profile"
                  autocomplete="family-name"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                />
              </div>
            </div>
            <div class="sm:col-span-3">
              <label
                for="first-name"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Aspired Profile</label
              >
              <div class="mt-2">
                <input
                  required="true"
                  type="text"
                  name="first-name"
                  id="aspired-profile"
                  autocomplete="given-name"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 px-2"
                />
              </div>
            </div>

            <div class="sm:col-span-3">
              <label
                for="last-name"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Experience in Current Profile</label
              >
              <div class="mt-2">
                <input
                  required="true"
                  type="text"
                  name="last-name"
                  id="exp-current-profile"
                  autocomplete="family-name"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                />
              </div>
            </div>

            <div class="col-span-full">
              <label
                for="cover-photo"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Resume</label
              >
              <div
                class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"
              >
                <div
                  class="text-center"
                  :class="resumeUploaded ? 'hidden' : 'block'"
                >
                  <svg
                    class="mx-auto h-12 w-12 text-gray-300"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <div class="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      for="resume"
                      class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="resume"
                        name="file-upload"
                        type="file"
                        class="sr-only"
                        v-on:change="fileUpload($event)"
                      />
                    </label>
                    <p class="pl-1">or drag and drop</p>
                  </div>
                  <p class="text-xs leading-5 text-gray-600">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
                <div
                  class="text-center uploaded"
                  :class="resumeUploaded ? 'block' : 'hidden'"
                >
                  <svg
                    class="mx-auto h-12 w-12 text-gray-300"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <div class="mt-4 flex text-sm leading-6 text-gray-600">
                    <div
                      for="resume"
                      class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>File Uploaded</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          class="text-sm font-semibold leading-6 text-gray-600"
          @click="prevStep"
        >
          Back
        </button>
        <button
          type="submit"
          class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Next
        </button>
      </div>
    </form>
  </div>

  <div v-if="currentStep === 3">
    <form @submit.prevent="submitCareerInfo">
      <div class="space-y-12">
        <div class="border-b border-gray-900/10 pb-12">
          <!-- RESULTS  -->
          <StatisticsViewVue />
        </div>
      </div>
      <div class="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          class="text-sm font-semibold leading-6 text-gray-600"
          @click="prevStep"
        >
          Back
        </button>
        <button
          type="submit"
          class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Next
        </button>
      </div>
    </form>
  </div>
  <div v-if="loading" class="loader">
    <div class="loading"></div>
  </div>
</template>
<script setup>
import { computed, onBeforeMount, onMounted, ref, watchEffect } from "vue";
import axios from "axios";
import { Storage } from "../stores/store";

import StatisticsViewVue from "./StatisticsView.vue";

const loading = ref(false);

const currentStep = ref(1);
const profiles = ref([]);
const store = Storage();
const resumeUploaded = ref(store.resumeUploaded);
watchEffect(() => {
  // Update the const resumeUploaded whenever there is a change in store.resumeUploaded
  resumeUploaded.value = store.resumeUploaded;
});

function nextStep() {
  if (currentStep.value < 3) {
    currentStep.value++;
    store.updateProcessState(currentStep.value);
  }
}

function prevStep() {
  if (currentStep.value > 1) {
    currentStep.value--;
    store.updateProcessState(currentStep.value);
  }
}
//form personal info
function submitPersonalInfo() {
  const formData = {
    firstName: document.getElementById("first-name").value,
    lastName: document.getElementById("last-name").value,
    email: document.getElementById("email").value,
    country: document.getElementById("country").value,
    // street: document.getElementById("street-address").value,
    // city: document.getElementById("city").value,
    // state: document.getElementById("region").value,
    // pincode: document.getElementById("postal-code").value,
  };

  // Call actions to update store
  store.updateFirstName(formData.firstName);
  store.updateLastName(formData.lastName);
  store.updateEmail(formData.email);
  store.updateCountry(formData.country);
  // store.updateStreet(formData.street);
  // store.updateCity(formData.city);
  // store.updateState(formData.state);
  // store.updatePincode(formData.pincode);

  nextStep();
  console.log(store.firstName);
}

//form career

function submitCareerInfo() {
  const formData = {
    currentPosition: document.getElementById("current-profile").value,
    aspiredPosition: document.getElementById("aspired-profile").value,
    experienceCurrentPosition: document.getElementById("exp-current-profile")
      .value,
  };

  // Call actions to update store
  store.updateCurrentPosition(formData.currentPosition);
  store.updateAspiredPosition(formData.aspiredPosition);
  store.updateExperienceCurrentPosition(formData.experienceCurrentPosition);

  console.log(store);

  // Move to next step
  nextStep();
}
async function fileUpload(event) {
  store.updateResume(true);
  console.log(event);
  changeTextColor();
  const file = event.target.files[0];
  if (!file) return;

  // Check if the uploaded file is a PDF
  if (file.type === "application/pdf") {
    loading.value = true;
    console.log("converting");
    try {
      const formData = new FormData();
      formData.append("pdfFile", file);
      const response = await axios.post(
        "http://localhost:3000/api/v1/convert",
        formData
      );
      const blob = new Blob([response.data], { type: "image/jpg" });

      // Create an object URL for the blob object
      const imageUrl = URL.createObjectURL(blob);

      const img = document.createElement("img");
      img.src = imageUrl;
      document.body.appendChild(img);

      console.log(imageUrl);

      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = function () {
        const base64data = reader.result;
        // localStorage.setItem("uploadedImage", base64data);
        store.updateBase64Image(base64data);
        console.log(base64data);
        loading.value = false;
      };

      console.log(response);
    } catch (error) {
      console.error(error);
      alert("Failed to convert PDF. Please try again later.");
      loading.value = false;
    }
  } else {
    const reader = new FileReader();
    reader.onload = () => {
      const base64Image = reader.result;
      store.updateBase64Image(base64Image);
    };
    reader.readAsDataURL(file);
  }
}

function changeTextColor() {
  // storedImage = localStorage.getItem("uploadedImage") || "";
}

async function getAccessToken() {
  try {
    const response = await axios.post(
      "https://auth.emsicloud.com/connect/token",
      `client_id=x0h13o79z83coq57&client_secret=9G21R2Dy&grant_type=client_credentials&scope=emsi_open`,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    console.log(response.data.access_token);
    return response.data.access_token;
  } catch (error) {
    console.error("Error fetching access token:", error.message);
    throw error;
  }
}

// Function to fetch titles using access token
async function fetchTitles() {
  try {
    const accessToken = await getAccessToken();
    console.log("fetching titles");
    const response = await axios.get(
      "https://emsiservices.com/titles/versions/latest/titles",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    profiles.value = response.data.data;
    console.log(profiles.value);
  } catch (error) {
    console.error("Error fetching titles:", error.message);
  }
}

onMounted(() => {
  fetchTitles();
});
</script>

<style></style>
