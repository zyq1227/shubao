import { Table, Divider, Button } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React from 'react';
import { formatMessage } from 'umi-plugin-react/locale';
// import EditorMinimap from './components/EditorMinimap';
// import { FlowContextMenu } from './components/EditorContextMenu';
// import { FlowDetailPanel } from './components/EditorDetailPanel';
// import { FlowItemPanel } from './components/EditorItemPanel';
// import { FlowToolbar } from './components/EditorToolbar';
import MForm from './components/form';

export default () => (
  <PageHeaderWrapper
    content={formatMessage({
      id: 'editor-flow.description',
      defaultMessage: 'description',
    })}
  >
    <MForm />
  </PageHeaderWrapper>
);
