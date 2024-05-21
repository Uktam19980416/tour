import PropTypes from 'prop-types';

export const Button = ({text}) => {
  return (
    <div className="text-center bg-slate-200 py-3 rounded-full hover:bg-slate-800 hover:text-slate-200 text-slate-700 transition-all cursor-pointer">
      <button className="text-lg px-10 font-semibold">{text}</button>
    </div>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired
}
