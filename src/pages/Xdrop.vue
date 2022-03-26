<template>
  <!-- Breadcrumb Area Start -->
  <section class="breadcrumb-area help airdrop">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="container subscribe-box">
            <div
              class="signin-inner section-inner"
              :class="[
                topDivider && 'has-top-divider',
                bottomDivider && 'has-bottom-divider',
              ]"
            >
              <!-- <c-section-header
                tag="h1"
                :data="sectionHeader"
                class="center-content"
              /> -->
              <div style="text-align: center">
                <b
                  >To get xBlade, please retweet this
                  <a
                    href="https://twitter.com/xbladecryptowar/status/1478642963257622528"
                    target="_blank"
                    >tweet</a
                  >
                  & follow
                  <a href="https://twitter.com/xbladecryptowar" target="_blank"
                    >xBlade Twitter</a
                  >
                  <br />
                  <!-- <a
                    href="https://twitter.com/elasticbitcoin/status/1366605459763826692"
                    target="_blank"
                    >Video tutorial to get xBlade</a
                  > -->
                </b>
              </div>

              <!-- <div v-if="!isSaleOver"> -->
              <div>
                <div v-if="userAccount">
                  <p class="center-content mt-0 mb-32">
                    Connected as
                    <a
                      target="_blank"
                      :href="`https://bscscan.com/address/${userAccount}`"
                      >{{ truncatedAddress }}</a
                    >
                  </p>
                  <div>
                    <sale-input-airdrop
                      @on-purchase="exchangeToken"
                      :sale-supply="saleSupply"
                      :participant-wait-time="participantWaitTime"
                      :sale-rate="saleRate"
                      :min-bid-amount="minBidAmount"
                      :max-bid-amount="maxBidAmount"
                      :user-account="userAccount"
                      :xbn-amounts="xbladeAmounts"
                      :is-xdrop="true"
                    />
                  </div>
                </div>

                <div class="not-connect" v-else>
                  <wallet-not-connect @connect-wallet="connectWallet" />
                </div>
              </div>
            </div>
          </div>
          <!-- <sweet-modal id="modal" ref="success">
            <swal-html>
              <h1>Transaction submitted</h1>
              Thank you

              <div class="mt-32">
                <vue-goodshare-facebook
                  :quote="pageTitle"
                  :page_title="pageTitle"
                  :page_url="pageUrl"
                  has_icon
                  has_counter
                  title_social="Facebook"
                />
                <vue-goodshare-twitter
                  :page_title="pageTitle"
                  :page_url="pageUrl"
                  has_icon
                  title_social="Twitter"
                />
              </div>
            </swal-html>
          </sweet-modal> -->
        </div>
      </div>
    </div>
  </section>
  <!-- Breadcrumb Area End -->
  <section
    class="signin section illustration-section-01"
    :class="[hasBgColor && 'has-bg-color', invertColor && 'invert-color']"
  ></section>
  <!-- Help Section Start -->
  <transition name="modal">
    <custom-modal v-if="showModal" @close="closeModal()">
      <template v-slot:header>
        <div v-if="this.isClaiming">
          <div v-on:click="closeModal()" class="buttonCloseClaiming">X</div>
        </div>
        <div v-else class="rowItem">
          <div>Claim XBlade</div>
          <div v-on:click="closeModal()" class="buttonClose">X</div>
        </div>
      </template>
      <template v-slot:body>
        <div class="centerLoading" v-if="this.isClaiming">
          <img class="successImage" v-if="this.claimSuccess" src="../assets/images/Congrats.gif" alt="">
          <img class="gifImage" v-else src="../assets/images/loadingCircle.gif" alt="">
        </div>
        <div v-else>
          <h3>{{convertHexToDecimal(this.xdropData.amount)}} Xblade</h3>
        <div class="mt-32">
            <div class="rowItem">
                <div>User</div>
                <div>{{renderOwner(this.userAccount)}}</div>
            </div>
        </div>
        </div>
      </template>
      <template v-slot:footer>
        <div v-if="this.isClaiming && !this.claimSuccess">
          Claiming {{convertHexToDecimal(this.xdropData.amount)}} Xblade
        </div>
        <div v-if="this.claimSuccess">
          Claimed {{convertHexToDecimal(this.xdropData.amount)}} Xblade
        </div>
          <div v-if="!this.isClaiming && !this.claimSuccess" class="bodyBelow">
            <div>Thank for being a long time supporter of Cryptowar Xblade! You may claim XBLADE to be used for mint heros or buy weapons in <a href="https://play.cryptowar.network" target="_blank">Cryptowar Xblade</a>!</div>
        </div>
        <button v-if="!this.isClaiming && !this.claimSuccess" class="claimButton" @click="claimToken()">
              Claim Xblade
            </button>
      </template>
    </custom-modal>
  </transition>
  <transition>
    <custom-modal v-if="this.errorClaim.length >0 " @close="closeModalError()">
      <template v-slot:header>
        <div class="rowItem">
          <div>Claim XBlade</div>
          <div v-on:click="closeModalError()" class="buttonClose">X</div>
        </div>
      </template>
      <template v-slot:body>
        <div class="errorTextBlock">
          <span>Error: View transaction at:
            <a :href="this.errorClaim">{{this.errorClaim}}</a></span></div>
      </template>
    </custom-modal>
  </transition>
</template>
<script>
import _ from "lodash";
// import CSectionHeader from "@/components/SectionHeader.vue";
import SaleInputAirdrop from "@/components/SaleInputAirdrop";
import WalletNotConnect from "@/components/WalletNotConnect";
import { getWeb3Client } from "@/libs/web3";
import { claimAirdrop } from "@/libs/merkleAirdrop.js";
import { SectionProps } from "@/utils/SectionProps.js";
import emitter from "tiny-emitter/instance";
import { ref, onMounted } from "vue";
import CustomModal from "@/components/elements/CustomModal.vue";
// import Swal from "sweetalert2";
import data from '../libs/allocation_merkle_output.json';
import Bignumber from 'bignumber.js'

export default {
  name: "Xdrop",
  components: {
    WalletNotConnect,
    // CSectionHeader,
    SaleInputAirdrop,
    CustomModal,
  },
  setup() {
    const success = ref(null);

    onMounted(() => {
      // the DOM element will be assigned to the ref after initial render
      console.log(success.value); // <div>This is a root element</div>
      // success.modal.open();
    });

    return {
      success,
    };
  },
  created() {
    // this.$emit('update:layout', CLayout);
    emitter.emit("updateWalletClient", () => {
      this.connectWallet();
    });

    // this.$refs.success.open();
    // this.$root.$emit("updateWalletClient", () => {
    //   this.connectWallet();
    // });
  },
  data() {
    return {
      sectionHeader: {
        title: "xBlade Airdrop",
        paragraph:
          "Fair $xBlade for everyone on a first-come-first-serve basis",
      },
      // contractFundBalance: 0,
      xbtBalance: 0,
      waitingTime: 0,
      userAccount: null,
      walletClient: {},
      showModal: false,
      xbladeAmounts: [20,50,100],
      xdropData: null,
      errorClaim: "",
      isClaiming: false,
      claimSuccess: false
    };
  },
  mixins: [SectionProps],
  computed: {
    // isSaleOver() {
    //   const minAvailableSale = this.saleSupply / this.saleRate;
    //   return minAvailableSale < this.minBidAmount;
    // },
    pageTitle() {
      return "Get $xBlade Airdrop";
    },
    pageUrl() {
      return "https://cryptowar.network/airdrop";
    },
    truncatedAddress() {
      return _.truncate(this.userAccount || "", {
        length: 10,
      });
    },
    // totalPurchasedXBN() {
    //   return this.xbtBalance;
    // }
  },

  async mounted() {
    this.handlePageOnLoad();
  },

  methods: {
    async connectWallet() {
      await this.handleGetClient();
      await this.handleGetInitialData();
    },
    closeModal() {
      this.showModal = false;
    },
    closeModalError() {
      this.errorClaim = "";
    },
    renderOwner(owner) {
      const hiddenString = owner.slice(5, owner?.length - 5)
        const hiddenOwner = owner.split(hiddenString).join('...')
        return hiddenOwner
    },
    async handleGetClient() {
      const walletClient = await getWeb3Client();
      this.walletClient = walletClient;
      // this.$set(this, "walletClient", walletClient);
    },

    async handleGetInitialData() {
      const accounts = await this.walletClient.web3Client.eth.getAccounts();
      this.userAccount = accounts.length > 0 ? accounts[0] : null;
      // this.$set(this, "userAccount", accounts.length > 0 ? accounts[0] : null);
      await this.fetchStatus();
      // this.subscribeOrderBook();
    },

    async handlePageOnLoad() {
      if (this.walletClient.web3Client) {
        await this.handleGetInitialData();
      }
    },
    async claimToken() {
      try {
        const walletClient = this.walletClient;
        const amountHex = this.xdropData.amount;
        const bigNumber = new Bignumber(amountHex, 16);
        const amountDecimal = bigNumber.toString(10);
        this.isClaiming= true;
        await claimAirdrop(walletClient.web3Client, this.userAccount, amountDecimal);
        this.isClaiming=false;
        this.claimSuccess= true;
        this.errorClaim=""
        // if(result) {
        //   console.log('result ne', result)
        //   this.errorClaim=""
        //   this.claimSuccess=true;
        // }
      }catch(error) {
        this.showModal = false;
        setTimeout(() => {
          if(error?.code === 4001) {
            this.errorClaim = error.message;
            return ;
          }
          this.errorClaim = `https://testnet.bscscan.com/tx/${error?.receipt?.transactionHash}`
        }, 200);
      }
    },

    convertHexToDecimal(hexString) {
        const decimal = parseInt(hexString, 16);
        return decimal * Math.pow(10, -18);
    },

    async exchangeToken() {
        this.showModal = true;
        const accounts = await this.walletClient.web3Client.eth.getAccounts();
        this.userAccount = accounts.length > 0 ? accounts[0] : null;
        this.xdropData = data?.claims[this.userAccount];
    },
  },
};
</script>
<style scoped>
.center-content {
  text-align: center;
}

.claimButton{
    border: none;
    background-color: #1E63DE;
    margin-top: 2rem;
    padding: 20px;
    width: 100%;
    color: #fff;
    border-radius: 18px;
}
.gifImage {
  width: 160px;
  height: 160px;
}
.successImage {
  width: 160px;
  height: 160px;
}

.centerLoading {
  display: flex;
  align-items: center;
  justify-content: center;
}

.airdrop h2 {
  font-size: 20px;
}

.breadcrumb-area.airdrop {
  padding-top: 100px;
}
.hide-modal {
  display: none;
}
.rowItem {
    display: flex;
    justify-content: space-between;
    flex: 1;
    align-items: center;
}
.errorTextBlock {
}
.errorTextBlock a {
  inline-size: 150px;
  overflow-wrap: break-word;
}
.success {
  margin-bottom: 20px;
  color: #00a2ff;
  font-size: 28px;
}
.subscribe-box{
  margin-bottom: 80px;
}
.bodyBelow {
    margin-top: 20px;
}
.buttonClose {
  cursor: pointer;
}
.buttonCloseClaiming {
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  align-items: flex-end;
}

@media (max-width: 768px) {
  .subscribe-box {
    padding-left: 20px;
    padding-right: 20px;
  }
  .not-connect{
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .subscribe-box{
  margin-bottom: 100px;
}
.errorTextBlock {
  max-width: 300px;
}
}
</style>