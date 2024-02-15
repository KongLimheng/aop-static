import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

export const store = create(
  persist(
    () => ({
      maxWidth: '100%',
      isMini: false,
      formData: {},
      openModal: false,
      flexiBg: '#fff',
      modalData: {
        modalTitle: '',
        modalBody: '',
      },
    }),
    {
      name: 'aop-store',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ formData: state.formData }),
    }
  )
)

export const setModalData = (data) => store.setState({ modalData: data })
export const setOpenModal = (state) => store.setState({ openModal: state })
export const setMaxWidth = (width) => store.setState({ maxWidth: width })
export const setIsMini = (bool) => store.setState({ isMini: bool })
export const setFormData = (data) => store.setState({ formData: data })
export const setFlexiBg = (data) => store.setState({ flexiBg: data })
