import './styles.css'
import ArrowRightIcon from '@atlaskit/icon/glyph/arrow-right';
import BitbucketBranchesIcon from '@atlaskit/icon/glyph/bitbucket/branches';
import EmojiAtlassianIcon from '@atlaskit/icon/glyph/emoji/atlassian';

import { B500, Y500 } from '@atlaskit/theme/colors';

 export const Box = ({text}) => {
    return (
        <div className='box'>
            <div className='upperContent'>
                <div style={{display:'flex',alignItems:'center',paddingLeft:'40px',paddingTop:'40px'}}>
                    <EmojiAtlassianIcon primaryColor ={B500}  size='large'/>
                    <ArrowRightIcon primaryColor ={B500} size='large'/>
                    <BitbucketBranchesIcon primaryColor ={B500} size='large'/>
                </div>
            </div>
            <div className='bottomContent'>
                <p style={{margin:'0',paddingTop:'30px',paddingLeft:'30px',color:'#000'}}>{text}</p>

            </div>
        </div>
    )
}
