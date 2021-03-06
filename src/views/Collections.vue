<template>
  <div class="collections">
    <v-row no-gutters>
      <v-col md="6" cols="12" sm="12" class="">
        <div class="left__content--wrapper pr-10">
          <h2 class="left__content__wrapper--title">
            {{ getTitle }}
          </h2>
          <p class="left__content__wrapper--desc mt-4">{{ getDescb }}</p>
        </div>
      </v-col>
      <v-col cols="12" sm="12" md="6">
        <div class="right__content--wrapper">
          <div class="right__content__wrapper--inner">
            <v-card
              v-for="(block, index) in getAllCollections.blocks"
              :key="index"
              :class="`block__card block__card${block.id}`"
              @click="handleClick(block)"
              :style="
                block.value === 100 ? 'background: purple' : 'background: grey'
              "
            >
              {{ block.value }}
            </v-card>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-dialog v-model="dialog" max-width="350">
      <v-card>
        <v-card-text class="pt-5">
          Good job on completing your collection!
        </v-card-text>

        <v-card-actions>
          <v-btn color="primary darken-1" text @click="dialog = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "Collections",

  data: () => ({
    dialog: false,
    blockBg: false,
  }),

  computed: {
    ...mapGetters(["getAllCollections"]),
    getTitle() {
      const title = this.getAllCollections.title;
      return title;
    },
    getDescb() {
      const desc = this.getAllCollections.description;
      return desc;
    },
  },

  methods: {
    ...mapMutations(["SET_BLOCK_VALUE"]),
    handleClick(block) {
      this.SET_BLOCK_VALUE(block);
      let allBlocks = this.getAllCollections.blocks;
      const filter = allBlocks.every((collection) => collection.value === 100);
      if (filter) {
        this.dialog = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.collections {
  .left__content--wrapper {
    .left__content__wrapper--title {
      font-family: Lato;
      font-style: normal;
      font-weight: 600;
      font-size: 44.7539px;
      line-height: 54px;
      text-align: center;
      color: #2c304b;
    }
    .left__content__wrapper--desc {
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
  .right__content--wrapper {
    .right__content__wrapper--inner {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      .block__card {
        text-align: center;
        min-height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 49%;
        width: 100%;
        color: #fff;
        border-radius: 5px;
        margin-bottom: 10px;
        &:nth-child(odd) {
          margin-right: 10px;
          @media (max-width: 768px) {
            margin-right: 2px;
          }
        }
      }
    }
  }
}
</style>
