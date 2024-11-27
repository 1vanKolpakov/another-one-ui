import React, { FC } from "react";
import classNames from "classnames";
import * as stls from './Spoiler.module.scss'

interface SpoilerProps {

}

const Spoiler: FC<SpoilerProps> = ({ }) => {
  return (
    <details className={stls.details}>
      <summary className={stls.summary}>Summary</summary>
      <div className={stls.content}>
        <p>Content</p>
      </div>
    </details>
  )
};

export default Spoiler;