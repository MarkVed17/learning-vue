const app = Vue.createApp({
  // data, functions
  data() {
    return {
      showBooks: true,
      title: "The Pragmatic Programmer",
      author: "David Thomas and Andrew Hunt",
      rating: 5,
      x: 0,
      y: 0,
      books: [
        {
          title: "Eloquent JavaScript",
          author: "Marijn Haverbeke",
          img: "https://eloquentjavascript.net/img/cover.jpg",
          isFav: true,
        },
        {
          title: "You Don't Know JS!",
          author: "Kyle Simpson",
          img: "https://images.milled.com/2018-01-30/hqNYrcn4pMhb-x0D/555zKqWjiqit.png",
          isFav: false,
        },
        {
          title: "JavaScript: The Good Parts",
          author: "Douglas Crockford",
          img: "https://www.z-epub.com/images/covers/2021/March/605773b069e9a/9780596517748.jpg",
          isFav: true,
        },
      ],
    };
  },
  methods: {
    changeTitle() {
      this.title = "Eloquent JavasScript";
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(e, data) {
      console.log(e, e.type);
      if (data) {
        console.log(data);
      }
    },
    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },

    toggleFav(book) {
      book.isFav = !book.isFav;
    },
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav);
    },
  },
}); // This creates a Vue app

app.mount("#app"); // mount() tells the app at what point or where in the DOM should the application be mounted.
