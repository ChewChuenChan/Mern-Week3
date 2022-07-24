
import React, { useState } from 'react';
import Button from './Button'
import StyledBox from './StyledBox';
import Display from './Display';

const Tabs = () => {

    const [currentTab, setCurrentTab] = useState('1');
    const tabs = [
        {
            id: 1,
            tabTitle: 'Tab 1',
            content: 'Tab 1 content is showing here.'
        },
        {
            id: 2,
            tabTitle: 'Tab 2',
            content: 'Tab 2 content is showing here.'
        },
        {
            id: 3,
            tabTitle: 'Tab 3',
            content: 'Tab 3 content is showing here.'
        }
    ];

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }

    return (
        <div className='container'>
            <StyledBox>
                {tabs.map((tab, i) =>
                    <Button key={i} id={tab.id} select={currentTab === `${tab.id}`} onClick={(handleTabClick)}>{tab.tabTitle}</Button>
                )}
            </StyledBox>
            <Display>
                {tabs.map((tab, i) =>
                    <div key={i}>
                        {currentTab === `${tab.id}` && <div><p>{tab.content}</p></div>}
                    </div>
                )}
            </Display>

        </div>
    );
}

export default Tabs;