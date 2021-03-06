<template>
  <div>
    <v-row no-gutters>
      <v-col cols="12" md="8" offset-md="2" class="text-center">
        <div class="home__wrapper">
          <div class="home__wrapper--content">
            <h2 class="home__wrapper--title">{{ title }}</h2>
            <p class="home__wrapper--description mt-4">{{ description }}</p>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data: () => ({
    title: "All about collections",
    description:
      "80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the wind. 80 days around the world, no we won’t say a word before the ship is really back. Round, round, all around the world. Round, all around the world. Round, all around the world. Round, all Taround the world.\n\nThundercats are on the move, Thundercats are loose. Feel the magic, hear the roar, Thundercats are loose. Thunder, thunder, thunder, Thundercats! Thunder, thunder, thunder, Thundercats! Thunder, thunder, thunder, Thundercats! Thunder, thunder, thunder, Thundercats! Thundercats!\n\nChildren of the sun, see your time has just begun, searching for your ways, through adventures every day. Every day and night, with the condor in flight, with all your friends in tow, you search for the Cities of Gold. Ah-ah-ah-ah-ah… wishing for The Cities of Gold. Ah-ah-ah-ah-ah… some day we will find The Cities of Gold. Do-do-do-do ah-ah-ah, do-do-do-do, Cities of Gold. Do-do-do-do, Cities of Gold. Ah-ah-ah-ah-ah… some day we will find The Cities of Gold. ",
  }),
  components: {},
};
</script>

<style lang="scss" scoped>
.home__wrapper {
  &--title {
    font-family: Lato;
    font-style: normal;
    font-weight: 600;
    font-size: 44.7539px;
    line-height: 54px;
    text-align: center;
    color: #2c304b;
  }
  &--para {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
  }
}
</style>
