
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

      <div class="uk-container">
        <progress id="js-progressbar" class="uk-progress uk-progress-success" value={progress_value} max="100"></progress><br/>
        <div className={tracking_status}> 
          <div class="uk-block">
    <button class="uk-button uk-position-center-right" type="button" onClick={this.show_detail.bind(this)}>
    {!this.state.condition ? <i class="fas fa-arrow-down"></i> : <i class="fas fa-arrow-up"></i> }</button>

                <div class="">{this.props.tracking_info.tracking_number} <br/></div>
              {this.props.tracking_info.status_code}

            { this.state.condition ?(
            <div>
            {this.props.tracking_info.status_code}
            </div>
            )
            :(null) 
            }
            </div>
            
        </div>
      <br/>
      </div>
    )

  }


}
