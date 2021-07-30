import React, { useState } from 'react'
import { Collapse, Radio } from 'antd';
import Collapsible from 'react-collapsible';
const { Panel } = Collapse;


function RadioBox3(props) {

    const [Value, setValue] = useState('0')

    const renderRadioBox = () => (
        props.list &&  props.list.map((value) => (
            <Radio key={value._id} value={`${value._id}`}>{value.name}</Radio>
        ))
    )

    const handleChange = (event) => {
        setValue(event.target.value)
        props.handleFilters(event.target.value)
    }

    return (
        <div style={{
            display: 'block', width: 175, padding: 0
          }}>
              <Collapsible trigger="> Condition">
                    <Radio.Group onChange={handleChange} value={Value}>

                        {renderRadioBox()}

                    </Radio.Group>
                    </Collapsible>
        </div>
    )
}

export default RadioBox3
