<template>
  <div>
    <div class="flex flex-col">
      <!-- begin 1 yes-->
      <div class="back flex flex-col">
        <div class="px-8 pb-24 pt-32 sm:px-16">
          <div class="text-6xl font-bold text-blue-800">Art Mind</div>
        </div>
        <div class="relative my-4 flex w-full px-8 sm:px-16 lg:h-128">
          <div class="mb-8 w-full rounded-3xl bg-white bg-opacity-80 lg:w-3/4">
            <!-- begin header -->
            <div class="overflow-hidden p-4">
              <transition name="slide">
                <div v-if="currentnum === 0" key="1" class="text-2xl">
                  Content 1
                </div>
              </transition>
              <transition name="slide">
                <div v-if="currentnum === 1" key="2" class="text-2xl">
                  Content 2
                </div>
              </transition>
              <transition name="slide">
                <div v-if="currentnum === 2" key="3" class="text-2xl">
                  Content 3
                </div>
              </transition>
              <transition name="slide">
                <div v-if="currentnum === 3" key="4" class="text-2xl">
                  Content 4
                </div>
              </transition>
            </div>
            <!-- begin text -->
            <div class="h-72 w-1/2 break-all p-4">
              <transition name="text">
                <div v-if="currentnum === 0" key="2">Content 1</div>
              </transition>
              <transition name="text">
                <div v-if="currentnum === 1" key="2">Content 2</div>
              </transition>
              <transition name="text">
                <div v-if="currentnum === 2" key="2">Content 3</div>
              </transition>
              <transition name="text">
                <div v-if="currentnum === 3" key="2">Content 4</div>
              </transition>
            </div>
          </div>
          <!-- begin img -->
          <div
            class="absolute bottom-8 right-20 aspect-square w-1/4 min-w-72 max-lg:hidden"
          >
            <transition name="inner">
              <div v-if="currentnum === 0" key="1" class="h-full w-full">
                <img src="../assets/img/0.jpg" alt="" class="h-full w-full" />
              </div>
            </transition>
            <transition name="inner">
              <div v-if="currentnum === 1" key="1" class="h-full w-full">
                <img src="../assets/img/6.png" alt="" class="h-full w-full" />
              </div>
            </transition>
            <transition name="inner">
              <div v-if="currentnum === 2" key="1" class="h-full w-full">
                <img src="../assets/img/7.png" alt="" class="h-full w-full" />
              </div>
            </transition>
            <transition name="inner">
              <div v-if="currentnum === 3" key="1" class="h-full w-full">
                <img src="../assets/img/8.jpg" alt="" class="h-full w-full" />
              </div>
            </transition>
          </div>
        </div>
      </div>
      <!-- begin effects yes-->
      <article class="flex flex-col px-4 sm:px-8">
        <div class="mx-auto pt-24 text-center text-3xl font-bold">
          AI processing digital humans and effects
        </div>
        <div class="mx-auto max-w-3xl pt-8 text-center text-lg text-gray-400">
          Whenever you are ready, just hit publish to turn your site sketches
          into an actual designs. No creating, no skills, no reshaping.
        </div>
        <div class="mx-auto grid grid-cols-2 gap-4 px-16 pt-12 lg:gap-8">
          <div
            class="rounded-md border-2 border-gray-200 bg-gradient-to-t from-gray-200 p-4 text-left"
          >
            <div class="py-2 text-xl font-bold">数字人</div>
            <p class="break-words text-gray-400">
              1222222222222222222222222222222222222
            </p>
            <div class="flex justify-center">
              <img
                src="../assets/img/feature-post-02.png"
                class="mt-4 max-w-48"
              />
            </div>
          </div>
          <div
            class="rounded-md border-2 border-gray-200 bg-gradient-to-t from-gray-200 p-4 text-left"
          >
            <div class="py-2 text-xl font-bold">艺术创作</div>
            <p class="break-words text-gray-400">
              122222222222222222222222222222222222222
            </p>
            <div class="flex justify-center">
              <img
                src="../assets/img/feature-post-03.png"
                class="mt-4 max-w-48"
              />
            </div>
          </div>
          <div
            class="rounded-md border-2 border-gray-200 bg-gradient-to-t from-gray-200 p-4 text-left"
          >
            <div class="py-2 text-xl font-bold">互动社区</div>
            <p class="break-words text-gray-400">
              12222222222222222222222222222222222222222
            </p>
            <div class="flex justify-center">
              <img
                src="../assets/img/feature-post-04.png"
                class="mt-4 max-w-48"
              />
            </div>
          </div>
          <div
            class="rounded-md border-2 border-gray-200 bg-gradient-to-t from-gray-200 p-4 text-left"
          >
            <div class="py-2 text-xl font-bold">互动社区</div>
            <p class="break-words text-gray-400">
              12222222222222222222222222222222222222222
            </p>
            <div class="flex justify-center">
              <img
                src="../assets/img/feature-post-05.png"
                class="mt-4 max-w-48"
              />
            </div>
          </div>
        </div>
      </article>
      <!-- begin team yes-->
      <team />
      <!-- begin function tes-->
      <article class="flex flex-col items-center bg-gray-50 px-4 py-16 sm:px-8">
        <div class="mx-auto text-center text-3xl font-bold">Function</div>
        <div class="mx-auto max-w-3xl pt-8 text-center text-lg text-gray-400">
          Effortlessly transform your sketches into polished designs with our
          innovative AI processing. No skills required, no reshaping needed.
        </div>
        <div
          class="mx-auto mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-8"
        >
          <!-- 1 -->
          <div
            class="cursor-pointer rounded-md border-2 border-gray-200 p-2 hover:bg-gray-100"
            :class="{ 'rotate-3 border-gray-300 bg-gray-100': funpage === 0 }"
            @click="changepage(0)"
          >
            <div class="py-2 text-xl font-bold">aiChat</div>
            <p class="max-w-48 break-words text-gray-400">
              1111111111111111111111111111111111111111111111111111111111111
            </p>
          </div>
          <!-- 2 -->
          <div
            class="cursor-pointer rounded-md border-2 border-gray-200 p-2 hover:bg-gray-100"
            :class="{ 'rotate-3 border-gray-300 bg-gray-100': funpage === 1 }"
            @click="changepage(1)"
          >
            <div class="py-2 text-xl font-bold">aiChat</div>
            <p class="max-w-48 break-words text-gray-400">
              1111111111111111111111111111111111111111111111111111111111111
            </p>
          </div>
          <!-- 3 -->
          <div
            class="cursor-pointer rounded-md border-2 border-gray-200 p-2 hover:bg-gray-100"
            :class="{ 'rotate-3 border-gray-300 bg-gray-100': funpage === 2 }"
            @click="changepage(2)"
          >
            <div class="py-2 text-xl font-bold">aiChat</div>
            <p class="max-w-48 break-words text-gray-400">
              1111111111111111111111111111111111111111111111111111111111111
            </p>
          </div>
          <!-- 4 -->
          <div
            class="cursor-pointer rounded-md border-2 border-gray-200 p-2 hover:bg-gray-100"
            :class="{ 'rotate-3 border-gray-300 bg-gray-100': funpage === 3 }"
            @click="changepage(3)"
          >
            <div class="py-2 text-xl font-bold">aiChat</div>
            <p class="max-w-48 break-words text-gray-400">
              1111111111111111111111111111111111111111111111111111111111111
            </p>
          </div>
        </div>
        <div class="mx-auto mt-8 max-w-120">
          <img
            src="../assets/img/feature-post-02.png"
            class="aspect-square"
            v-if="funpage === 0"
          />
          <img
            src="../assets/img/feature-post-03.png"
            class="aspect-square"
            v-if="funpage === 1"
          />
          <img
            src="../assets/img/feature-post-04.png"
            class="aspect-square"
            v-if="funpage === 2"
          />
          <img
            src="../assets/img/feature-post-05.png"
            class="aspect-square"
            v-if="funpage === 3"
          />
        </div>
      </article>
      <!-- begin stats yes-->
      <stats />
      <!-- begin footer no-->
      <footer class="footer bg-gray-400 p-10 text-base-content">
        <nav>
          <h6 class="footer-title">Services</h6>
          <a class="link-hover link">Branding</a>
          <a class="link-hover link">Design</a>
          <a class="link-hover link">Marketing</a>
          <a class="link-hover link">Advertisement</a>
        </nav>
        <nav>
          <h6 class="footer-title">Company</h6>
          <a class="link-hover link">About us</a>
          <a class="link-hover link">Contact</a>
          <a class="link-hover link">Jobs</a>
          <a class="link-hover link">Press kit</a>
        </nav>
        <nav>
          <h6 class="footer-title">Social</h6>
          <div class="grid grid-flow-col gap-4">
            <a
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="fill-current"
              >
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                ></path></svg
            ></a>
            <a
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="fill-current"
              >
                <path
                  d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                ></path></svg
            ></a>
            <a
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="fill-current"
              >
                <path
                  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                ></path></svg
            ></a>
          </div>
        </nav>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import team from "@/components/others/team.vue";
import stats from "@/components/others/stats.vue";

const currentnum = ref(0);
const funpage = ref(0);

// 定义函数,每3秒执行一次,currentnum递增,大于4时重置为1
const updateCurrentNum = () => {
  currentnum.value++;
  currentnum.value = currentnum.value % 4;
};

const changepage = (page) => {
  funpage.value = page;
};

// 每3秒调用一次updateCurrentNum函数
setInterval(updateCurrentNum, 4000);
</script>

<style scoped>
/* Your scoped styles go here */
@import "../assets/components/homeP.css";
</style>
