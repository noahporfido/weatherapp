<template>
  <div class="form__group field">
    <input
      :type="type"
      class="form__field"
      :placeholder="placeholder"
      id="inputField"
      :required="required"
      v-model="data"
      @change="$emit('input', data)"
    />
    <label for="inputField" class="form__label">{{ placeholder }}</label>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    type: {
      type: String,
      default: "text",
      validator: (value) => {
        return ["number", "checkbox", "text"].indexOf(value) !== -1;
      },
    },
    placeholder: {
      type: String,
      validator: (value) => {
        return value.length < 20;
      },
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      data: null,
    };
  },
};
</script>

<style lang="scss" scoped>
.form__group {
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 100%;
}

.form__field {
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid;
  outline: 0;
  font-size: 1.3rem;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ .form__label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }
}

.form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
}

.form__field:focus {
  ~ .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    font-weight: 700;
  }
  padding-bottom: 6px;
  font-weight: 700;
  border-width: 3px;
  border-image-slice: 1;
}
/* reset input */
.form__field {
  &:required,
  &:invalid {
    box-shadow: none;
  }
}
</style>