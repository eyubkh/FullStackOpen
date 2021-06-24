
import { Content } from '../organism/Content'
import { courseData } from '../../services/data'
export function Course() {

    function content(item) {
        return(
            <div key={item.id}>
                <Content content={item.parts} title={item.name}/>  
            </div>
        )
    }

    return(
        <>
            {courseData.map(content)}
        </>
    )
}
