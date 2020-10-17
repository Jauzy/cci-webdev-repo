import { selector } from 'recoil'
import { ListData } from '../Atoms/List.js'

export const isiList = selector({
    key: 'isiList',
    get: ({ get }) => {
        const listData = get(ListData)
        if(listData.length < 1) return `List Masih Kosong`
        else return `${listData.map(item => (` ${item}, `))}`
    }
})