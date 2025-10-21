<template>
  <div class="grid grid-cols-2 gap-4 mt-8">
    <div class="border border-zinc-300 rounded">
      <a 
        class="w-64 h-36 flex flex-col items-center justify-center rounded" 
        href="https://report.serioplast.com/whistleblowing" 
        target="_blank">
        <img
          src="/images/Serioplast.svg"
          class="w-1/4 mb-1"
          :title="$t('report.serioplast')"
          :alt="$t('report.serioplast')"
        />
        {{ $t('report.link_1') }}
      </a>
    </div>
    <div class="border border-zinc-300 rounded">
      <a 
        class="w-64 h-36 flex flex-col items-center justify-center rounded" 
        href="https://report.serioplast.com/DEI" 
        target="_blank">
        <img
          src="/images/Serioplast.svg"
          class="w-1/4 mb-1"
          :title="$t('report.serioplast')"
          :alt="$t('report.serioplast')"
        />
        {{ $t('report.link_2') }}
      </a>
    </div>
  </div>
</template>
