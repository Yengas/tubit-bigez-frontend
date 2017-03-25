function getCookie(key){
  const cookieValue = document.cookie.match('(^|;)\\s*' + key + '\\s*=\\s*([^;]+)');
  return cookieValue ? cookieValue.pop() : ''
}

export { getCookie };