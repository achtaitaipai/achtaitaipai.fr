<script lang="ts">
  const SPRITES = [
    "🕛",
    "🕐",
    "🕑",
    "🕒",
    "🕓",
    "🕔",
    "🕕",
    "🕖",
    "🕗",
    "🕘",
    "🕙",
    "🕚",
  ];
  let current = 0;

  function modulo(value: number, mod: number) {
    return ((value % mod) + mod) % mod;
  }

  function update(incrementation: number) {
    current = modulo(current + incrementation, SPRITES.length);
  }
  export let lessBtn = false;
</script>

<figure class="">
  <div class="anim">
    {#if lessBtn}
      <button on:click={() => update(-1)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          width="1em"
          height="1em"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
        </svg>
      </button>
    {/if}
    <span class="display">{SPRITES[current]}</span>
    <button on:click={() => update(1)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        width="1em"
        height="1em"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
    </button>
  </div>
</figure>

<style>
  figure {
    max-width: var(--popout-width);
    margin-inline: auto;
    margin-block: var(--space-xl);
    padding-block: var(--space-m);
    border: 1px solid var(--gray-6);
    text-align: center;
  }
  .anim {
    --main-width: var(--popout-width);
    display: inline-grid;
    justify-content: center;
    grid-template-columns: 1fr auto 1fr;
    grid-auto-flow: column;
    gap: var(--space-m);
    place-items: center;
  }

  button {
    border: 1px solid var(--gray-6);
    background: var(--gray-2);
    height: auto;
    aspect-ratio: 1;
    font-size: var(--step-1);
    color: var(--gray-11);
    transition: all 0.2s;
    border-radius: 99999em;
  }

  button:where(:hover, :focus-visible) {
    background-color: var(--gray-1);
    border-color: var(--gray-8);
    color: var(--gray-12);
  }

  button:last-child {
    grid-column: -2;
  }

  .display {
    font-size: var(--step-5);
    grid-column: 2;
  }
</style>
