
<script>
import Topbar from "./components/Topbar.svelte";
</script>
<Topbar />
<slot></slot>

<style>
    :global(*) {
        font-family: Roboto, sans-serif;
    }
    :global(body) {
        margin: 0;
        padding: 0;
    }
    :global(app), :global(body), :global(html) {
        display: block !important;
        height: auto !important;
        width: auto !important;
        position: static !important;
    }
</style>
