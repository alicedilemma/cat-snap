export const NAVIGATE = 'NAVIGATE'
export const NAVIGATE_SNAP = 'NAVIGATE_SNAP'

export const navigate = target => {
  return {
    type: NAVIGATE,
    target // 'home' 'snap' 'add'
  }
}

export const openSnap = snapId => {
  return {
    type: NAVIGATE_SNAP,
    snapId
  }
}
