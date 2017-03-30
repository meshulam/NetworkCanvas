import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ProtocolPrompt } from '../components';
class ProtocolStage extends Component {
  render() {
    const {
      title,
      params
    } = this.props.stage;
    return (
      <div className='container'>
        <div className='col'>
          <h1>{title}</h1>
        </div>
        <div className='col'>
          {
            params.prompts &&
            params.prompts.map((prompt, idx) =>
              <ProtocolPrompt
                key={idx}
                prompt={prompt} />
            )
          }
        </div>
      </div>
    );
  }
}

ProtocolStage.propTypes = {
  stage: React.PropTypes.object
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    network: state.network,
    participant: state.participant,
    protocol: state.protocol
  }
}

export default connect(mapStateToProps)(ProtocolStage);
