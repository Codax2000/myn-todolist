/**
 * Section Component
 * Each section holds tasks and their subtasks
 */

import React from 'react'

function Section({ tasks, setTasks, startDate, endDate }) {
    
    return (
        <div>
            { tasks
                .filter((task) => {
                    
                    return task['start'] > startDate && task['end'] < endDate
                })
                .map((task) => {
                    return <p>{ task['text'] }</p>
                }
            ) }
        </div>
    )
}

export default Section;