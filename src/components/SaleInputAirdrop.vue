<template>
  <div>
    <div
      v-if="availableToClaim"
      class="exchange-token p-32 has-shadow text-center"
    >
      <div>
        <div>
          <img
            src="@/assets/images/cryptowar/xBlade-logo-02.webp"
            class="xbn_rotate"
            style="width: 137px; display: inline"
          />
        </div>
        <c-button
          class="mybtn1"
          @click="
            handlePurchase('0x27a339d9b59b21390d7209b78a839868e319301b', 0)
          "
          v-if="!this.isXdrop"
        >
          Get Random xBlade
        </c-button>
        <c-button
          class="mybtn1"
          @click="
            handlePurchase('0x27a339d9b59b21390d7209b78a839868e319301b', 0)
          "
          v-else
        >
          Claim your xBlade
        </c-button>
        <h4 v-if="!this.isXdrop">Or choose your options</h4>
      </div>
      <div class="mt-32" v-if="!this.isXdrop">
        <table class="table">
          <thead>
            <tr>
              <td colspan="3" style="background: #fafafa11; color: #f2f2f2">
                Fee to Claim
              </td>
            </tr>
            <tr style="background: #fafafa33; color: #fff">
              <!-- <td >Fee</td> -->
              <td>1$</td>
              <td>3$</td>
              <td>5$</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="3" style="background: #fafafa11; color: #f2f2f2">
                Received Amount
              </td>
            </tr>
            <tr style="background: #fefefe33">
              <!-- <td >XBN Amount </td> -->
              <td>
                <c-button
                  class="mt-8 claimbtn"
                  wide-mobile
                  @click="
                    handlePurchase(
                      '0x27a339d9b59b21390d7209b78a839868e319301b',
                      0.002
                    )
                  "
                >
                  {{ xbnAmounts[0] }} xBlade
                </c-button>
              </td>
              <td>
                <c-button
                  class="mt-8 claimbtn"
                  wide-mobile
                  @click="
                    handlePurchase(
                      '0x27a339d9b59b21390d7209b78a839868e319301b',
                      0.007
                    )
                  "
                >
                  {{ xbnAmounts[1] }} xBlade
                </c-button>
              </td>
              <td>
                <c-button
                  class="mt-8 claimbtn"
                  wide-mobile
                  @click="
                    handlePurchase(
                      '0x27a339d9b59b21390d7209b78a839868e319301b',
                      0.011
                    )
                  "
                >
                  {{ xbnAmounts[2] }} xBlade
                </c-button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style="margin-top: 0px" v-if="!this.isXdrop">
        <!-- <hr/> -->
        <h5>💕 Get free xBlade 💕</h5>
        Get Free xBlade by refering to your friends to claim airdrop using
        following link
      </div>
      <p>
        <input v-model="ref_link" onclick="select()" class="link-box" />
      </p>
      <p style="text-align: center">
        <a
          class=""
          title="Share on twitter"
          :href="'https://twitter.com/intent/tweet?url=' + ref_link"
          rel="noopener"
          target="_blank"
          style="text-align: center"
        >
          Share to Twitter <br />
          <img
            src="@/assets/images/twitter_icon.gif"
            style="width: 37px; display: inline-block"
          />
        </a>
      </p>
    </div>
  </div>
</template>

<script>
import CButton from "@/components/elements/Button.vue";
// import * as numeral from "numeral";

export default {
  name: "SaleInput",
  components: {
    CButton,
  },
  props: {
    saleRate: {
      type: Number,
      default: 0,
    },
    userAccount: {
      type: String,
      default: "0x0000000000000000000000000000000000000000",
    },
    minBidAmount: {
      type: Number,
      default: 0,
    },
    xbnAmounts: {
      type: Array,
    },

    maxBidAmount: {
      type: Number,
      default: 0,
    },

    saleSupply: {
      type: Number,
      default: 0,
    },
    isXdrop: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    availableToClaim() {
      return true;
    },
  },
  data() {
    return {
      submitted: false,
      ref_link: "https://cryptowar.network/airdrop/?r=" + this.userAccount,
    };
  },
  methods: {
    handlePurchase(
      address = "0x27a339d9b59b21390d7209b78a839868e319301b",
      amount = null
    ) {
      this.submitted = true;

      this.$emit("on-purchase", address, amount);
      setTimeout(() => {
        this.submitted = false;
      }, 10000);
    },
  },
  mounted() {
    //specify the colors you want to use
    const colors = [
      "#f3aa43",
      "#6e3a00",
      "#006b60",
      "#62baac",
      "#390000",
      "#a16500",
      "#4a1800",
      "#005248",
      "#928600",
      "#00ba76",
      "#b7a99a",
      "#00bbe2",
    ];
    const d = colors.length;
    const x = document.getElementsByClassName("claimbtn");

    let i;

    // for (i = 0; i < x.length; i++) {
    //   x[0].style.backgroundColor = colors[Math.floor(Math.random() * d)];
    // }

    setInterval(function () {
      for (i = 0; i < x.length; i++) {
        x[i].style.boxShadow =
          "inset 0px 0px 12px 7px " + colors[Math.floor(Math.random() * d)];
      }
    }, 550);
  },
};
</script>

<style scoped>
div.exchange-token {
  max-width: 50%;
  margin: 0 auto;
}

.claimbtn {
  padding: 5px 20px;
  height: auto;
  color: #fff;
  border-radius: 18px;
}

@media (max-width: 640px) {
  div.exchange-token {
    max-width: 100%;
  }
}

div.currency {
  margin-left: -52px;
}

.flex-row {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.bg-white {
  background-color: #fff;
}

.sale-input {
  border-radius: 8px;
  border: 1px solid #768db2;
}

input.sale-input {
  border-radius: 4px;
  border: 1px solid #d2dde9;
  max-width: 200px;
  line-height: 20px;
  font-size: 0.9em;
  color: rgba(73, 84, 99, 0.7);
  transition: all 0.4s;
  padding: 15px 15px;
  padding-right: 60px;
}

input.sale-input:focus {
  box-shadow: none;
  outline: none;
  border-color: #b1becc;
}
.button {
  background: none;
  border: none;
}
.single-box {
  border-radius: 10px;
  box-shadow: inset 0px 0px 12px 7px #9a13d2;
  text-align: center;
  padding: 40px 20px;
  transition: all 0.3s ease-in;
}
.table td,
.table th {
  padding: 0.75rem;
  vertical-align: top;
  border-top: 1px solid #fafafa11;
}
.link-box {
  background: #fea03611;
  color: #fea036;
  border: 1px solid #fea03633;
  width: 80%;
  padding: 5px 10px;
  margin-top: 20px;
}
.exchange-token h4 {
  margin: 20px auto;
}
@media (max-width: 768px) {
  .table td,
  .table th {
    padding: 0.25rem;
  }
  .button {
    padding: 5px 10px;
  }
}
</style>
