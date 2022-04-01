import Button from '@atlaskit/button';
import Select from '@atlaskit/select';
import EditorMoreIcon from '@atlaskit/icon/glyph/editor/more';
import './styles.css';

const Header = () => {
    return(
        <div className='headerContainer'>
            <div>
                <h3>Automation</h3>
            </div>
            <div className='optionsContainer'>
                <Button appearance="primary" style={{marginRight:'10px'}}>Create rule</Button>
                {/* <Select
                    options={[
                        { label: 'Adelaide', value: 'adelaide' },
                        { label: 'Brisbane', value: 'brisbane' },
                        { label: 'Canberra', value: 'canberra' },
                    ]}
                    placeholder={<EditorMoreIcon/>}
                /> */}
                <Button><EditorMoreIcon/></Button>
            </div>
        </div>
    )
}

export default Header;