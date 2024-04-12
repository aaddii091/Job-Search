<template>
  <div class="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-24 lg:px-8">
    <div class="mb-8 image-container">
      <img src="" alt="" />
    </div>
    <div class="mb-8">
      <ol
        class="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base"
      >
        <li
          class="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700"
        >
          <span
            class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500"
          >
            <svg
              class="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
              />
            </svg>
            Personal <span class="hidden sm:inline-flex sm:ms-2">Info</span>
          </span>
        </li>
        <li
          id="career"
          class="career flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700"
        >
          <span
            class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500"
          >
            <span class="me-2">2</span>
            Career <span class="hidden sm:inline-flex sm:ms-2">Info</span>
          </span>
        </li>
        <li class="flex items-center results">
          <span class="me-2">3</span>
          Results
        </li>
      </ol>
    </div>
    <personal-information-view></personal-information-view>
    <footer-view-vue></footer-view-vue>
  </div>
</template>

<script setup>
import PersonalInformationView from "@/components/FormView.vue";
import FooterViewVue from "@/components/FooterView.vue";

import { Storage } from "../stores/store";
import { watchEffect } from "vue";

const store = Storage();

watchEffect(() => {
  console.log("Value changed:", store.processState);
  const careerElement = document.querySelector(".career");
  const resultsElement = document.querySelector(".results");

  if (store.processState === 2) {
    careerElement?.classList.add("text-blue-600");
    resultsElement?.classList.remove("text-blue-600");
  } else if (store.processState === 3) {
    resultsElement?.classList.add("text-blue-600");
  } else {
    resultsElement?.classList.remove("text-blue-600");
    careerElement?.classList.remove("text-blue-600");
  }
});
</script>

<style scoped>
.image-container {
  /* display: flex;
  justify-content: center; */
}
img {
  border-radius: 25px;
  height: 200px;
  background-image: url(./../assets/img/banner.png);
  background-size: cover;
  background-position: center;
}
</style>
