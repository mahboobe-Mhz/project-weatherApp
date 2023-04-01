export const switchDarkMode = (e) => {
  const checked = e.target.checked
  console.log(document.documentElement.classList)
  if (checked)
    document.documentElement.classList.add('dark')
  else
    document.documentElement.classList.remove('dark')
}
