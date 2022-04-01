import Lozenge from '@atlaskit/lozenge';
import ProgressBar from '@atlaskit/progress-bar';
import { SuccessProgressBar } from '@atlaskit/progress-bar';
import DynamicTable from '@atlaskit/dynamic-table';

import './styles.css';

export const createHead = (withWidth: boolean) => {
    return {
      cells: [
        {
          key: 'executions',
          content: 'Executions',
          width: withWidth ? 60 : undefined,
        },
        {
          key: 'name',
          content: 'Name',
          shouldTruncate: true,
          width: withWidth ? 10 : undefined,
        },
        {
          key: 'owner',
          content: 'Owner',
          shouldTruncate: true,
          width: withWidth ? 20 : undefined,
        },
        {
          key: 'project',
          content: 'Project',
          with:10,
          shouldTruncate: true,
        },
      ],
    };
  };

const heads = createHead(false);

const isTableEmpty = true;

const UsageTabPanel = () => {
    return(
        <div>
            <div className='containerWrapper'>
                <div className='container'>
                    <div className='textWrapper'>
                        <p style={{marginBottom:'10px',color:'gray',fontSize:'12px',fontWeight:'bold'}}>Executions available</p>
                        <a className='linkTo' href='#'>View details</a>
                    </div>
                    <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                            <h3 style={{margin:'5px'}}>70,000,500</h3>
                            <Lozenge appearance="new" isBold>Premium</Lozenge>
                    </div>
                    <p style={{color:'gray',fontSize:'12px',margin:'0'}}>*For a limited time, your execution limit is not being enforced.</p>
                </div>
                <div className='container'>
                <div className='textWrapper'>
                        <p style={{marginBottom:'10px',color:'gray',fontSize:'12px',fontWeight:'bold'}}>Executions used</p>
                        <a className='linkTo' href='#'>How is my usage calculated?</a>
                </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                    <h3 style={{margin:'5px'}}>0 /</h3>
                    <p style={{color:'grey',fontSize:'15px'}}>70,000,500</p>
                </div>
                <div style={{marginBottom:'8px'}}>
                    <SuccessProgressBar value={1} />
                </div>
                    <ProgressBar value={0.4} ariaLabel="Progress bar label" />
                    <p style={{color:'gray',float:'right',fontSize:'14px'}}> 4 days left</p>
                </div>
            </div>
            <h4>Usage in the last 30 days</h4>
            <p style={{fontSize:'14px',marginBottom:'13px'}}>These are the top rules that count towards your execution limit. The counts are for the last 30 days and not for the current billing period.</p>
            <DynamicTable
                        head={heads}
                        rows={[]}
                        isRankable
            />
            { isTableEmpty &&
            <p style={{color:'gray',fontSize:'14px',textAlign:'center'}}>No active global or multi-project rules were executed during this time period</p>
            }
        </div>
    )
}
export default UsageTabPanel;