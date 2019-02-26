


class ProgressBox extends React.Component{
  render(tracking_info){
    return(
      <div class="uk-card">
        <progress id="js-progressbar" class="uk-progress" value="" max="100"></progress>
        <div>{this.props.tracking_info.tracking_number} {this.props.tracking_info.status_code}</div>
      <br/>
      </div>
    )
  }

}