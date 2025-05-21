import { create } from 'zustand'
interface useUploadModalProps{
    isOpen: boolean,
    onOpen: () => void,
    onClose: () => void,
}
const useAboutUsModal = create<useUploadModalProps>((set) => ({
  isOpen: false,
  onOpen: ()=> set({
    isOpen: true
  }),
  onClose: ()=> set({
    isOpen: false
  })
}))

export default useAboutUsModal;