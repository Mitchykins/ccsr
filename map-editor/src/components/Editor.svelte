<script lang="ts">
  import { Editor } from "../lib/editor";
  import { onMount } from "svelte";
  import Info from "./Info.svelte";

  let editor = new Editor();

  onMount(async () => {
    const episode = 1;
    const url = `maps/${episode}/map${episode}.json`;
    await editor.loadWorld(url);
    editor = editor;
  });
</script>

{#if editor.world}
  <div class="flex flex-row h-full">
    <div class="basis-1/2 bg-base-200" />
    <div class="basis-1/2">
      <Info />
    </div>
  </div>
{/if}
