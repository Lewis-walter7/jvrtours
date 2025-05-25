import { create } from 'zustand'
interface UseReviewModalProps{
    isOpen: boolean,
    onOpen: () => void,
    onClose: () => void,
}
const useReviewModal = create<UseReviewModalProps>((set) => ({
  isOpen: false,
  onOpen: ()=> set({
    isOpen: true
  }),
  onClose: ()=> set({
    isOpen: false
  })
}))

export default useReviewModal;