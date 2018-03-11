var vm = new Vue({
  el:"#app",
  data: {
  searchData: "",
  wikiData: "",
  openActive: false,
  mainActive: true,
  hideActive: false,
  apiUrl: "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&generator=search&exsentences=1&exintro=1&explaintext=1&gsrsearch=",
  pageUrl: "https://en.wikipedia.org/?curid="
  },
  methods:{
    wikisearch: function(){
      this.$http.jsonp(this.apiUrl + this.searchData)
          .then((response) => {
          this.wikiData = response.body;

    })
        .catch(function(response) {
        console.log(response)
    })
      this.mainActive= false;
      this.hideActive= true;
    },
    openclass: function(){
      this.openActive = this.openActive == false ? true : false;
      if(this.openActive == false){
        this.searchData= "";
        this.wikiData= "";
        this.mainActive= true;
        this.hideActive= false;
      }
    }
  }
});