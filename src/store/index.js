import { writable } from 'svelte/store';

export const store = writable([
  {
    title: 'teste',
    description: 'testDescription',
  },
]);

export const addPost = (post) => store.update((prevValue) => [...prevValue, post]);
export const markPostAsViewed = (post) => {
  store.update((prevValue) => {
    const index = prevValue.indexOf(post);

    return prevValue.map((value, idx) => {
      if (index === idx) return { ...value, checked: true };
      return value;
    });
  });
};
