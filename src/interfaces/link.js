import PropTypes from "prop-types";

const LinkInterface = PropTypes.shape({
  id: PropTypes.number.required,
  shortUrl: PropTypes.string.required,
  fullUrl: PropTypes.string.required,
});

export default LinkInterface;
