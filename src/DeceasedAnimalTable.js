import React from "react"
import { Column, Table, AutoSizer } from 'react-virtualized';
import './reactVirtualizedCustom.css'

function DeceasedAnimalTable(props) {
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
                    label='Animal ID'
                    dataKey='deadanimalid'
                    width={800}
                    />
                    <Column
                    width={900}
                    label='Date'
                    dataKey='deadanimaldate'
                    />
                    <Column
                    width={1000}
                    label='Cats'
                    dataKey='cats'
                    />
                    <Column
                    width={1000}
                    label='Dogs'
                    dataKey='dogs'
                    />
                    <Column
                    width={1400}
                    label='Description'
                    dataKey='description'
                    />
                    <Column
                    width={600}
                    label='Sex'
                    dataKey='sex'
                    />
                    <Column
                    width={2000}
                    label='Officer ID'
                    dataKey='aco'
                    />
                </Table>
            )}
        </AutoSizer> 
      </div>  
    )
}

export default DeceasedAnimalTable