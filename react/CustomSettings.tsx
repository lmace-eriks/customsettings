import React from 'react';
import { useEffect } from 'react';

// Styles
import styles from "./styles.css";

interface CustomSettingsProps {
  metaViewport: string
}

const CustomSettings: StorefrontFunctionComponent<CustomSettingsProps> = ({ metaViewport }) => {

  useEffect(() => {
    console.log("Overwriting VTEX Settings...");
    runMeta();
  })

  const runMeta = () => {
    console.clear();
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

  return (<></>)
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
