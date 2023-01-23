import { FC } from 'react';
import AdSlot from '../ads/index'

const Advertisement: FC<{id: string}> = ({id}) => {
    return (
       <div data-align='center' className="hidden-mobile advertisement">
                 <AdSlot id={id} />
       </div>
    );
};
export default Advertisement;
