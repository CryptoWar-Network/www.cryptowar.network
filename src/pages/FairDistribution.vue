<template>
  <!-- Breadcrumb Area Start -->
  <section class="breadcrumb-area buy">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 banner-box">
          <img src="../assets/images/buy_banner.png" class="banner" />
        </div>
      </div>
      <div class="current-round">
        <div class="row current-box">
          <div class="col-lg-8" v-if="defaultAccount">
            <!-- <div class="">
              <h3 class="heading-title" v-if="this.currentRound">
                <VueCountdown
                  :time="this.currentRound.claimAt"
                  v-slot="{ hours, minutes, seconds }"
                >
                  ⏰  End in
                  {{ hours }}:{{ minutes }}:{{ seconds }}.
                </VueCountdown>
              </h3>
            </div> -->
            <div v-if="this.currentRound" class="current-buy">
              <Round
                :canClaim="this.currentRound.canClaim"
                :maxVolume="this.currentRound.maxVolume"
                :round="this.currentRound.round"
                :totalDeposit="this.currentRound.totalDeposit"
                :orders="this.currentRound.orders"
                :maxDeposit="this.currentRound.maxDeposit"
                :claimAt="this.currentRound.claimAt"
                :yourDeposit="this.currentRound.yourDeposit"
                :amountTokenSale="this.currentRound.amountTokenSale"
                :price="this.currentRound.price"
                :minDeposit="this.currentRound.minDeposit"
              />
            </div>

            <div class="help-content">
              <div style="margin: 15px 0" v-if="timeLeftToStart > 0">
                <VueCountdown
                  :time="timeLeftToStart"
                  v-slot="{ days, hours, minutes, seconds }"
                >
                  ⏰ Fair distribution will be available in {{ days }} days
                  {{ hours }} hours, {{ minutes }} minutes,
                  {{ seconds }} seconds.
                </VueCountdown>
              </div>
              <div class="h-inner-content" v-if="timeLeftToStart < 0">
                <div class="container spinner">
                  <div
                    class="spinner-grow text-primary"
                    role="status"
                    v-if="activeRounds.length == 0 && timeLeftToStart < 0"
                    style="margin-bottom: 20px"
                  >
                    <span class="sr-only">Loading...</span>
                  </div>
                </div>

                <ul
                  class="nav nav-pills nav-fill"
                  v-if="activeRounds.length > 0"
                >
                  <li class="nav-item tab-item" @click="currentTab = 'active'">
                    <a
                      :class="`nav-link ${
                        currentTab === 'active' ? 'active' : ''
                      }`"
                      >Active</a
                    >
                  </li>
                  <li
                    class="nav-item tab-item"
                    @click="currentTab = 'finished'"
                  >
                    <a
                      :class="`nav-link ${
                        currentTab === 'finished' ? 'active' : ''
                      }`"
                      >Finished</a
                    >
                  </li>
                </ul>
                <div v-if="currentTab === 'active'">
                  <div v-for="round in activeRounds" :key="round.round">
                    <Round
                      :canClaim="round.canClaim"
                      :maxVolume="round.maxVolume"
                      :round="round.round"
                      :totalDeposit="round.totalDeposit"
                      :orders="round.orders"
                      :maxDeposit="round.maxDeposit"
                      :claimAt="round.claimAt"
                      :yourDeposit="round.yourDeposit"
                      :amountTokenSale="round.amountTokenSale"
                      :price="round.price"
                      :minDeposit="round.minDeposit"
                      :isFinished="false"
                    />
                  </div>
                </div>
                <div v-if="currentTab === 'finished'">
                  <div v-for="round in finishedRounds" :key="round.round">
                    <Round
                      :canClaim="round.canClaim"
                      :maxVolume="round.maxVolume"
                      :round="round.round"
                      :totalDeposit="round.totalDeposit"
                      :orders="round.orders"
                      :maxDeposit="round.maxDeposit"
                      :claimAt="round.claimAt"
                      :yourDeposit="round.yourDeposit"
                      :amountTokenSale="round.amountTokenSale"
                      :price="round.price"
                      :minDeposit="round.minDeposit"
                      :isFinished="true"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            :class="[defaultAccount ? 'col-lg-4' : 'col-lg-12 not-sticky']"
            class=""
          >
            <div class=""><h2 class="heading-title">&nbsp;</h2></div>
            <div class="note-box sticky-top">
              <div class="">
                <h5>xBlade Contract address</h5>
              </div>
              <div class="note-address">
                <a
                  style="font-size: 12px; color: #febc2c"
                  v-bind:href="`https://bscscan.com/token/0x27a339d9b59b21390d7209b78a839868e319301b`"
                  target="_blank"
                  >0x27a339d9b59b21390d7209b78a839868e319301b</a
                >
              </div>
              <div class="">
                <div class="note-content">
                  <ul>
                    <li style="list-style: none; font-weight: bold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 29.677 27.378"
                      >
                        <g
                          id="Group_14"
                          data-name="Group 14"
                          transform="translate(-568.663 4344.945)"
                        >
                          <path
                            id="Path_7"
                            data-name="Path 7"
                            d="M572.772-4325.131c0-.162,0-.285,0-.408q.057-7.961.114-15.923a3.291,3.291,0,0,1,2.3-3.288,4.332,4.332,0,0,1,1.307-.182c5.917-.012,11.834,0,17.751-.013a4.359,4.359,0,0,1,2.165.384,3.379,3.379,0,0,1,1.908,3c.044,1.408.017,2.818.01,4.227a.908.908,0,0,1-.987.938c-1.274.006-2.548,0-3.822,0h-.351v.393c0,4.632.009,9.265,0,13.9a4.338,4.338,0,0,1-2.59,4.144,4.884,4.884,0,0,1-2.228.4q-7.529-.008-15.058,0a4.4,4.4,0,0,1-4.026-2.21,3.9,3.9,0,0,1-.579-1.947c-.023-.829-.019-1.66-.009-2.49a.9.9,0,0,1,.953-.913c.927-.01,1.853,0,2.78,0Zm1.848,0h10.442c.827,0,1.148.328,1.151,1.164,0,.743-.027,1.488.021,2.229a2.531,2.531,0,0,0,3.685,2.031,2.565,2.565,0,0,0,1.4-2.447q0-9.034,0-18.068a5.391,5.391,0,0,1,.421-2.873H591.4q-7.472,0-14.944,0a2.394,2.394,0,0,0-.573.055,1.506,1.506,0,0,0-1.145,1.6q-.06,8.006-.114,16.012C574.619-4325.341,574.619-4325.256,574.619-4325.131Zm9.749,1.87H570.539c0,.543-.027,1.064.011,1.582a2.258,2.258,0,0,0,.239.824,2.575,2.575,0,0,0,2.531,1.442c3.833-.009,7.665,0,11.5,0,.1,0,.2-.011.36-.021A5.6,5.6,0,0,1,584.368-4323.261Zm12.088-15c0-1.16,0-2.3,0-3.448a.271.271,0,0,0-.011-.057,1.659,1.659,0,0,0-1.87-1.306,1.633,1.633,0,0,0-1.4,1.591c-.017.732-.006,1.466-.007,2.2,0,.335,0,.67,0,1.021Z"
                            fill="#fff"
                          />
                          <path
                            id="Path_8"
                            data-name="Path 8"
                            d="M644.051-4237.034c1.7,0,3.4,0,5.094,0a.9.9,0,0,1,.975.945.889.889,0,0,1-.714.865,2.19,2.19,0,0,1-.431.036q-4.92,0-9.841,0a2.282,2.282,0,0,1-.375-.022.9.9,0,0,1-.771-.99.885.885,0,0,1,.881-.829c.82-.013,1.64-.006,2.46-.006Z"
                            transform="translate(-61.278 -95.388)"
                            fill="#fff"
                          />
                          <path
                            id="Path_9"
                            data-name="Path 9"
                            d="M644.072-4268.887q2.518,0,5.036,0a.922.922,0,0,1,1,.866.91.91,0,0,1-.856.976c-.173.014-.347.006-.521.006q-4.863,0-9.725,0a.928.928,0,0,1-1.032-.894.921.921,0,0,1,1-.954q2.446-.005,4.891,0Z"
                            transform="translate(-61.269 -67.232)"
                            fill="#fff"
                          />
                          <path
                            id="Path_10"
                            data-name="Path 10"
                            d="M644.016-4203.379c-1.669,0-3.338,0-5.007,0a.911.911,0,0,1-1.025-.979.888.888,0,0,1,.775-.841,2.915,2.915,0,0,1,.375-.017q4.92,0,9.839,0a2.032,2.032,0,0,1,.488.04.9.9,0,0,1,.651.971.867.867,0,0,1-.8.812c-.442.026-.887.016-1.33.016Q646-4203.377,644.016-4203.379Z"
                            transform="translate(-61.275 -123.512)"
                            fill="#fff"
                          />
                          <path
                            id="Path_11"
                            data-name="Path 11"
                            d="M641.264-4298.9c-.761,0-1.523,0-2.284,0a.913.913,0,0,1-1.012-.909.916.916,0,0,1,.992-.935q2.3-.014,4.6,0a.939.939,0,0,1,1.02.945.935.935,0,0,1-1.029.9C642.787-4298.9,642.026-4298.9,641.264-4298.9Z"
                            transform="translate(-61.263 -39.068)"
                            fill="#fff"
                          />
                        </g>
                      </svg>
                      Rules
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12.66"
                        height="11.928"
                        viewBox="0 0 12.66 11.928"
                      >
                        <path
                          id="Polygon_3"
                          data-name="Polygon 3"
                          d="M5,0l5,8H0Z"
                          transform="translate(8.66 11.928) rotate(-150)"
                          fill="#fff"
                        />
                      </svg>
                      You can trade xBlade on
                      <a href="https://pancakeswap.finance/swap?outputCurrency=0x27a339d9b59b21390d7209b78a839868e319301b" target="_blank" rel="noopener noreferrer">PancakeSwap</a>,
                      <a href="https://app.1inch.io/#/56/swap/BNB/0x27a339d9b59b21390d7209b78a839868e319301b/import-token" target="_blank" rel="noopener noreferrer">1inch</a>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12.66"
                        height="11.928"
                        viewBox="0 0 12.66 11.928"
                      >
                        <path
                          id="Polygon_3"
                          data-name="Polygon 3"
                          d="M5,0l5,8H0Z"
                          transform="translate(8.66 11.928) rotate(-150)"
                          fill="#fff"
                        />
                      </svg>
                      You can only deposit once per round, you can deposit
                      future rounds.
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12.66"
                        height="11.928"
                        viewBox="0 0 12.66 11.928"
                      >
                        <path
                          id="Polygon_3"
                          data-name="Polygon 3"
                          d="M5,0l5,8H0Z"
                          transform="translate(8.66 11.928) rotate(-150)"
                          fill="#fff"
                        />
                      </svg>
                      You can only claim xBlade when claim is available for that
                      round in below finished tab. If the pool > round max
                      volume, you will get back BNB.
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12.66"
                        height="11.928"
                        viewBox="0 0 12.66 11.928"
                      >
                        <path
                          id="Polygon_3"
                          data-name="Polygon 3"
                          d="M5,0l5,8H0Z"
                          transform="translate(8.66 11.928) rotate(-150)"
                          fill="#fff"
                        />
                      </svg>
                      Read more at
                      <a
                        target="_blank"
                        href="https://wiki.cryptowar.network/tokenomics"
                        >xBlade Tokenomics</a
                      >, Join
                      <a target="_blank" href="https://t.me/cryptowarxblade"
                        >Telegram</a
                      >,
                      <a target="_blank" href="https://discord.gg/zS2khZ4F7K"
                        >Discord</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
              <div class="connect-wallet" v-if="!defaultAccount">
                <wallet-not-connect @connect-wallet="connectWallet" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Breadcrumb Area End -->
</template>

<script lang="ts">
import { mapActions, mapState } from "vuex";
import Round from "../components/Round.vue";
import WalletNotConnect from "../components/WalletNotConnect.vue";
import VueCountdown from "@chenfengyuan/vue-countdown";
import fromUnixTime from "date-fns/fromUnixTime";

export default {
  components: {
    Round,
    WalletNotConnect,
    VueCountdown,
  },
  data() {
    return {
      isOpen: false,
      currentTab: "active",
    };
  },
  computed: {
    ...mapState([
      "defaultAccount",
      "currentRound",
      "rounds",
      "tokenDistributionContract",
      "activeRounds",
      "finishedRounds",
      "saleStartTime",
    ]),
    timeLeftToStart() {
      // @ts-ignore
      return fromUnixTime(this.saleStartTime) - new Date();
    },
  },
  methods: {
    ...mapActions([
      "fetchCurrentRound",
      "initialize",
      "updatePageAndFetch",
      "connect",
      "disconnect",
    ]),
    updateHandler(page: number) {
      // @ts-ignore
      this.$store.dispatch({
        type: "updatePageAndFetch",
        page,
      });
    },
    connectWallet() {
      this.initialize();
    },
  },
  async mounted() {
    location.href = "https://bond.cryptowar.network";
    await this.initialize();
  },
};
</script>

<style scoped>
.Page {
  font-size: 21px !important;
}
.banner-box {
  display: flex;
  justify-content: center;
}

.round-container {
  background-image: url(/src/assets/images/help-aside.webp);
  background-position: center;
  background-size: cover;
  padding: 20px 30px 30px;
  border-radius: 20px;
  margin: 0px 0 2rem;
}

.current-round .current-buy .round-container {
  background-image: none;
  background-color: #2b1567;
  box-shadow: 0 0 25px #ea9040;
  border: 2px solid #ea9040;
}

.note-box {
  padding: 20px 30px 30px;
  background-color: #5a52cc;
  border-radius: 20px;
}

.round-number {
  font-size: 68px;
  font-weight: 900;
}
.amount-input {
  border-radius: 8px;
  padding: 0 12px;
}
.orders-button {
  border: none;
  outline: none;
  background-color: transparent;
  color: #fff;
  font-size: 16px;
  margin: 16px 0;
}
.note-box h5 {
  margin-bottom: 0px;
}
.note-box ul {
  margin: 15px 0;
}
.note-box .note-content ul li {
  list-style: none;
  color: #fff;
  font-size: 0.8rem;
  padding-left: 10px;
}
.note-box .note-content ul li:first-child {
  font-size: inherit;
  margin-bottom: 10px;
}
.note-box .note-content ul li svg {
  width: 1.5rem;
  margin-left: -30px;
}
.note-box .note-content {
  padding-left: 15px;
}
.note-box .note-content ul li a {
  color: #febc2c;
}
.help-section.buy {
  padding-top: 20px;
}

.help-content {
  margin-left: -15px;
  margin-right: -15px;
}
.tab-item {
  cursor: pointer;
}
.active {
  /* background-color: #5b42f3!important; */
}
.spinner {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>