import { create } from 'zustand'

interface NavState {
    isOpen: boolean,
    drawerWidth: number,
    handleOpen : ()=>void,
    handleClose: ()=>void,

}
export const useNavStore = create<NavState>()((set) => ({
    isOpen: false,
    drawerWidth:240,
    handleOpen : ()=>set(() => ({ isOpen: true })),
    handleClose : ()=>set(() => ({ isOpen: false })),
}))