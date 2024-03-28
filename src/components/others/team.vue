<template>
  <section class="bg-[#F4E8FF] py-32 dark:bg-gray-800 dark:text-gray-100">
    <div
      class="container mx-auto flex flex-col items-center justify-center space-y-8 px-4"
    >
      <h1 class="text-center text-5xl font-bold leading-none tracking-wide">
        {{ $t("tuanDui") }}
      </h1>
      <p class="max-w-3xl tracking-wider text-center text-xl text-gray-400 dark:text-gray-400">
        At a assumenda quas cum earum ut itaque commodi saepe rem aspernatur
        quam natus quis nihil quod, hic explicabo doloribus magnam neque,
        exercitationem eius sunt!
      </p>
      <div class="grid lg:grid-cols-4 grid-cols-2 gap-4 justify-center">
        <!-- 1 -->
        <div class="flex flex-col justify-center text-center">
          <img
            alt=""
            class="mb-4 flex-shrink-0 self-center rounded-full bg-cover bg-center dark:bg-gray-500"
            src="../../assets/svg/op/op1.svg"
          />
          <p class="text-2xl font-semibold leading-tight">tillicofess</p>
          <p class="text-md dark:text-gray-400">{{ $t("wangYeSheJiShi") }}</p>
        </div>
        <!-- 2 -->
        <div class="flex flex-col justify-center text-center">
          <img
            alt=""
            class="mb-4 flex-shrink-0 self-center rounded-full bg-cover bg-center dark:bg-gray-500"
            src="../../assets/svg/op/op2.svg"
          />
          <p class="text-2xl font-semibold leading-tight">tillicofess</p>
          <p class="text-md dark:text-gray-400">{{ $t("wangYeSheJiShi") }}</p>
        </div>
        <!-- 3 -->
        <div class="flex flex-col justify-center text-center">
          <img
            alt=""
            class="mb-4 flex-shrink-0 self-center rounded-full bg-cover bg-center dark:bg-gray-500"
            src="../../assets/svg/op/op3.svg"
          />
          <p class="text-2xl font-semibold leading-tight">tillicofess</p>
          <p class="text-md dark:text-gray-400">{{ $t("wangYeSheJiShi") }}</p>
        </div>
        <!-- 4 -->
        <div class="flex flex-col justify-center text-center">
          <img
            alt=""
            class="mb-4 flex-shrink-0 self-center rounded-full bg-cover bg-center dark:bg-gray-500"
            src="../../assets/svg/op/op4.svg"
          />
          <p class="text-2xl font-semibold leading-tight">tillicofess</p>
          <p class="text-md dark:text-gray-400">{{ $t("wangYeSheJiShi") }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
