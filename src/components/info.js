import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TextEllipsis from 'react-text-ellipsis'

let Info = class Info extends React.Component {

  static propTypes = {
    active: PropTypes.object.isRequired,
    currentFeature: PropTypes.object
  };
// this.props.active;

  render() {
    const { name, description, stops } = this.props.active;

    // const renderLegendKeys = (stop, i) => {
    //   return (
    //     <div key={i} className='txt-s'>
    //       <span className='mr6 round-full w12 h12 inline-block align-middle' style={{ backgroundColor: stop[1] }} />
    //       <span>{`${stop[0].toLocaleString()}`}</span>
    //     </div>
    //   );
    // }
    var vari = {
      fontSize: '10px'
    }
    return (
      <div className="bg-white popup row absolute pop bottom left shadow-darken10~ z1 wmax500">
        <div className='mb6 col popic spanpop'>
          <img src={this.props.currentFeature ? 
            this.props.currentFeature.properties.image_path:''} 
          className="picha img-left" />
        </div>        
        <div className="col">
        <font size="5" face="Courier New" text-align="left" padding="0" >
          <table className="pop-table">
             <tbody>
                 <tr>
                     <th scope="row">Waste site type:</th>
                     {/* <td id="wst tx" style={vari}>{this.props.currentFeature?this.props.currentFeature.properties.waste_site_type:''}</td> */}
                     <td id="wt tx" style={vari}>
                     <TextEllipsis lines={1}>
                     {this.props.currentFeature ? 
                      this.props.currentFeature.properties.wst : ''}
                     </TextEllipsis></td>

                 </tr>
                 <tr>
                      <th scope="row">Waste type:</th>
                      <td id="wt tx" style={vari}>
                      <TextEllipsis lines={1}>
                      {this.props.currentFeature ?
                       this.props.currentFeature.properties.wt :''}
                      </TextEllipsis></td>
                  </tr>
                  <tr>
                      <th scope="row">Trash size:</th>
                      <td id="ts tx" style={vari}>
                      {this.props.currentFeature ? 
                        this.props.currentFeature.properties.ts:''}
                      </td>
                  </tr>
                  <tr>
                      <th scope="row">Clean Up Method:</th>
                      <td id="cu tx" style={vari}>
                      {this.props.currentFeature ? 
                        this.props.currentFeature.properties.clm :''}
                      </td>
                  </tr>
                  <tr>
                      <th scope="row">Accessibility:</th>
                      <td id="at tx" style={vari}>
                      {this.props.currentFeature ? 
                        this.props.currentFeature.properties.at :''}
                      </td>
                  </tr>
               
          </tbody> 
          </table>
          </font>
      </div>
                
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    active: state.active,
    options: state.options,
    currentFeature: state.currentFeature
  };
}

Info = connect(mapStateToProps)(Info);

export default Info;
