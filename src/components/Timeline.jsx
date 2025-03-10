import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaUserCircle } from 'react-icons/fa';
import '../css/Timeline.css'



export const Timeline = () => {

    return (



        <VerticalTimeline
            lineColor={'#c5c5c5'}


        >
            <VerticalTimelineElement
                contentArrowStyle={{ borderRight: '10px solid  #d8d8d8' }}
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#d8d8d8', color: '#000', display: 'flex', flexDirection: 'column', borderRadius: '8px', borderTop: '3px solid #04e3e3' }}
                iconStyle={{ background: '#c5c5c5', color: '#8b3dff' }}
                icon={ <FaUserCircle size={50} />} 


            >
                <h3 className="vertical-timeline-element-title">Desarrollador</h3>
                <h4 className="vertical-timeline-element-subtitle">Android</h4>
                <p className='vertical-timeline-element-text'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam animi laborum facilis unde velit error aut dolorum? Earum illum qui neque. Consequuntur, ratione.
                </p>
                <span>2025</span>
            </VerticalTimelineElement>


            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentArrowStyle={{ borderRight: '10px solid  #d8d8d8' }}
                contentStyle={{ background: '#d8d8d8', color: '#000', borderRadius: '8px', borderTop: '3px solid #04e3e3' }}
                iconStyle={{ background: '#c5c5c5', color: '#8b3dff' }}
                icon={<FaUserCircle size={50} />}
            >
                <h3 className="vertical-timeline-element-title">Desarrollador</h3>
                <h4 className="vertical-timeline-element-subtitle">Apple</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam animi laborum facilis unde velit error aut dolorum? Earum illum qui neque. Consequuntur, ratione. Iure dolore nulla vel reprehenderit, harum corrupti!
                </p>
                <span>2025</span>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentArrowStyle={{ borderRight: '10px solid  #d8d8d8' }}
                contentStyle={{ background: '#d8d8d8', color: '#000', borderRadius: '8px', borderTop: '3px solid #04e3e3' }}
                iconStyle={{ background: '#c5c5c5', color: '#8b3dff' }}
                icon={<FaUserCircle size={50} />}
            >
                <h3 className="vertical-timeline-element-title">Testimonial Tres</h3>
                <h4 className="vertical-timeline-element-subtitle">Subtítulo del segundo evento</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam animi laborum facilis unde velit error aut dolorum? Earum illum qui neque. Consequuntur, ratione. Iure dolore nulla vel reprehenderit, harum corrupti!
                </p>
                <span>2024</span>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentArrowStyle={{ borderRight: '10px solid  #d8d8d8' }}
                contentStyle={{ background: '#d8d8d8', color: '#000', borderRadius: '8px', borderTop: '3px solid #04e3e3' }}
                iconStyle={{ background: '#c5c5c5', color: '#8b3dff' }}
                icon={<FaUserCircle size={50} />}
            >
                <h3 className="vertical-timeline-element-title">Testimonial Cuarto</h3>
                <h4 className="vertical-timeline-element-subtitle">Subtítulo del segundo evento</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam animi laborum facilis unde velit error aut dolorum? Earum illum qui neque. Consequuntur, ratione. Iure dolore nulla vel reprehenderit, harum corrupti!
                </p>
                <span>2024</span>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentArrowStyle={{ borderRight: '10px solid  #d8d8d8' }}
                contentStyle={{ background: '#d8d8d8', color: '#000', borderRadius: '8px', borderTop: '3px solid #04e3e3' }}
                iconStyle={{ background: '#c5c5c5', color: '#8b3dff' }}
                icon={<FaUserCircle size={50} />}
            >
                <h3 className="vertical-timeline-element-title">Testimonial Quinto</h3>
                <h4 className="vertical-timeline-element-subtitle">Subtítulo del segundo evento</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam animi laborum facilis unde velit error aut dolorum? Earum illum qui neque. Consequuntur, ratione. Iure dolore nulla vel reprehenderit, harum corrupti!
                </p>
                <span>2023</span>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentArrowStyle={{ borderRight: '10px solid  #d8d8d8' }}
                contentStyle={{ background: '#d8d8d8', color: '#000', borderRadius: '8px', borderTop: '3px solid #04e3e3' }}
                iconStyle={{ background: '#c5c5c5', color: '#8b3dff' }}
                icon={<FaUserCircle size={50} />}
            >
                <h3 className="vertical-timeline-element-title">Testimonial Sesto</h3>
                <h4 className="vertical-timeline-element-subtitle">Subtítulo del segundo evento</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam animi laborum facilis unde velit error aut dolorum? Earum illum qui neque. Consequuntur, ratione. Iure dolore nulla vel reprehenderit, harum corrupti!
                </p>
                <span>2022</span>
            </VerticalTimelineElement>


        </VerticalTimeline>

    );
}
