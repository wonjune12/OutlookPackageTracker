
class ProgressBox extends React.Component{
  constructor() {
    super();
    
    this.state = {
      condition: false,
    }
    this.show_detail = this.show_detail.bind(this)

  }
  show_detail(event){
    this.setState({
      condition: !this.state.condition
    })
  }

  render(tracking_info){
    let tracking_status = ['uk-position-center-right message']
    let progress_value = 0;
    if(this.props.tracking_info.status_code == 'NY') {
      tracking_status +=("-error")
      progress_value = 0;
    }
    if(this.props.tracking_info.status_code == 'UN') {
      tracking_status +=("-warning")
      progress_value = 0;
    }
    if(this.props.tracking_info.status_code == 'DE') {
      tracking_status +=("-success")
      progress_value = 100;
    }
    if(this.props.tracking_info.status_code == 'IT') {
      tracking_status +=("-process")
      progress_value = 33;
    }
    if(this.props.tracking_info.status_code == 'AC') {
      tracking_status +=("-process")
      progress_value = 10;
    }


    return(

      <div className="uk-container">
        <progress id="js-progressbar" className="uk-progress uk-progress-success" value={progress_value} max="100"></progress><br/>
        <div className={tracking_status += " uk-position-left"} id="small-bottom-margin"> 
            Tracking Number : {this.props.tracking_info.tracking_number}<br/>
            Status Code : {this.props.tracking_info.status_code}<br/><br/>
          <button className="uk-button uk-position-center-right" type="button" onClick={this.show_detail.bind(this)}>
          {!this.state.condition ? <i className="fas fa-arrow-down"></i> : <i className="fas fa-arrow-up"></i> }</button>


            { this.state.condition ?(
            <div>
              {this.props.tracking_info.carrier_status_description}
            </div>
            )
            :(null) 
            }
            </div>
      <br/>
      </div>
    )

  }


}
