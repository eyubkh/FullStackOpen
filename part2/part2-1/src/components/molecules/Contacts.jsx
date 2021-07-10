import { Paragraph } from '../atoms/Paragraph'

export function Contacts({data,search}) {
    return data
       .filter(item => {
         let rg = new RegExp(search,'ig')
         let find = rg.test(item.name)
         if(find) {
           return item
         }})
       .map(item => <Paragraph content={item}  />)
 }