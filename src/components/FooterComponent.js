import React from 'react';
import FilterLinkContainer from '../containers/FilterLinkContainer';
import DeleteComplitedTodosContainer from '../containers/DeleteComplitedTodosContainer';
import { Link } from 'react-router-dom';

const FooterComponent = () => (
  <div>
    <p>
      Актуальность задач:
      {' '}
      <FilterLinkContainer filter="SHOW_ALL">
        Отобразить все
      </FilterLinkContainer>
      {', '}
      <FilterLinkContainer filter="SHOW_ACTIVE">
        Активные задачи
      </FilterLinkContainer>
      {', '}
      <FilterLinkContainer filter="SHOW_COMPLETED">
        Завершенные задачи
      </FilterLinkContainer>
      <DeleteComplitedTodosContainer />
    </p>
    <button > <Link to="/">Назад,на стартовую страницу</Link> </button>
  </div>
);

export default FooterComponent;
