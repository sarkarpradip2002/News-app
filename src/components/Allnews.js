import React, { Component } from 'react'
import Newspart from './Newspart'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";


export class Allnews extends Component {
    
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: true,
            totalresult: 0,
            page: 1,
        }
    }
    async componentDidMount(props) {
        this.props.changeprogress(10);
        console.log(this.props.apikey);
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apikey=${this.props.apikey}&pagesize=6`;
        let data = await fetch(url);
        this.props.changeprogress(75);
        let parseddata = await data.json();
        this.setState({
            articles: parseddata.articles,
            totalresult: parseddata.totalResults,
            loading: false,
        });
        this.props.changeprogress(100);
        document.title = `${this.capitalizefirstletter(this.props.category)}-India News `
    }
    capitalizefirstletter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    fetchMoreData= async ()=>{
        this.setState({loading: true,page:this.state.page+1,articles:this.state.articles})
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apikey=${this.props.apikey}&page=${this.state.page}&pagesize=6`;
        let data = await fetch(url);
        let parseddata = await data.json();
        this.setState({
            articles: this.state.articles.concat(parseddata.articles),
            loading: false,
        });
    }


    // nextpage=async ()=>{
    //     if(this.state.page+1>Math.ceil(this.state.totalresult/9))
    //     {

    //     }
    //     else{
    //         this.setState({
    //             articles: [],
    //             loading : true,
    //         })
    //     let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&this.apikey=46cdc41be0f84f81b369eaada0554af1&page=${this.state.page+1}&pagesize=6`;
    //     let data=await fetch(url);
    //     let parseddata=await data.json();
    //     this.setState({articles: parseddata.articles,
    //     page: this.state.page+1,
    // totalresult: parseddata.totalResults ,
    // loading: false});
    //     }
    // }

    // previouspage=async ()=>{
    //     this.setState({
    //         articles: [],
    //         loading : true,
    //     })
    //     let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&this.apikey=46cdc41be0f84f81b369eaada0554af1&page=${this.state.page-1}&pagesize=6`;
    //     let data=await fetch(url);
    //     let parseddata=await data.json();
    //     this.setState({articles: parseddata.articles,
    //     page: this.state.page-1,
    //     loading: false});
    // }

    render() {

        return (
            <div className="container">
                {/* {this.state.loading && <Spinner/>}  */}
                <div className="row mt-3">
                    {!this.state.loading && <div style={{ textAlign: "center", marginBottom: "20px",marginTop: "50px" }}>
                        <h2>Recent news on-{this.props.category}</h2>
                    </div>}
                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length!== this.state.totalresult}
                        loader={<Spinner style={{marginTop:"20px"}} />}
                        >
                            <div className="container">
                            <div className="row">
                        {this.state.articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <Newspart title={element.title} description={element.description} image={element.urlToImage} time={element.publishedAt} author={element.author === null ? 'No Author' : element.author} url={element.url} />
                            </div>
                        })}
                        </div>
                        </div>
                    </InfiniteScroll>
                </div>
                {/* <div className="container d-flex justify-content-evenly mt-3">
             <button type="button" disabled={this.state.page===1} className="btn btn-danger" onClick={this.previouspage}>&larr; Previous</button>
             <button type="button" disabled={this.state.page>Math.ceil(this.state.totalresult/9)} className="btn btn-danger" onClick={this.nextpage}>Next &rarr;</button>
             </div> */}
            </div>

        )
    }
}

export default Allnews
