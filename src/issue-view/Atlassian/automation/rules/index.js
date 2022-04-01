import './styles.css';

import Textfield from '@atlaskit/textfield';
import DynamicTable from '@atlaskit/dynamic-table';
import Avatar from '@atlaskit/avatar';
import Toggle from '@atlaskit/toggle';

import { data } from './tableData';

export const createHead = (withWidth: boolean) => {
    return {
      cells: [
        {
          key: 'name',
          content: 'Name',
          width: withWidth ? 60 : undefined,
        },
        {
          key: 'party',
          content: 'Owner',
          shouldTruncate: true,
          width: withWidth ? 10 : undefined,
        },
        {
          key: 'term',
          content: 'Projects',
          shouldTruncate: true,
          width: withWidth ? 20 : undefined,
        },
        {
          key: 'content',
          content: 'Enable',
          with:10,
          shouldTruncate: true,
        },
      ],
    };
  };

const heads = createHead(true);

const rows = data.map((item,index)=>({
    key:`row-${index}-${item.name}`,
    isHighlighted: false,
    cells: [
        {
            content: (<a style={{color:'#476dbe'}}>{item.name}</a>)
        },
        {
            content: (
                <div style={{display:'flex',alignItems:'center'}}>
                    <div style={{marginRight:'5px'}}>
                      <Avatar src="https://i.pinimg.com/564x/d6/a1/fd/d6a1fdbd79b80339d009aff691f49985.jpg"
                       appearance='circle' />
                    </div>
                    {item.owner}
                </div>
            )
        },
        {
            content:(
                <div style={{display:'flex',alignItems:'center'}}>
                    <div style={{marginRight:'5px'}}>
                      <Avatar src="https://images11.esquire.ru/upload/img_cache/c49/c4907927d4d297e7f0458401b5b20d56_ce_668x445x121x0_cropped_666x444.jpg"
                       appearance='square' />
                    </div>
                    {item.projects}
                </div>
            )
        },
        {
            content:(<Toggle  size='large' isChecked={item.enable}/>)
        }
    ]
}))


const RuleTabPanel = () => {
    return(
        <div className="mainWrapper">
            <div className='filterWrapper'>
                <div style={{width:'80%'}}>
                    <div style={{marginTop:'20px',marginBottom:'20px'}}>
                        <Textfield placeholder="Filter rules"/>
                    </div>
                    <div className='avatarWrapper'>
                        <div style={{marginRight:'10px'}}>
                            <Avatar
                                appearance="circle"
                                src="https://pbs.twimg.com/profile_images/803832195970433027/aaoG6PJI_400x400.jpg"
                                size="medium"
                            />
                        </div>
                        All rules
                    </div>
                    <div className='avatarWrapper'>
                         <div style={{marginRight:'10px'}}>
                            <Avatar
                                appearance="circle"
                                src="https://pbs.twimg.com/profile_images/803832195970433027/aaoG6PJI_400x400.jpg"
                                size="medium"
                            />
                        </div>
                        Global rules
                    </div>
                    <div className='avatarWrapper' style={{marginTop:'40px'}}>
                        <div style={{marginRight:'10px'}}>
                            <Avatar
                                appearance="circle"
                                size="medium"
                            />
                        </div>
                        Add label
                    </div>
                </div>
            </div>
            <div className='tableWrapper'>
                <div className='TableContentWrapper'> 
                    <DynamicTable
                        head={heads}
                        rows={rows}
                        isRankable
                    />
                </div>
            </div>
        </div>
    )
}
export default RuleTabPanel;