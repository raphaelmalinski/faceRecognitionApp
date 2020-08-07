import React from 'react';

const Rank = ({ name, entries }) => {
    return (
        <div>
            <div className='white f3'>
                {`${name} , your current entry counts...`}
                <div className='white f1 '>
                    {entries}
                </div>
            </div>
        </div>
    );
}

export default Rank;