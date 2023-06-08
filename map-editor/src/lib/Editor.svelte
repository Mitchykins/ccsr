<script lang="ts">
  import type { CCSRMap, CCSRWorld } from "src/map";
  import { onMount } from "svelte";

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
    <div class="basis-1/4 overflow-scroll">
      navigation
      <div class="flex flex-col">
        <details class="dropdown mb-32">
          <summary class="m-1 btn">Select Map</summary>
          <ul
            class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
          >
            {#each world.maps as map}
              <li><a on:click={() => (selectedMap = map)}>{map.name}</a></li>
            {/each}
          </ul>
        </details>
      </div>
    </div>
    <div class="basis-1/2 bg-base-200">Map viewer</div>
    <div class="basis-1/4">
      {#if selectedMap}
        Editing map: {selectedMap.name}
        <code>
          {selectedMap.data}
        </code>
      {/if}
    </div>
  </div>
{/if}
