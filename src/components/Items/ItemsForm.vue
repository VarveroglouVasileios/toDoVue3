<template>
  <div class="form">
    <base-card>
      <form class="form__items" @submit.prevent="submitData">
        <div class="form__controls" :class="{ invalid: !enteredTitle.valid }">
          <label class="label__text" for="title">Title</label>
          <input
            class="input__text"
            type="text"
            name="title"
            v-model.trim="enteredTitle.val"
            @blur="clearValidity('enteredTitle')"
          />
          <p class="validation" v-if="!enteredTitle.valid">Title must not be empty!</p>
          <p class="validation" v-if="!enteredTitle.valid">Title must be at least 4 characters</p>
        </div>
        <div class="form__controls" :class="{ invalid: !enteredDate.valid }">
          <label class="label__text" for="date">Expires at</label>
          <input
            class="input__text_2"
            type="date"
            name="date"
            v-model.trim="enteredDate.val"
            @blur="clearValidity('enteredDate')"
          />
          <p class="validation" v-if="!enteredDate.valid">Date cannot be empty</p>
        </div>
        <button class="form__button">Submit</button>
      </form>
    </base-card>
  </div>
</template>

<script>
export default {
  emits: ['saveData'],
  data() {
    return {
      enteredTitle: {
        val: '',
        valid: true
      },
      enteredDate: {
        val: '',
        valid: true
      },
      formIsValid: true
    }
  },
  methods: {
    clearValidity(input) {
      this[input].valid = true
    },
    validateForm() {
      this.formIsValid = true
      if (this.enteredTitle.val === '' && this.enteredTitle.val.length < 4) {
        this.formIsValid = false
        this.enteredTitle.valid = false
      }
      if (this.enteredDate.val === '') {
        this.formIsValid = false
        this.enteredDate.valid = false
      }
    },
    submitData() {
      this.validateForm()
      if (!this.formIsValid) {
        return
      }

      const data = {
        id: new Date().getTime(),
        title: this.enteredTitle.val,
        date: new Date(this.enteredDate.val),
        completed: false
      }
      console.log('this is the form', data)
      this.$emit('saveData', data)
    }
  }
}
</script>

<style scoped>
.form__items {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
.validation {
  font-size: 1.4rem;
  color: red;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.label__text {
  font-size: 1.4rem;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

.input__text {
  outline-style: none;
  border: 0.2rem solid royalblue;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}

.input__text_2 {
  outline-style: none;
  border: 0.2rem solid royalblue;
  width: 118%;
}

.form__button {
  color: white;
  background-color: royalblue;
  padding: 0.8rem 2rem;
  border-radius: 20%;
  border: none;
}

.form__button:hover {
  background-color: red;
  color: black;
}

.form__controls {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
