import React, {Component} from 'react';
import { withRouter, Link } from 'react-router-dom';

class NavigationBar extends Component {

    constructor(props) {
        super(props);
        this.state = { isOpen: false, active: 'hero' };
        this.toggle = this.toggle.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if (this.props.location.pathname !== '/') return;
        const sections = ['hero', 'skills', 'experience', 'projects'];
        let current = 'hero';
        for (const id of sections) {
            const el = document.getElementById(id);
            if (el && el.getBoundingClientRect().top <= 80) current = id;
        }
        if (current !== this.state.active) this.setState({active: current});
    }

    toggle() {
        this.setState({isOpen: !this.state.isOpen});
    }

    scrollTo(e, id) {
        e.preventDefault();
        if (this.props.location.pathname !== '/') {
            this.props.history.push('/');
            setTimeout(() => {
                const el = document.getElementById(id);
                if (el) el.scrollIntoView({behavior: 'smooth'});
            }, 100);
        } else {
            document.getElementById(id).scrollIntoView({behavior: 'smooth'});
        }
        this.setState({isOpen: false});
    }

    render() {
        const {active, isOpen} = this.state;
        const onHome = this.props.location.pathname === '/';
        const onBlog = this.props.location.pathname === '/blog';
        const scrollLinks = [
            {id: 'hero', label: 'home'},
            {id: 'skills', label: 'skills'},
            {id: 'experience', label: 'experience'},
            {id: 'projects', label: 'projects'},
        ];

        return (
            <nav className="nav-terminal">
                <div className="container">
                    <a className="nav-brand" href="#hero" onClick={e => this.scrollTo(e, 'hero')}>
                        ~/vishal-chand
                    </a>
                    <button className="nav-toggle" onClick={this.toggle}>
                        <i className="fa fa-bars"/>
                    </button>
                    <ul className={"nav-links" + (isOpen ? " open" : "")}>
                        {scrollLinks.map(l =>
                            <li key={l.id}>
                                <a href={"#" + l.id}
                                   className={onHome && active === l.id ? 'active' : ''}
                                   onClick={e => this.scrollTo(e, l.id)}>
                                    {l.label}
                                </a>
                            </li>
                        )}
                        <li>
                            <Link to="/blog"
                                  className={onBlog ? 'active' : ''}
                                  onClick={() => this.setState({isOpen: false})}>
                                blog
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default withRouter(NavigationBar);
