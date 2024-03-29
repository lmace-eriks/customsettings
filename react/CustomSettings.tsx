import React from 'react';
import { useEffect } from 'react';

// Styles
import styles from "./styles.css";

interface CustomSettingsProps {
  metaViewport: string
}

const CustomSettings: StorefrontFunctionComponent<CustomSettingsProps> = ({ metaViewport }) => {

  useEffect(() => {
    runMeta();
  })

  const runMeta = () => {
    // console.log("Overwriting Meta Viewport Tag...");
    // @ts-expect-error
    const badMetaHTML = document.getElementsByTagName("meta"); // HTML Collection
    const badMeta = Array.from(badMetaHTML); // Array

    let viewportTag;
    for (let i = 0; i < badMeta.length; i++) {
      // @ts-expect-error
      const currentMetaTag = badMeta[i].name;

      if (currentMetaTag === "viewport") {
        viewportTag = badMeta[i];
        break;
      }
    }
    // @ts-expect-error
    viewportTag.content = metaViewport;
  }

  return (
    <div className={styles.hiddenDiv}></div>
  )
}

CustomSettings.schema = {
  title: 'Custom Settings',
  description: 'Overwrite VTEX Settings that are not available to adjust.',
  type: 'object',
  properties: {
    metaViewport: {
      title: "Meta Viewport Tag",
      description: "Content of the Meta Viewport Tag",
      type: "string"
    }
  }
}

export default CustomSettings;
