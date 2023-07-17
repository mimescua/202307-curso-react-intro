import './Category.css'

function Category({ total, text, color }) {
  return (
    <div className='category'>
      <h6>{total} tasks</h6>
      <h4 style={{borderImageSource: `linear-gradient(to right, ${color} 70%, white 70%, white 100%)`}}>{text}</h4>
    </div>
  );
}

export { Category };
