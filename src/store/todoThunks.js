import { todoActions } from './todoSlice';
import { uiActions } from './uiSlice';

export const fetchTodos = () => {
  return async (dispatch) => {
    dispatch(uiActions.showSpinner(true));
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
          order: data[key].order,
        });
      }

      const sortedTodos = todos.sort((a, b) => a.order - b.order);
      dispatch(todoActions.setTodos(sortedTodos));
    } catch (error) {
      alert(error.message);
    }
    dispatch(uiActions.showSpinner(false));
  };
};

export const sendTodoData = (todo) => {
  return async (dispatch) => {
    dispatch(uiActions.showSpinner(true));

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

      const responseData = await response.json();
      return responseData;
    };

    try {
      const responseData = await sendRequest();
      dispatch(
        todoActions.addNewTodo({
          id: responseData.name,
          text: todo,
          completed: false,
        })
      );
      dispatch(todoActions.clearInput());
    } catch (error) {
      alert(error.message);
    }
    dispatch(uiActions.showSpinner(false));
  };
};

export const toggleTodoData = (id, completed) => {
  return async (dispatch) => {
    dispatch(uiActions.showSpinner(true));
    const sendRequest = async () => {
      const response = await fetch(
        `https://todo-app-eb66a-default-rtdb.europe-west1.firebasedatabase.app/todo/${id}.json`,
        {
          method: 'PATCH',
          body: JSON.stringify({
            completed: completed,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Sending todo data failed!');
      }
    };

    try {
      await sendRequest();
      dispatch(todoActions.toggleTodo(id));
    } catch (error) {
      alert(error.message);
    }
    dispatch(uiActions.showSpinner(false));
  };
};

export const deleteTodoData = (id) => {
  return async (dispatch) => {
    dispatch(uiActions.showSpinner(true));
    const sendRequest = async () => {
      const response = await fetch(
        `https://todo-app-eb66a-default-rtdb.europe-west1.firebasedatabase.app/todo/${id}.json`,
        {
          method: 'DELETE',
        }
      );

      if (!response.ok) {
        throw new Error('Sending todo data failed!');
      }
    };

    try {
      await sendRequest();
      dispatch(todoActions.deleteTodo(id));
    } catch (error) {
      alert(error);
    }
    dispatch(uiActions.showSpinner(false));
  };
};

export const reorderTodos = (todos) => {
  return async (dispatch) => {
    dispatch(uiActions.showSpinner(true));

    const formattedTodos = todos.reduce((acc, cur, index) => {
      acc[cur.id] = {
        text: cur.text,
        completed: cur.completed,
        order: index,
      };
      return acc;
    }, {});

    const sendRequest = async () => {
      const response = await fetch(
        `https://todo-app-eb66a-default-rtdb.europe-west1.firebasedatabase.app/todo.json`,
        {
          method: 'PUT',
          body: JSON.stringify(formattedTodos),
        }
      );

      if (!response.ok) {
        throw new Error('Sending todo data failed!');
      }
    };

    try {
      await sendRequest();
      dispatch(todoActions.setTodos(todos));
    } catch (error) {
      alert(error.message);
    }
    dispatch(uiActions.showSpinner(false));
  };
};

export const clearCompletedTodos = (todos) => {
  return async (dispatch) => {
    dispatch(uiActions.showSpinner(true));
    const filteredCompletedTodos = todos.reduce((acc, cur) => {
      if (!cur.completed) {
        acc[cur.id] = cur;
        return acc;
      }
      return acc;
    }, {});

    const sendRequest = async () => {
      const response = await fetch(
        'https://todo-app-eb66a-default-rtdb.europe-west1.firebasedatabase.app/todo.json',
        {
          method: 'PUT',
          body: JSON.stringify(filteredCompletedTodos),
        }
      );

      if (!response.ok) {
        throw new Error('Sending todo data failed!');
      }
    };

    try {
      await sendRequest();
      dispatch(todoActions.clearCompleted());
    } catch (error) {
      alert(error.message);
    }
    dispatch(uiActions.showSpinner(false));
  };
};
