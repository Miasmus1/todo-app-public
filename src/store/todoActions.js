import { todoActions } from './todoSlice';

export const fetchTodos = () => {
  return async (dispatch) => {
    const fetchRequest = async () => {
      const response = await fetch(
        'https://todo-app-eb66a-default-rtdb.europe-west1.firebasedatabase.app/todo.json'
      );

      if (!response.ok) {
        throw new Error('Could not fetch todos!');
      }

      const data = await response.json();
      return data;
    };

    try {
      const data = await fetchRequest();
      const todos = [];

      for (const key in data) {
        todos.push({
          id: key,
          text: data[key].text,
          completed: data[key].completed,
        });
      }

      dispatch(todoActions.setTodos(todos));
    } catch (error) {
      console.log(error);
    }
  };
};

export const sendTodoData = (todo) => {
  return async () => {
    const sendRequest = async () => {
      const response = await fetch(
        'https://todo-app-eb66a-default-rtdb.europe-west1.firebasedatabase.app/todo.json',
        {
          method: 'POST',
          body: JSON.stringify({
            text: todo,
            completed: false,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Sending todo data failed!');
      }
    };

    try {
      await sendRequest();
    } catch (error) {
      alert(error);
    }
  };
};

// export const toggleTodoData = (id, completed) => {
//   return async () => {
//     const sendRequest = async () => {
//       const response = await fetch(
//         `https://todo-app-eb66a-default-rtdb.europe-west1.firebasedatabase.app/todo/${id}.json`,
//         {
//           method: 'PATCH',
//           body: JSON.stringify({
//             completed: completed,
//           }),
//         }
//       );
//     };
//   };
// };

export const clearCompletedTodos = (filteredTodo) => {
  return async () => {
    const sendRequest = async () => {
      const response = await fetch(
        'https://todo-app-eb66a-default-rtdb.europe-west1.firebasedatabase.app/todo.json',
        {
          method: 'PUT',
          body: JSON.stringify(filteredTodo),
        }
      );

      if (!response.ok) {
        throw new Error('Sending todo data failed!');
      }
    };

    try {
      await sendRequest();
    } catch (error) {
      alert(error);
    }
  };
};
