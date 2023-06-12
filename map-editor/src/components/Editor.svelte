<script lang="ts">
  import { Editor } from "../lib/editor";
  import { onMount } from "svelte";
  import Info from "./Info.svelte";
  import { ObservablePoint } from "pixi.js";

  let viewerElement: HTMLDivElement;
  let editor = new Editor();

  onMount(async () => {
    const episode = 1;
    const root = `maps/${episode}/`;
    const worldURL = root + `map${episode}.json`;
    const texJSON = root + `ep${episode}.json`;
    await editor.loadWorld(worldURL);
    await editor.viewer.loadTextures(texJSON);

    editor = editor;
  });

  function onViewRender(node: any) {
    const div = document.getElementById("viewer");
    editor.mountViewer(div);

    // add resize observer
    const observer = new ResizeObserver((entries) => {
      editor.viewer.onResize();
    });

    observer.observe(node);
  }
</script>

{#if editor.world}
  <div class="flex flex-row h-full">
    <div class="basis-1/2 bg-base-200">
      <div
        bind:this={viewerElement}
        use:onViewRender
        id="viewer"
        class="h-full"
      >
        <!-- Hello viewer! -->
      </div>
    </div>
    <div class="basis-1/2">
      <Info />
    </div>
  </div>
{/if}
