import React, { Component } from 'react';
import { Props, State } from '@/type/index';

// component 类型暂未完成
type IState = State & {
  // component: React.ReactElement | null;
  component: any;
};

type ImportComponent = () => Promise<{ default: React.ReactElement }>;

export default function asyncComponent(importComponent: ImportComponent) {
  class AsyncComponent extends Component<Props, IState> {
    constructor(props: Props) {
      super(props);
      this.state = {
        component: null
      };
    }

    async componentDidMount() {
      if (this.hasLoadedComponent()) {
        return;
      }
      const { default: component } = await importComponent();
      this.setState({
        component
      });
    }

    componentWillUnmount() {
      this.setState = () => {
        return false;
      };
    }

    hasLoadedComponent() {
      return this.state.component !== null;
    }

    render() {
      const C = this.state.component;
      return C ? <C {...this.props} /> : null;
    }
  }

  return AsyncComponent;
}
