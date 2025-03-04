import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="timeline">
      <div className="items-container">
        <h1>Timeline</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2022 - 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Master's in Computer Science @McGill University</h3>
            <h4 className="vertical-timeline-element-subtitle">Montreal, QC</h4>
            <p>
            Worked with Prof. Verbrugge. Parallelly solve the NFA/DFA using GPGPU devices using C++, typically NVidia GPU with CUDA API
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Gameplay Developer Intern @BehaviourInteractive</h3>
            <h4 className="vertical-timeline-element-subtitle">Montreal, QC</h4>
            <p>
            Gameplay development, worked in Dead by Daylight. Mainly responsible for debugging and performance optimization.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Gameplay Developer @Tencent Gaming</h3>
            <h4 className="vertical-timeline-element-subtitle">Shenzhen, China</h4>
            <p>
              Gameplay development, worked in two projects: The Outcast Mobile (Unity3D) and OnePiece: Ambitious (Unreal Engine). 
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2016 - 2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Bachelor's in Software Engineer @McGill University</h3>
            <h4 className="vertical-timeline-element-subtitle">Montreal, QC</h4>
            <p>
              Algorithm, Data Structure, Software Development, Computer Networks, Machine Learning
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;