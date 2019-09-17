import GGEditor from "gg-editor";
import { PageHeaderWrapper } from "@ant-design/pro-layout";
import React from "react";
import EditorComponent from "./components/EditorComponent";
import styles from "./index.less";

GGEditor.setTrackable(false);
export default () => (
  <PageHeaderWrapper
  >
    <GGEditor className={styles.editor}>
      <EditorComponent />
    </GGEditor>
  </PageHeaderWrapper>
);
