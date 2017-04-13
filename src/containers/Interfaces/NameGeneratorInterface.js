import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actionCreators as networkActions } from '../../ducks/modules/network';

import { Prompt, NodeList, ModalForm } from '../../components/InterfaceComponents';

const nodeLabel = function(node) {
  return `${node.name} "${node.nickname}"`;
};

/**
  * This would/could be specified in the protocol, and draws upon ready made components
  */
class NameGeneratorInterface extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPromptIndex: 0
    }
  }

  handleModalFormSubmit(node) {
    const {
      addNode
    } = this.props;

    if (node) {
      const attributes = this.currentPrompt().nodeAttributes;
      addNode({ ...node, attributes });
    }
  }

  currentPrompt() {
    const prompts = this.props.config.params.prompts;
    return prompts[ this.state.currentPromptIndex ];
  }

  render() {
    const {
      network,
      config: {
        params: {
          prompts,
          form
        }
      }
    } = this.props;

    console.log(this.props);

    return (
      <div>
        <h3>Name Generator Interface</h3>
        <Prompt prompts={ prompts } currentIndex={ this.state.currentPromptIndex } />
        <NodeList network={ network } label={ nodeLabel } />
        <ModalForm { ...form } form={ form.formName } onSubmit={ this.handleModalFormSubmit.bind(this) }/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    network: state.network
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addNode: bindActionCreators(networkActions.addNode, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NameGeneratorInterface);