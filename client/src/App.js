/**
 * Main App component. Holds state for the webpage and passes it to the
 * subcomponents
 * @returns App
 */

import React, { useState, useEffect, useCallback } from "react";
import Section from "./components/Section";

export default function App() {
  const [tasks, setTasks] = useState();
  
  let testDateStart = new Date("12/22/21");
  let testDateEnd = new Date("12/29/21");
  
  const fetchTasks = useCallback(() => {
    fetch('/api/tasks')
      .then(res => res.json())
      .then((res) => {
        const result = [];
        res.forEach((task) => {
          const obj = {};
          obj['text'] = task['text'];
          obj['start'] = new Date(task['start']);
          obj['end'] = new Date(task['end']);
          result.push(obj);
        });
        return result;
      })
      .then(res => setTasks(res));
    console.log(tasks);
    console.log(tasks[0]);
  });
  
  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return (

    <div className="App d-flex flex-row justify-content-center">
      <Section tasks={tasks} setTasks={setTasks} startDate={testDateStart} endDate={testDateEnd} />
    </div>
  );
}
