import './styles.css';

import { Box } from './box';

const listSoftWare = ['Close duplicate issues','Close duplicate issues','Link issues that are mentioned in the comments','Link issues that are mentioned in the comments','Close duplicate issues']
const listDevOps = ['When a commit is made → then move issue to in progress','When a commit is made → then move issue to in progress']

const LibraryTabPanel = () => {
    return(
        <div className='libraryWrapper'>
            <h3>Software</h3>
            <div className='blockOfContent'>
                {listSoftWare.map((item)=>
                <Box text={item} />
                )}
            </div>
            <h3>DevOps</h3>
            <div className='blockOfContent'>
             {listDevOps.map((item)=>
                <Box text={item} />
                )}
            </div>
        </div>
    )
}

export default LibraryTabPanel;