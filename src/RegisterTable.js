import React from "react"
import { Column, Table, AutoSizer } from 'react-virtualized';
import './reactVirtualizedCustom.css'

function RegisterTable(props) {
    const list = [props]
    return (
        <div style={{ height: 90 }}>
        <AutoSizer>
            {({ height, width }) => (       
                <Table
                width={width}
                height={height}
                headerHeight={20}
                rowHeight={70}
                rowCount={list.length}
                rowGetter={({ index }) => list[index]}
                >
                    <Column
                    label='Date Impounded'
                    dataKey='dateimpounded'
                    width={2000}
                    />
                    <Column
                    width={900}
                    label='Age'
                    dataKey='age'
                    />
                    <Column
                    width={1000}
                    label='Status'
                    dataKey='status'
                    />
                    <Column
                    width={1000}
                    label='Name'
                    dataKey='name'
                    />
                    <Column
                    width={1200}
                    label='Animal ID'
                    dataKey='animalid'
                    />
                    <Column
                    width={1000}
                    label='Color'
                    dataKey='color'
                    />
                    <Column
                    width={2000}
                    label='Breed'
                    dataKey='breed'
                    />
                    <Column
                    width={600}
                    label='Sex'
                    dataKey='sex'
                    />
                    <Column
                    width={1000}
                    label='Source'
                    dataKey='source'
                    />
                </Table>
            )}
        </AutoSizer> 
      </div>  
    )
}

export default RegisterTable