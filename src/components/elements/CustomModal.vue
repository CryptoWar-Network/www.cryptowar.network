<template >
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container col-lg-4">
        <div class="modal-header">
          <slot name="header"> </slot>
        </div>

        <div class="modal-body">
          <slot name="body"> </slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">
            <button class="mybtn1" @click="$emit('close')">
              OK
            </button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    handleClick(e) {
      this.$emit("close", e);
    },
  },
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  margin: 0px auto;
  padding: 20px 30px;
  background-image: url("../../assets/images/counter-bg.jpg");
  border-radius: 18px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  font-family: "Josefin Sans", sans-serif;
  /* text-align: center; */
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}
.modal-header {
    border-bottom: none;
    color: #fff;
}

.modal-body {
    border-bottom: none;
    justify-self: start;
    padding-left: 20px;
    padding-right: 30px;
    color: #fff;
  /* margin: 20px 0; */
}

.modal-default-button {
  display: block;
  margin-top: 1rem;
}
.modal-footer {
    border-top: none;
    display: flex;
    flex-direction: column;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.mybtn1{
    background:none
}
.modal-footer{
    align-items: center;
    justify-content: center;
}
.mybtn1{
    border: none;
    color: #00a2ff;
    box-shadow: inset 0px 0px 10px 7px #00a2ff;
}
</style>