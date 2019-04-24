export const NAVIGATE = 'NAVIGATE'

export const navigate = target => {
  return {
    type: NAVIGATE,
    target // 'home' 'snap' 'add'
  }
}
