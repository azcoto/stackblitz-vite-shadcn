import LineIndicator from "./components/line-indicator";
import { Checkbox } from "./components/ui/checkbox";

export const App = () => (
  <div className='p-8'>
    <div className="flex items-center gap-2">
      <div>Strongly Disagree</div>
      <div className="flex-1">
        <LineIndicator />
      </div>
      <div>Strongly Agree</div>

    </div>
    <div className="flex gap-8">
      <Checkbox variant="close" />
      <Checkbox variant="star" />
    </div>
  </div>
);