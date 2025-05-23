<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <p>{{ content }}</p>

    <form @submit.prevent="checkForm">
      <!-- 用户名 -->
      <div class="form-group">
        <label for="username">名字：</label>
        <input
          type="text"
          id="username"
          v-model.trim="formData.user"
          required
          minlength="2"
          pattern="[A-Za-z0-9]+"
          title="请输入字母或数字"
        >
      </div>

      <!-- 密码 -->
      <div class="form-group">
        <label for="password">密码：</label>
        <input
          type="password"
          id="password"
          v-model.trim="formData.pwd"
          required
          minlength="6"
          title="密码至少6位"
        >
        <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
      </div>

      <!-- 性别 -->
      <div class="form-group">
        <fieldset>
          <legend>性别（必选）：</legend>
          <label>
            <input
              type="radio"
              name="sex"
              value="male"
              v-model="formData.sex"
              required
            >
            男
          </label>
          <label>
            <input
              type="radio"
              name="sex"
              value="female"
              v-model="formData.sex"
            >
            女
          </label>
        </fieldset>
      </div>

      <!-- 交通工具 -->
      <div class="form-group">
        <fieldset>
          <legend>交通工具（可选）：</legend>
          <label>
            <input
              type="checkbox"
              value="Bike"
              v-model="formData.vehicle"
            >
            我有自行车
          </label>
          <label>
            <input
              type="checkbox"
              value="Car"
              v-model="formData.vehicle"
            >
            我有小车
          </label>
        </fieldset>
      </div>

      <button type="submit" class="submit-btn">提交</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'FormPage',
  data() {
    return {
      title: '标题',
      content: '文段',
      formData: {
        user: '',
        pwd: '',
        sex: '',
        vehicle: []
      },
      errorMessage: ''
    }
  },
  methods: {
    checkForm() {
      this.errorMessage = ''

      // 自定义验证规则
      if (this.formData.pwd.includes(' ')) {
        this.errorMessage = '密码不能包含空格'
        return
      }

      // 这里可以添加其他验证逻辑
      if (!this.formData.sex) {
        this.errorMessage = '请选择性别'
        return
      }

      // 通过验证后提交
      this.submitForm()
    },
    submitForm() {
      // 实际提交逻辑（示例用 console.log）
      console.log('提交数据:', this.formData)
      
      // 真实场景使用 axios：
      // axios.post('/api/submit', this.formData)
      //   .then(response => {
      //     console.log('提交成功', response)
      //   })
      //   .catch(error => {
      //     console.error('提交失败', error)
      //   })
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  color: red;
}

p {
  color: blue;
}

.form-group {
  margin-bottom: 15px;
}

fieldset {
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px 0;
}

.error-message {
  color: red;
  font-size: 0.9em;
  margin-top: 5px;
}

.submit-btn {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submit-btn:hover {
  background-color: #45a049;
}

input:invalid {
  border: 1px solid red;
}
</style>