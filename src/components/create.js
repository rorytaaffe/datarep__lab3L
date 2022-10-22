import React from 'react';

// 'export' means we can export this component
export class Create extends React.Component {


    constructor() {
        super();

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeAuthor = this.onChangeAuthor.bind(this);
        this.onChangeFrontPage = this.onChangeFrontPage.bind(this);

        this.state = {
            Title: '',
            Year: '',
            Poster: ''
        }
    }

    onChangeTitle(e) {
        this.setState({
            Title: e.target.value
        });
    }

    onChangeAuthor(e){
        this.setState({
            Author: e.target.value
        });
    }

    onChangeFrontPage(e){
        this.setState({
            FrontPage: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        alert("Book: " + this.state.Title + " " + this.state.Author + " " + this.state.FrontPage);
    }

    render() {
        return (
            <div className='App'>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>Add Book Title: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Title}
                            onChange={this.onChangeTitle}></input>
                    </div>

                    <div className="form-group">
                        <label>Add Book Author: </label>
                        <input type='text'
                        className='form-control'
                        value={this.state.Author}
                        onChange={this.onChangeAuthor}></input>
                    </div>

                    <div className='form-group'>
                        <label>Add Front Page Url: </label>
                        <textarea type='text'
                        className='form-control'
                        value={this.state.FrontPage}
                        onChange={this.onChangeFrontPage}>

                        </textarea>
                    </div>

                    <div className="form-group">
                        <input type='submit'
                            value='Add Book'
                            className='btn btn-primary'></input>
                    </div>
                </form>
            </div>
        );
    }
}
