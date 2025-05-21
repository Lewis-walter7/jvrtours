import { create } from 'zustand'
interface useUploadModalProps{
    isOpen: boolean,
    onOpen: () => void,
    onClose: () => void,
}
const useWhyChooseUsModal = create<useUploadModalProps>((set) => ({
  isOpen: false,
  onOpen: ()=> set({
    isOpen: true
  }),
  onClose: ()=> set({
    isOpen: false
  })
}))

export default useWhyChooseUsModal;