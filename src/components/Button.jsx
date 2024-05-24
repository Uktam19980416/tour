import PropTypes from 'prop-types';

export const Button = ({text}) => {
  return (
    <div className="text-center bg-slate-200 py-3 max-sm:py-1 rounded-full hover:bg-slate-800 hover:text-slate-200 text-slate-700 transition-all cursor-pointer max-sm:w-3/5 max-sm:mt-5 max-sm:mx-auto">
      <button className="text-lg px-10 font-semibold max-sm:text-xs">
        {text}
      </button>
    </div>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired
}
