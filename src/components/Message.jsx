import { PropTypes } from 'prop-types';

export const Message = ({ children, type }) => {
    return <div className={`alerta ${type}`}>{children}</div>;
};

Message.propTypes = {
    type: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};
