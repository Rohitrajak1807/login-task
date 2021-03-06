const toast = function (message, title, timeout, type) {
  this.$bvToast.toast(message, {
    title: title || 'Error',
    autoHideDelay: timeout || 5000,
    variant: type || 'danger'
  })
}

export default toast
