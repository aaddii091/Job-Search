<template>
  <div class="container">
    <div v-if="loading" class="loader-container">
      <div class="loader-inner">
        <div class="loader"></div>
      </div>
    </div>
    <div v-else class="main">
      <div class="" id="pricing">
        <div class="mx-auto max-w-7xl pb-12 px-4 sm:px-6 lg:px-8">
          <div class="sm:align-center sm:flex sm:flex-col mx-auto max-w-3xl">
            <h1
              class="max-w-xl mx-auto leading-tight text-3xl font-bold tracking-tight sm:text-center"
            >
              {{ fullName }}
            </h1>
            <p v-if="resumeAvailiable" class="mt-4 text-md sm:text-center">
              {{ description }}
            </p>
            <p v-if="!resumeAvailiable" class="mt-4 text-md sm:text-center">
              {{ descriptionWithoutResume }}
            </p>
          </div>
          <div
            class="mt-12 space-y-4 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:mx-auto lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-3"
          >
            <!-- FREE PLAN -->
            <div
              class="divide-y bg-white divide-gray-200 rounded-lg border border-gray-200 shadow-md"
            >
              <div class="p-6">
                <h2
                  class="text-lg font-medium leading-6 text-gray-900 text-center"
                >
                  CURRENT SKILLS
                </h2>
                <div class="flex-col">
                  <button
                    class="shadow-lg mt-3 block w-full rounded-md border border-gray-800 bg-gray-800 py-2 text-center text-sm font-semibold text-white hover:bg-gray-900"
                  >
                    Brush Up Skills →
                  </button>
                </div>
              </div>
              <div class="px-6 pt-6 pb-8">
                <h3 class="text-sm font-medium text-gray-900">Skills</h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li
                    v-for="currentskills in skillsData.current_profile_skills"
                    :key="currentskills.id"
                    class="flex space-x-3 items-center"
                  >
                    <div class="w-6 h-6 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"
                        />
                      </svg>
                    </div>
                    <span class="text-md text-gray-800">
                      <a
                        :href="`https://schoolofunlearn.thoughtjumper.com/explore?q=${currentskills}`"
                        target="_blank"
                      >
                        {{ currentskills }}
                      </a></span
                    >
                  </li>
                </ul>
              </div>
            </div>

            <!-- PREMIUM MONTHLY PLAN -->
            <div class="bg-white border-2 rounded-lg shadow-md">
              <div class="p-6">
                <h2
                  class="text-lg font-medium leading-6 text-gray-900 text-center"
                >
                  COMMON SKILLS
                </h2>
                <div class="flex-col">
                  <button
                    class="shadow-lg mt-3 block w-full rounded-md border border-gray-800 bg-gray-800 py-2 text-center text-sm font-semibold text-white hover:bg-gray-900"
                  >
                    Brush Up Skills →
                  </button>
                </div>
              </div>
              <div class="px-6 pt-6 pb-8 border-t">
                <h3 class="text-sm font-medium text-gray-900">Skills</h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li
                    v-for="common_skills in skillsData.common_skills"
                    :key="common_skills.id"
                    class="flex space-x-3 items-center"
                  >
                    <div class="w-6 h-6 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"
                        />
                      </svg>
                    </div>
                    <span class="text-md text-gray-800">
                      <a
                        :href="`https://schoolofunlearn.thoughtjumper.com/explore?q=${common_skills}`"
                        target="_blank"
                      >
                        {{ common_skills }}
                      </a></span
                    >
                  </li>
                </ul>
              </div>
            </div>

            <!-- PREMIUM YEARLY PLAN -->
            <div class="bg-white divide-gray-200 rounded-lg border-2 shadow-md">
              <div class="p-6">
                <h2
                  class="text-lg font-medium leading-6 text-gray-900 text-center"
                >
                  REQUIRED SKILLS
                </h2>
                <div class="flex-col">
                  <button
                    class="shadow-lg mt-3 block w-full rounded-md border border-gray-800 bg-gray-800 py-2 text-center text-sm font-semibold text-white hover:bg-gray-900"
                  >
                    Start Learning →
                  </button>
                </div>
              </div>
              <div class="px-6 pt-6 pb-8 border-t">
                <h3 class="text-sm font-medium text-gray-900">
                  What's included
                </h3>

                <ul role="list" class="mt-6 space-y-4">
                  <li
                    v-for="required_skills in skillsData.required_skills"
                    :key="required_skills.id"
                    class="flex space-x-3 items-center"
                  >
                    <div class="w-6 h-6 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"
                        />
                      </svg>
                    </div>
                    <span class="text-md text-gray-800">
                      <a
                        :href="`https://schoolofunlearn.thoughtjumper.com/explore?q=${required_skills}`"
                        target="_blank"
                      >
                        {{ required_skills }}
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div
        class="bg-gray-50 p-8 min-h-[350px] flex flex-col items-center justify-center font-[sans-serif] text-[#333]"
      >
        <h2 class="text-3xl font-bold mb-14 text-center">
          Application Metrics
        </h2>
        <div class="grid lg:grid-cols-4 sm:grid-cols-2 gap-6 max-lg:gap-12">
          <div class="text-center">
            <h3 class="text-4xl font-extrabold">
              5.4<span class="text-blue-600">M+</span>
            </h3>
            <p class="text-base font-bold mt-3">Total Jobs</p>
            <p class="text-sm text-gray-500 mt-2">
              The total number of open jobs on the platform.
            </p>
          </div>
          <div class="text-center">
            <h3 class="text-4xl font-extrabold">
              1.6<span class="text-blue-600">M+</span>
            </h3>
            <p class="text-base font-bold mt-3">Current Profile Jobs</p>
            <p class="text-sm text-gray-500 mt-2">
              The total number of curent profile matching jobs on the platform.
            </p>
          </div>
          <div class="text-center">
            <h3 class="text-4xl font-extrabold">
              2.3<span class="text-blue-600">M+</span>
            </h3>
            <p class="text-base font-bold mt-3">Aspired Profile Jobs</p>
            <p class="text-sm text-gray-500 mt-2">
              The total number of aspired profile matching jobs on the platform.
            </p>
          </div>
          <div class="text-center">
            <h3 class="text-4xl font-extrabold">
              1.0<span class="text-blue-600">M+</span>
            </h3>
            <p class="text-base font-bold mt-3">Matching Jobs</p>
            <p class="text-sm text-gray-500 mt-2">
              The total number of matching jobs on the platform.
            </p>
          </div>
        </div>
      </div> -->
      <!-- JOBS  -->
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg pt-10">
        <table
          class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="px-6 py-3">Job Title</th>
              <th scope="col" class="px-6 py-3">Company</th>
              <th scope="col" class="px-6 py-3">Posted</th>
              <th scope="col" class="px-6 py-3">Location</th>
              <th scope="col" class="px-6 py-3">Pay</th>
              <th scope="col" class="px-6 py-3">Visit</th>
            </tr>
          </thead>
          <tbody v-for="job in jobs.jobs_results" :key="job.id">
            <tr>
              <th
                scope="row"
                class="px-6 py-4 font-medium text-slate-800 whitespace-nowrap text-slate-800"
              >
                {{ job.title }}
              </th>
              <td class="px-6 py-4 text-slate-800">{{ job.company_name }}</td>
              <td class="px-6 py-4 text-slate-800">
                {{
                  job.detected_extensions.posted_at
                    ? job.detected_extensions.posted_at
                    : "Week ago"
                }}
              </td>
              <td class="px-6 py-4 text-slate-800">{{ job.location }}</td>
              <td class="px-6 py-4 text-slate-800">
                {{
                  job.detected_extensions.salary
                    ? job.detected_extensions.salary
                    : "On Discussion"
                }}
              </td>
              <td class="px-6 py-4 text-slate-800">
                <a
                  :href="job.related_links[0].link"
                  target="_blank"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >Apply</a
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import axios from "axios";
import OpenAI from "openai";
import { Storage } from "../stores/store";

const store = Storage();

const loading = ref(false);
const description = ref("");
const descriptionWithoutResume = ref(store.aspiredPosition);
const jobs = ref([]);
const resumeAvailiable = ref(store.resumeUploaded);
const fullName = computed(() => {
  return store.firstName + " " + store.lastName;
});
console.log(fullName);

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_KEY,
  dangerouslyAllowBrowser: true,
});

const skillsData = ref();

const uploadImage = (base64Data) => {
  loading.value = true;

  // Convert the Base64 string to a Blob
  const byteString = atob(base64Data.split(",")[1]);
  const mimeString = base64Data.split(",")[0].split(":")[1].split(";")[0];
  const byteNumbers = new Array(byteString.length);

  for (let i = 0; i < byteString.length; i++) {
    byteNumbers[i] = byteString.charCodeAt(i);
  }

  const byteArray = new Uint8Array(byteNumbers);
  const blob = new Blob([byteArray], { type: mimeString });

  // Create a FormData object and append the blob as 'image'
  let formData = new FormData();
  formData.append("image", blob, "image.jpeg"); // 'image.png' is the filename you want to use for the uploaded image

  // Set the headers for the request
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  // Make the POST request to the endpoint
  axios
    .post(
      "https://us-central1-register-555aa.cloudfunctions.net/summaryAPI/upload-image",
      formData,
      config
    )
    .then((response) => {
      // Handle the response here
      loading.value = false;
      console.log(response);
      description.value = response.data;
      localStorage.removeItem("uploadedImage");
    })
    .catch((error) => {
      // Handle the error here
      console.error(error);
      resumeAvailiable.value = false;
      loading.value = false;
    });
};
if (store.resumeUploaded) {
  console.log(store.base64Image);
  uploadImage(store.base64Image);
  // uploadImage(localStorage.getItem("uploadedImage"));/
}

const fetchJobs = async () => {
  loading.value = true;
  try {
    const response = await axios.get("http://localhost:3000/api/v1/jobs", {
      params: {
        engine: "google_jobs",
        api_key:
          "9383d33a4c58a2f3e66a3b73d2a6cd9759e8c2e9e6643bdc4f33869f6b6f1980",
        q: store.aspiredPosition,
      },
    });
    jobs.value = response.data;
    console.log(jobs.value);
    if (!resumeAvailiable) {
      loading.value = false;
    }
  } catch (error) {
    console.error("Error fetching jobs:", error);
  }
};

fetchJobs();

//SKILLS

async function extractProfileSkills(currentJobProfile, desiredJobProfile) {
  // Construct the prompt to explicitly ask for skills in JSON format
  const prompt = `Given the current job profile as "${currentJobProfile}" and the desired job profile as "${desiredJobProfile}", 
  identify 8 key skills for each profile. Format the response in JSON as follows:
  {
    "current_profile_skills": ["<skill1>", "<skill2>", ..., "<skill8>"],
    "desired_profile_skills": ["<skill1>", "<skill2>", ..., "<skill8>"],
    "common_skills": ["<commonSkill1>", ..., "<commonSkilln>"]
  }
  If there are no common skills, the array for common skills should be empty.
  and skill should be one word skill.
  Don't user general skill, be bit specific and use professional words`;

  // Call to OpenAI's API with the constructed prompt
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "You are a helpful assistant, skilled in data extraction and summarization.",
      },
      { role: "user", content: prompt },
    ],
    model: "gpt-3.5-turbo",
    response_format: {
      type: "json_object",
    },
  });

  // Parsing the response assuming the model outputs correctly formatted JSON directly
  const skills = completion.choices[0].message.content; // Assuming model directly outputs JSON formatted string

  // Return the parsed JSON data
  return JSON.parse(skills);
}

async function main() {
  const currentJobProfile = store.currentPosition;
  const desiredJobProfile = store.aspiredPosition;

  const profileSkills = await extractProfileSkills(
    currentJobProfile,
    desiredJobProfile
  );

  profileSkills.required_skills = profileSkills.desired_profile_skills.filter(
    (skill) => !profileSkills.common_skills.includes(skill)
  );
  console.log(profileSkills);
  skillsData.value = profileSkills;
}

main();
</script>

<style scoped>
.loader-container {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
/* HTML: <div class="loader"></div> */
.loader {
  width: 320px;
  height: 20px;
  background:
    linear-gradient(#000 50%, #0000 0),
    linear-gradient(#0000 50%, #000 0),
    linear-gradient(#000 50%, #0000 0),
    linear-gradient(#0000 50%, #000 0),
    linear-gradient(#000 50%, #0000 0),
    linear-gradient(#0000 50%, #000 0) #ddd;
  background-size: calc(100% / 6 + 1px) 200%;
  background-repeat: no-repeat;
  animation: l12 2s infinite;
}
@keyframes l12 {
  0% {
    background-position:
      calc(0 * 100% / 5) 100%,
      calc(1 * 100% / 5) 0%,
      calc(2 * 100% / 5) 100%,
      calc(3 * 100% / 5) 0%,
      calc(4 * 100% / 5) 100%,
      calc(5 * 100% / 5) 0%;
  }
  16.67% {
    background-position:
      calc(0 * 100% / 5) 0%,
      calc(1 * 100% / 5) 0%,
      calc(2 * 100% / 5) 100%,
      calc(3 * 100% / 5) 0%,
      calc(4 * 100% / 5) 100%,
      calc(5 * 100% / 5) 0%;
  }
  33.33% {
    background-position:
      calc(0 * 100% / 5) 0%,
      calc(1 * 100% / 5) 100%,
      calc(2 * 100% / 5) 100%,
      calc(3 * 100% / 5) 0%,
      calc(4 * 100% / 5) 100%,
      calc(5 * 100% / 5) 0%;
  }
  50% {
    background-position:
      calc(0 * 100% / 5) 0%,
      calc(1 * 100% / 5) 100%,
      calc(2 * 100% / 5) 0%,
      calc(3 * 100% / 5) 0%,
      calc(4 * 100% / 5) 100%,
      calc(5 * 100% / 5) 0%;
  }
  66.67% {
    background-position:
      calc(0 * 100% / 5) 0%,
      calc(1 * 100% / 5) 100%,
      calc(2 * 100% / 5) 0%,
      calc(3 * 100% / 5) 100%,
      calc(4 * 100% / 5) 100%,
      calc(5 * 100% / 5) 0%;
  }
  83.33% {
    background-position:
      calc(0 * 100% / 5) 0%,
      calc(1 * 100% / 5) 100%,
      calc(2 * 100% / 5) 0%,
      calc(3 * 100% / 5) 100%,
      calc(4 * 100% / 5) 0%,
      calc(5 * 100% / 5) 0%;
  }
  100% {
    background-position:
      calc(0 * 100% / 5) 0%,
      calc(1 * 100% / 5) 100%,
      calc(2 * 100% / 5) 0%,
      calc(3 * 100% / 5) 100%,
      calc(4 * 100% / 5) 0%,
      calc(5 * 100% / 5) 100%;
  }
}
</style>
