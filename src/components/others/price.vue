<template>
  <section class="pb-32 pt-16 dark:bg-gray-800 dark:text-gray-100 bg-[#F4E8FF]">
    <div class="container mx-auto px-4">
      <div class="mx-auto mb-12 max-w-2xl text-center">
        <span class="text-3xl font-bold dark:text-violet-400">{{
          $t("pricing")
        }}</span>
        <h2 class="pt-8 text-lg text-gray-400">
          {{ $t("chooseYourBestPlan") }}
        </h2>
      </div>
      <div class="-mx-4 flex flex-wrap items-stretch">
        <div class="mb-8 flex w-full sm:px-4 md:w-1/2 lg:mb-0 lg:w-1/3">
          <div
            class="flex flex-grow flex-col space-y-6 rounded border-2 bg-gray-300 p-6 sm:p-8"
          >
            <div class="space-y-2">
              <h4 class="text-2xl font-bold">{{ $t("beginner") }}</h4>
              <span class="text-6xl font-bold">{{ $t("free") }}</span>
            </div>
            <p class="mt-3 leading-relaxed dark:text-gray-400">
              Etiam ac convallis enim, eget euismod dolor.
            </p>
            <ul class="mb-6 flex-1 dark:text-gray-400">
              <li class="mb-2 flex space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-6 w-6 flex-shrink-0 dark:text-violet-400"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Aenean quis</span>
              </li>
              <li class="mb-2 flex space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-6 w-6 flex-shrink-0 dark:text-violet-400"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Morbi semper</span>
              </li>
              <li class="mb-2 flex space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-6 w-6 flex-shrink-0 dark:text-violet-400"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Tristique enim nec</span>
              </li>
            </ul>
            <button
              type="button"
              class="inline-block rounded px-5 py-3 text-center font-semibold tracking-wider dark:bg-violet-400 dark:text-gray-900"
            >
              {{ $t("getStarted") }}
            </button>
          </div>
        </div>
        <div class="mb-8 flex w-full sm:px-4 md:w-1/2 lg:mb-0 lg:w-1/3">
          <div
            class="flex flex-grow flex-col space-y-6 rounded border-2 bg-gray-300 p-6 shadow sm:p-8"
          >
            <div class="space-y-2">
              <h4 class="text-2xl font-bold">{{ $t("pro") }}</h4>
              <span class="text-6xl font-bold"
                >$2
                <span class="text-sm tracking-wide">/month</span>
              </span>
            </div>
            <p class="leading-relaxed">
              Morbi cursus ut sapien sit amet consectetur.
            </p>
            <ul class="flex-1 space-y-2">
              <li class="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-6 w-6 flex-shrink-0"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Everything in Free</span>
              </li>
              <li class="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-6 w-6 flex-shrink-0"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Phasellus tellus</span>
              </li>
              <li class="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-6 w-6 flex-shrink-0"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Praesent faucibus</span>
              </li>
              <li class="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-6 w-6 flex-shrink-0"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Aenean et lectus blandit</span>
              </li>
            </ul>
            <a
              rel="noopener noreferrer"
              href="#"
              class="inline-block w-full rounded px-5 py-3 text-center font-bold tracking-wider dark:bg-gray-800 dark:text-violet-400"
              >{{ $t("getStarted") }}</a
            >
          </div>
        </div>
        <div class="mb-8 flex w-full sm:px-4 md:w-1/2 lg:mb-0 lg:w-1/3">
          <div
            class="flex flex-grow flex-col space-y-6 rounded border-2 bg-gray-300 p-6 shadow sm:p-8"
          >
            <div class="space-y-2">
              <h4 class="text-2xl font-bold">{{ $t("team") }}</h4>
              <span class="text-6xl font-bold"
                >$7
                <span class="text-sm tracking-wide">/month</span>
              </span>
            </div>
            <p class="leading-relaxed dark:text-gray-400">
              Phasellus ultrices bibendum nibh in vehicula.
            </p>
            <ul class="space-y-2 dark:text-gray-400">
              <li class="flex items-start space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-6 w-6 flex-shrink-0 dark:text-violet-400"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Everything in Pro</span>
              </li>
              <li class="flex items-start space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-6 w-6 flex-shrink-0 dark:text-violet-400"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Fusce sem ligula</span>
              </li>
              <li class="flex items-start space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-6 w-6 flex-shrink-0 dark:text-violet-400"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Curabitur dictum</span>
              </li>
              <li class="flex items-start space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-6 w-6 flex-shrink-0 dark:text-violet-400"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Duis odio eros</span>
              </li>
              <li class="flex items-start space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-6 w-6 flex-shrink-0 dark:text-violet-400"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Vivamus ut lectus ex</span>
              </li>
            </ul>
            <a
              rel="noopener noreferrer"
              href="#"
              class="inline-block w-full rounded px-5 py-3 text-center font-semibold tracking-wider dark:bg-violet-400 dark:text-gray-900"
              >{{ $t("getStarted") }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
