<script lang="ts">
  import type { CCSRWorld } from "src/map";
  import { onMount } from "svelte";

  const episode = 4;
  let world: CCSRWorld;

  async function loadWorld(episode: number): Promise<CCSRWorld> {
    const request = await fetch(`maps/${episode}/map${episode}.json`);
    return await request.json();
  }

  onMount(async () => {
    world = await loadWorld(episode);
  });
</script>

{#if world}
  <div class="flex flex-row h-full">
    <div class="basis-1/4 overflow-scroll">
      navigation
      {#each world.maps as map}
        <div class="flex flex-col">
          <button class="btn btn-square">
            {map.name}
          </button>
        </div>
      {/each}
    </div>
    <div class="basis-1/2">Map viewer</div>
    <div class="basis-1/4">properties</div>
  </div>
{/if}
