<script lang="ts">
    // your script goes here

    type propsType = {
        message: string;
    }

    let props:propsType = $props();
</script>

<style>
    /* your styles go here */
</style>

<p>🎉 {props.message} 🍾</p>


<!-- markup (zero or more items) goes here -->