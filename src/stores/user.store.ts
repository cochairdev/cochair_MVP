import { create } from 'zustand'

interface UserState {
  name: string | null,
  lastName:string | null,
  email:string | null,
  isLogin: boolean,
  handleLogin : ()=>void,
  //increase: (by: number) => void
}
export const useUserStore = create<UserState>()((set) => ({
    name: 'Jhon',
    lastName:'Doe',
    email:'jhon_doe@cochair.ia',
    isLogin: true,
    handleLogin : ()=>set((state) => ({ isLogin: !state.isLogin })),
}))
