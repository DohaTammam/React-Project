import './Counter.scss'

const Counter = ({startCount}) => {
  return (
  <div class="counter">
      <h2 className="mb-3">App Count</h2>
    <h3>{startCount}</h3>
  </div>
  );
};

export  {Counter};