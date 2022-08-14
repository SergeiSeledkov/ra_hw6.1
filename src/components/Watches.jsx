import React, { useState } from 'react';
import { v4 } from 'uuid';
import Form from './Form/Form';
import List from './List/List';

const defaultTime = [
   {
      id: v4(),
      name: 'Екатеринбург',
      timeZone: '5',
   }
];

export default function Watches() {
   const [watches, setWatch] = useState(defaultTime);

   const onAdd = (watch) => {
      setWatch((prev) => [...prev, {
         ...watch,
         id: v4()
      }]);
   };

   const onDelete = (id) => {
      setWatch(() => watches.filter((el) => el.id !== id));
   };

   return (
      <div className="Watches">
         <Form onAdd={onAdd} />
         <List watches={watches} onDelete={onDelete} />
      </div>
   );
}
