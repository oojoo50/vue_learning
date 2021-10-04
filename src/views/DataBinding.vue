<template>
  <div>
    <h1>Hello, {{ title }}!</h1>
    <div>{{ htmlString }}</div>
    <div v-html="htmlString"></div>
    <input type="text" v-model="valueModel" />
    <input type="number" v-model.number="numberModel" />
    <textarea v-model="message"></textarea>
    <select v-model="city">
      <option value="02">서울</option>
      <option value="21">부산</option>
      <option value="064">제주</option>
    </select>
    <label><input type="checkbox" v-model="checked" />{{ checked }}</label>
    <label
      ><input
        type="checkbox"
        v-model="checked2"
        true-value="yes"
        false-value="no"
      />
      {{ checked2 }}
    </label>
    <label><input type="checkbox" value="서울" v-model="checked3" />서울</label>
    <label><input type="checkbox" value="대구" v-model="checked3" />대구</label>
    <label><input type="checkbox" value="부산" v-model="checked3" />부산</label>
    <span>체크된 지역: {{ checked3 }} </span>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      title: "World",
      htmlString: "<p style='color:red;'>This is a red string.</p>",
      valueModel: "South Korea",
      numberModel: 3,
      message: "여러 줄을 입력할 수 있는 textarea입니다.",
      city: "064",
      checked: true,
      checked2: true,
      checked3: [],
    };
  },
  beforeCreate() {},
  creted() {},
  beforeMount() {},
  mounted() {},
  methods: {},
};
</script>
