import React from 'react'
import { timelineList } from '../common'
import { HighlightWord } from 'components/CommonUI/HighlightWord'
import { Tag } from 'components/CommonUI/Tag'
import Container from 'components/Container/Container';

interface IProps {
    timelineRef: React.RefObject<HTMLDivElement>;
  }

export const Timeline = ({timelineRef}: IProps) => {
  return (
    <div id='timeline' className={`self-center`} ref={timelineRef}>
      <Container
        className="flex flex-col space-y-12 pr-6 md:px-0"
        // ref={technologiesRef}
      >
      {timelineList.map(item => {
          return (
              <div className='flex flex-col gap-5 text-start lg:flex-row'>
                  <span className='whitespace-nowrap font-semibold'>{item.time}</span>
                  <div className='flex flex-col w-full gap-3'>
                      <HighlightWord className='text-[18px]'>{item.title}</HighlightWord>
                      <ul className='list-disc pl-4'>
                          {item?.descriptions.map(desc => <li>
                              {desc}
                          </li>)}
                      </ul>
                      <div className='flex gap-2 flex-wrap'>
                          {item.technologies.map(tech => <Tag>{tech}</Tag>)}
                      </div>
                  </div>
              </div>
          )
      })}
      </Container>
      </div>
    // <>
    // {timelineList.map(item => {
    //       return (
    //           <div className='flex gap-5 text-start'>
    //               <span className='whitespace-nowrap font-semibold'>{item.time}</span>
    //               <div className='flex flex-col w-full gap-3'>
    //                   <HighlightWord className='text-[18px]'>{item.title}</HighlightWord>
    //                   <ul className='list-disc pl-4'>
    //                       {item?.descriptions.map(desc => <li>
    //                           {desc}
    //                       </li>)}
    //                   </ul>
    //                   <div className='flex gap-2'>
    //                       {item.technologies.map(tech => <Tag>{tech}</Tag>)}
                          
    //                   </div>
    //               </div>
    //           </div>
    //       )
    //   })}
    // </>
  )
}
