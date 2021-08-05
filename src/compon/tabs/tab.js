import React, {useEffect, useRef, useState} from 'react';
import './tab.css';

import useSound from 'use-sound';
import clickAudio from '../../assets/sounds/click.mp3';
import chirpy from '../../assets/sounds/chirpy.mp3';


export default function Tab(props) {

    const [tabLabel, setTabLabel] = useState(props.tabLabel);
    const [tabType, setTabType] = useState();

    const [playClickAudio] = useSound(chirpy)

    const className = [
        "component-tab",
        tabType
      ];

    return (
        <div className={className.join("").replace(" ")} onClick={playClickAudio} type="radio">{tabLabel}</div>
    );

}