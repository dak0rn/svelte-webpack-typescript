import Index from './index.svelte';

document.addEventListener('DOMContentLoaded', function () {
    console.log('booting');
    new Index({
        target: document.body
    });
});
