export function fileUpload(data) {
    return request({
      url: '/vue-admin-template/user/login',
      method: 'post',
      data
    })
  }