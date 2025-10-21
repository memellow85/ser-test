<template>
  <div class="w-screen h-screen flex flex-col items-center justify-center bg-zinc-100">
    <img
      src="/images/Serioplast.svg"
      class="w-1/5 mb-2"
      :title="$t('report.serioplast')"
      :alt="$t('report.serioplast')"
    />
    <h2>{{ $t('report.report') }}</h2>
    <slot />
  </div>
</template>
