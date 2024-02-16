interface ITodoItemContent {
  content: string;
}

interface TodoItem extends ITodoItemContent {
  id: string;
  completed: boolean;
  editing: boolean;
}
