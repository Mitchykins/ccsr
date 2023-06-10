<script lang="ts">
  import type { CCSRMap, CCSRWorld } from "src/map";
  import { onMount } from "svelte";
  import Info from "./Info.svelte";

  const episode = 1;
  let world: CCSRWorld;
  let selectedMap: CCSRMap;

  async function loadWorld(episode: number): Promise<CCSRWorld> {
    const request = await fetch(`maps/${episode}/map${episode}.json`);
    return await request.json();
  }

  onMount(async () => {
    world = await loadWorld(episode);
    selectedMap = world.maps[0];
  });
</script>

{#if world}
  <div class="flex flex-row h-full">
    <div class="basis-1/2 bg-base-200" />
    <div class="basis-1/2">
      <Info />
    </div>
  </div>
{/if}
