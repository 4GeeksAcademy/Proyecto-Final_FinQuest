import React from 'react';
import PropTypes from 'prop-types';
import "../style ParentDash/styleLeftPanel.css";

const LeftPanel = ({ parentName, childrenProfiles }) => {
  return (
    <aside className="left-panel">
      <header className="panel-header">
        <h2>{parentName}</h2>
      </header>

      <nav className="panel-content">
        {/* Botón de Crear Perfil */}
        <button className="btn-create-child-profile">
          <div className="plus-icon-container">
            <i className="fa-solid fa-plus"></i>
          </div>
          <span>Crear perfil</span>
        </button>

        {/* Lista de Perfiles */}
        <ul className="children-list">
          {childrenProfiles && childrenProfiles.map((child) => (
            <li key={child.id} className="child-item">
              <span>{child.name}</span>

              {/* Verificación ultra-segura para evitar el Uncaught TypeError */}
              {child.date && !isNaN(new Date(child.date).getTime()) && (
                <span>{new Date(child.date).toLocaleString()}</span>
              )}
            </li>
          ))}
        </ul>


      </nav>
    </aside>
  );
};

LeftPanel.propTypes = {
  parentName: PropTypes.string.isRequired,
  childrenProfiles: PropTypes.array.isRequired
};

export default LeftPanel;

