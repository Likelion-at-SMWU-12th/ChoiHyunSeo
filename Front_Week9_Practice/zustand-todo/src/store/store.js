import { create } from "zustand";

// 스토어 생성 (create를 통해 useTodoStore을 생성)
const useTodoStore = create((set) => ({
  // 상태 초깃값 설정
  todos: [],
  // 액션 함수 작성
  // todo 배열에 객체를 추가 (it, title, completed 속성 등)
  addTodo: (title) =>
    set((state) => ({
      todos: [...state.todos, { id: Date.now(), title, completed: false }],
    })),
  // id를 매개변수로 받아서 해당 id와 일치하지 않는 항목들만 남기고 필터링한 새로운 todos 배열을 만든다
  // 해당 id 항목 삭제 효과
  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
  // map을 통해 todo 배열을 순회하면서 매개변수로 받은 id에 해당하는 객체를 찾아 completed 속성 변경
  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    })),
}));

export default useTodoStore;
