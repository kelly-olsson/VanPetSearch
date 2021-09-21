import React from "react"
import { Column, Table, AutoSizer } from 'react-virtualized';
import './reactVirtualizedCustom.css'

function LostFoundTable(props) {
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
                    label='Breed'
                    dataKey='breed'
                    width={800}
                    />
                    <Column
                    width={900}
                    label='Color'
                    dataKey='color'
                    />
                    <Column
                    width={800}
                    label='Date'
                    dataKey='date'
                    />
                    <Column
                    width={600}
                    label='Name'
                    dataKey='name'
                    />
                    <Column
                    width={400}
                    label='Sex'
                    dataKey='sex'
                    />
                    <Column
                    width={600}
                    label='State'
                    dataKey='state'
                    />
                </Table>
            )}
        </AutoSizer> 
      </div>  
    )
}

export default LostFoundTable