import { Contacts } from '../molecules/Contacts'
import { Form } from '../molecules/Form'
import { Title } from '../atoms/Title'
import { Filter } from '../atoms/Filter'


export default function Main({setInfo,info,addContact,search,data,handleChangeSearch}){
    return(
        <main>  
            <Filter handleChangeSearch={handleChangeSearch} />
            <Title text="Add" />
            <Form setInfo={setInfo} info={info} addContact={addContact} />
            <Title text="Contacts" />
            <Contacts data={data} search={search} />
        </main>
    )
}