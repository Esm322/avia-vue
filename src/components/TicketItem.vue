<template>
  <li class="tickets-list__item ticket">
    <span class="ticket__price">
      {{ price }} Р
    </span>

    <img src="img/s7.png" alt="company" class="ticket__img">

    <span class="ticket__something-time span-text">
      MOW – HKT
    </span>

    <span class="ticket__time-spending span-text">
      В пути
    </span>

    <span class="ticket__transfers span-text">
      {{ stops.length !== 0 ? stops.length : '' }} пересадки
    </span>

    <p class="ticket__something-time-text p-text">
      {{ date }}
    </p>

    <p class="ticket__time-spending-text p-text">
      21ч 15м
    </p>

    <ul style="display: flex;">
      <li class="ticket__transfers-text p-text"
      v-for="stop in stops" :key="stop">
        {{ stop }}&nbsp;
      </li>
    </ul>

    <span class="ticket__something-time span-text">
      MOW – HKT
    </span>

    <span class="ticket__time-spending span-text">
      В пути
    </span>

    <span class="ticket__transfers span-text">
      1 пересадка
    </span>

    <p class="ticket__something-time-text p-text">
      11:20 – 00:50
    </p>

    <p class="ticket__time-spending-text p-text">
      13ч 30м
    </p>

    <p class="ticket__transfers-text p-text">
      HKG
    </p>
  </li>
</template>

<script>
export default {
  props: ['price', 'stops', 'date'],
};
</script>
