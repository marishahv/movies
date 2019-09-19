import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '../common/button';
import { deleteContact, clearFilter } from '../../actions';
import './movieItem.scss';

const MovieItem = ({ movie: { id, title, posterPath }, onEditClick, onDeleteClick }) => (
  <tr>
    <td>{title}</td>
    <td><img src={posterPath} className="img-thumbnail img_size" alt="" /></td>
    <td>
      <Link to={`/edit/${id}`} className="btn btn-primary" onClick={onEditClick}>Edit</Link>
      <Button colorStyle="btn-secondary" onClick={onDeleteClick} name="Delete" />
    </td>
  </tr>
);

const mapDispatchToProps = (dispatch, ownProps) => {
  const { movie: { id } } = ownProps;

  return {
    onDeleteClick: () => dispatch(deleteContact(id)),
    onEditClick: () => dispatch(clearFilter()),
  };
};

export default connect(null, mapDispatchToProps)(MovieItem);

MovieItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    posterPath: PropTypes.string,
  }).isRequired,
  onEditClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};