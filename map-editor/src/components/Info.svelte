<script lang="ts">
    import Map from "./Map.svelte";
    import Tiles from "./Tiles.svelte";
    import World from "./World.svelte";

    enum InfoTab {
        World,
        Map,
        Tiles,
    }

    const tabs: [InfoTab, string][] = [
        [InfoTab.World, "World"],
        [InfoTab.Map, "Map"],
        [InfoTab.Tiles, "Tiles"],
    ];

    let selectedTab = InfoTab.World;

    function selectTab(tab: InfoTab) {
        selectedTab = tab;
    }
</script>

<div class="flex flex-col h-full w-full">
    <div class="tabs my-2">
        {#each tabs as tab}
            <a
                on:click={() => selectTab(tab[0])}
                class="tab tab-lifted {selectedTab === tab[0]
                    ? 'tab-active'
                    : ''} ">{tab[1]}</a
            >
        {/each}
        <span class="grow border-b border-base-300" />
    </div>
    <div class="flex flex-col flex-grow">
        {#if selectedTab == InfoTab.World}
            <World />
        {:else if selectedTab == InfoTab.Map}
            <Map />
        {:else if selectedTab == InfoTab.Tiles}
            <Tiles />
        {/if}
    </div>
</div>
