<script lang="ts">
  const currentDate = new Date();
  const currentHour = currentDate.getHours();

  let greeting = "";

  if(currentHour < 12) {
    greeting = "Good morning";
  } else if(currentHour < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good night";
  }
</script>

<h1 class="text-3xl font-bold">{ greeting }</h1>