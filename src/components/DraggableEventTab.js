import React from 'react';
import { useDrag } from 'react-dnd';
import "../styling/draggable.css"

const DraggableEventTab = ({ event }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'EVENT', // Ensure that the type property is defined
    item: { id: event.id },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
      }}
      className="draggable-event-tab"
    >
      <div className="event-tile">Title: {event.title}</div>
      <div className="event-keyword">Keyword: {event.keyword}</div>
    </div>
  );
};

export default DraggableEventTab;
