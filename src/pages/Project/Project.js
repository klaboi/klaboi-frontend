


/*class Products extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    };
    componentDidMount = () => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=xxxxxxxx&page=1")
        .then(resp => resp.json())
        .then(resp => {
            this.setState({
                isLoaded: true,
                items: resp.results
            })
            console.log(this.state.items)      
    })};

   
      render() {
        var {isLoaded, items} = this.state;
        
        if (!isLoaded || !items)
        return null; // or if you like, show a "Waiting" indicator

        return (
            <div>
                {items.map(item => (<Card key={item.id} item={item} />))};
            </div>
        );
    }
  
}

export default Products;*/