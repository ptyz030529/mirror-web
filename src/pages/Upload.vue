<template>
  <div class="upload-page">
    <h1>Upload File</h1>
    <a-form
      :form="form"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
      @submit="handleSubmit"
    >
      <a-form-item label="Title">
        <a-input
          v-decorator="[
            'title',
            {
              rules: [
                { required: true, message: 'Please input your file title!' },
              ],
            },
          ]"
        />
      </a-form-item>
      <a-form-item label="Change Log Link">
        <a-input
          v-decorator="[
            'changeLog',
            {
              rules: [
                {
                  required: true,
                  message: 'Please input your file change log link',
                },
              ],
            },
          ]"
        />
      </a-form-item>
      <a-form-item label="Release">
        <a-date-picker @change="onChange" />
      </a-form-item>
      <a-form-item label="Upload File">
        <a-upload>
          <a-button> <a-icon type="upload" /> Upload </a-button>
        </a-upload>
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
        <a-button type="primary" html-type="submit">
          Submit
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {};
</script>

<style>
.upload-page {
  background: #fff;
  padding: 20px;
}
</style>
