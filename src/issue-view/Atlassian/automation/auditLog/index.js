import RefreshIcon from '@atlaskit/icon/glyph/refresh';
import Button from '@atlaskit/button';
import Pagination from '@atlaskit/pagination';
import DynamicTable from '@atlaskit/dynamic-table';
import Avatar from '@atlaskit/avatar';
import Lozenge from '@atlaskit/lozenge';

import './styles.css';

import { head, rowsData } from './tableData';



const rows = rowsData.map((item,index)=>({
    key:`row-${index}-${item.name}`,
    isHighlighted: false,
    cells: [
        {
            content: item.date
        },
        {
            content:(
                    <a href='#' style={{color:'#476dbe',textDecoration:'none',}}>
                        {item.rule}
                    </a>
                    ) 
        },
        {
            content:(
                <div style={{display:'flex',alignItems:'center'}}>
                    <Avatar src="https://images.unian.net/photos/2022_03/thumb_files/400_0_1648468790-5163.jpeg?0.3526083214698117"/>
                    {item.projects}
                </div>
            )
        },
        {
            content: (
                <Lozenge  appearance='new'>{item.status}</Lozenge>
            )
        },
        {
            content: item.duration
        },
        {
            content: (
                <a href='#' style={{color:'gray'}}>{item.operations}</a>
            ) 
        },
    ]
}))


const AuditLogTabPanel = () => {
    return(
        <div style={{marginTop:'20px',fontSize:'15px'}}>
            <div className='controllPanel'>
                <p>1-3</p>
                <div className='tableControll'>
                    <Pagination pages={[1]} />
                    <Button><RefreshIcon/></Button>
                </div>
            </div>
            <div className='tableContent'>
                 <DynamicTable
                        head={head}
                        rows={rows}
                    />
            </div>
            <h4>What do the different statuses mean?</h4>
        </div>
    )
}
export default AuditLogTabPanel;