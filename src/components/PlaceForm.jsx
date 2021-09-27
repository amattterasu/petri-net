import React, { Component } from 'react';
import { Button, Form, Input, InputNumber } from 'antd';

class PlaceForm extends Component {
  constructor(props) {
    super(props);

    this.handleLabelChange = this.handleLabelChange.bind(this);
  }

  handleLabelChange(event) {
    this.props.onLabelChange(event.target.value);
  }

  render() {
    return (
      <>
        <h2>Позиция</h2>
        <Form layout="vertical">
          <Form.Item label="Название">
            <Input id="label"
                   value={this.props.label}
                   onChange={this.handleLabelChange} />
          </Form.Item>
          <Form.Item label="Емкость">
            <InputNumber id="capacityLimit"
                         min={0}
                         value={this.props.capacityLimit}
                         onChange={this.props.onCapacityLimitChange} />
          </Form.Item>
          <Form.Item label="Количество маркеров">
            <InputNumber id="numberOfTokens"
                         min={0}
                         value={this.props.numberOfTokens}
                         onChange={this.props.onNumberOfTokensChange} />
          </Form.Item>
          <Form.Item>
            <Button id="delete"
                    type="danger"
                    icon="delete"
                    block
                    onClick={this.props.onDelete}>
              Удалить
            </Button>
          </Form.Item>
        </Form>
      </>
    );
  }
}

export default PlaceForm;
