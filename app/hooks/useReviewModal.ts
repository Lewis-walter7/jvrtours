import { create } from 'zustand'
interface useReviewModalProps{
    isOpen: boolean,
    onOpen: () => void,
    onClose: () => void,
}
const useReviewModal = create<useReviewModalProps>((set) => ({
  isOpen: false,
  onOpen: ()=> set({
    isOpen: true
  }),
  onClose: ()=> set({
    isOpen: false
  })
}))

export default useReviewModal;