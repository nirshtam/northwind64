import { Component, SyntheticEvent } from "react";
import css from './Search.module.css';

interface SearchProps {
    textToSearch: string;
    backgroundColor: string;
}

class Search extends Component<{}, SearchProps> {
    public constructor(props: {}) {
        super(props);
        this.state = {
            textToSearch: "",
            backgroundColor: "pink"
        }
    }

    private onChange = (event: SyntheticEvent) => {
        const value = (event.target as HTMLInputElement).value;
        this.setState({
            textToSearch: value
        });
    }

    private clearSearch = (event: SyntheticEvent) => {
        this.setState({
            textToSearch: ""
        });

        if (this.state.backgroundColor === "pink") {
            this.setState({ backgroundColor: "cyan" });
        }
        else {
            this.setState({ backgroundColor: "pink" });
        }
        
        this.dynamicStyling = {
            backgroundColor: this.state.backgroundColor
        }
    }

    private dynamicStyling = {
        backgroundColor: "",
    }

    public render(): JSX.Element {
        return (
            <div className={css.search + " box"} style={this.dynamicStyling}>
                <p className="search">
                    <input 
                        type="text"
                        placeholder="What you want to search for?"
                        onChange={this.onChange}
                        value={this.state.textToSearch}
                    />
                </p>
                {this.state.textToSearch && (
                    <p>
                        Searching for {this.state.textToSearch}
                    </p>
                )}
                <p>
                    <button onClick={this.clearSearch}>Clear</button>
                </p>
            </div>
        )
    }
}

export default Search;