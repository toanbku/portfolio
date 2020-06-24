import React from "react";
import ModalImage from "react-modal-image";
import map from './map';
import './Dlut.scss';

class Dlut extends React.Component {

  constructor() {
    super();
    this.state = {
      value: '',
      result: [],
      hasSearch: false,
    }
    this.findMyBib = this.findMyBib.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  findMyBib = () => {
    this.setState({
      result: []
    });
    const { value  } = this.state;
    const res = map.filter(item => item.value.includes(value));
    this.setState({
      result: res,
      hasSearch: true,
    });
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  renderURL(key, vol) {
    return `https://cdn.nhanh.vn/cdn/store1/43017/album/${vol}/${key}`;
  }

  render() {
    return (
      <div id="dlut" className="jumbotron jumbotron-fluid m-0">
        <div className="container container-fluid p-5">
          <div className="row search-row">
            <div className="title">
              <h1 className="text-center">Dalat Ultra Trail 2020 [imsports.vn]</h1>
            </div>
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                placeholder="Enter your bib here..."
                value={this.state.value}
                onChange={this.handleChange}
              />
              <div class="input-group-append">
                <button
                  class="btn btn-secondary"
                  type="button"
                  onClick={this.findMyBib}
                >
                  <i class="fa fa-search"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            {
              this.state.result.map(item => (
                <div class="col-sm-12 col-md-6 col-margin-bottom">
                  <ModalImage
                    small={this.renderURL(item.key, item.vol)}
                    large={this.renderURL(item.key, item.vol)}
                    alt={item.key}
                  />
                </div>
              ))
            }
            {
              (this.state.hasSearch && this.state.result.length === 0) ?
                <div className="row">
                  <div class="col-margin-bottom">
                  <h1>Nothing found :(((</h1>
                  </div>
                </div>
              : null
            }
          </div>
        </div>
      </div>
    );
  }
};

export default Dlut;
