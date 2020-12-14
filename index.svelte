<script lang="ts">
    import { onMount, onDestroy } from 'svelte';

    let iid: any | null = null;
    let date: Date = new Date();

    function tick(): void {
        date = new Date();
    }

    onMount(function (): void {
        iid = setInterval(tick, 1000);
    });

    onDestroy(function (): void {
        clearInterval(iid!);
    });
</script>

<h1>Typescript?</h1>
<pre>{date}</pre>
