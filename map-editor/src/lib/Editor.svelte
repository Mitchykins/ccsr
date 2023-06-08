<script lang="ts">
  let count: number = 0;
  const increment = () => {
    count += 1;
  };
</script>

<div class="flex flex-row h-full">
  <div class="basis-1/4 bg-slate-100 h-full">navigation</div>
  <div class="basis-1/2 bg-slate-300">Map viewer</div>
  <div class="basis-1/4 bg-slate-100">properties</div>
</div>
