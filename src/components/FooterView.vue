<template>
  <footer class="bg-white rounded-lg shadow mt-10">
    <div
      class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between"
    >
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
        >© 2024
        <a href="https://www.edvanta.com/" class="hover:underline"
          >Edvanta Technologies Private Limited</a
        >. All Rights Reserved.
      </span>
      <ul
        class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0"
      >
        <li>
          <a
            href="https://thoughtjumper.com/welcome/"
            target="_blank"
            class="hover:underline me-4 md:me-6 flex justify-center items-center"
          >
            <div class="footer_image"></div>
          </a>
        </li>
        <li>
          <a
            href="https://www.edvanta.com/"
            class="hover:underline me-4 md:me-6 flex justify-center items-center"
            target="_blank"
          >
            <div class="footer_image2"></div>
            <!-- <img src="../assets/img/tj.png" height="50px" width="50px" alt="" /> -->
          </a>
        </li>
        <li>
          <a
            href="https://leap.thoughtjumper.com/"
            class="hover:underline me-4 md:me-6 flex justify-center items-center"
            target="_blank"
          >
            <div class="footer_image3"></div>
            <!-- <img
              src="../assets/img/1 (1).png"
              height="50px"
              width="50px"
              alt=""
            /> -->
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
.footer_image {
  background-image: url("../assets/img/tj.png");
  height: 50px;
  width: 50px;
  background-size: contain;
  background-position: center;
}
.footer_image3 {
  background-image: url("../assets/img/leap.png");
  height: 30px;
  width: 50px;
  background-size: contain;
  background-position: center;
}
.footer_image2 {
  background-image: url("../assets/img/ed.png");
  height: 50px;
  width: 50px;
  background-size: contain;
  background-position: center;
}
</style>
