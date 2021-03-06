import React from "react";
import PageHeader from "../../components/PageHeader";

import './styles.css';

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Esses são os proffys disponíveis">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject"/>
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Dia da semana</label>
            <input type="text" id="subject"/>
          </div>

          <div className="input-block">
            <label htmlFor="time">Matéria</label>
            <input type="text" id="subject"/>
          </div>
        </form>
      </PageHeader>
    </div>
  );
}

export default TeacherList;