import { Header } from '../organism/Header';
import { Content } from '../organism/Content';
import { courseData } from '../../services/data'
export function Course() {
    return(
        <>{
            courseData.map( item => {
                return(
                    <div key={item.id}>
                        <Header title={item.name} />
                        <Content content={item.parts} />  
                    </div>
                )
            })
        }
        
        </>
    );
}
