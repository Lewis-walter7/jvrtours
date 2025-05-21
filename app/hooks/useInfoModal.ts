import { create } from 'zustand'
import { Place } from '../models/place';

interface useUploadModalProps{
    isOpen: boolean,
    onOpen: () => void,
    onClose: () => void,
}
const useInfoModal = create<useUploadModalProps>((set) => ({
  isOpen: false,
  onOpen: ()=> set({
    isOpen: true
  }),
  onClose: ()=> set({
    isOpen: false
  })
}))

export default useInfoModal;