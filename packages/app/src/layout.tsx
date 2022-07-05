import * as React from "react";
import { Link } from "react-router-dom";
import { Menu, MenuItemProps } from "piral-menu";
import {
  ComponentsState,
  ErrorComponentsState,
  SwitchErrorInfo,
} from "piral-core";
import { Dependencies } from "./dependencies";

const MenuItem: React.FC<MenuItemProps> = ({ children }) => (
  <li className="nav-item">{children}</li>
);

export const errorComponents: Partial<ErrorComponentsState> = {
  not_found: () => (
    <div>
      <p className="error">
        Could not find the requested page. Are you sure it exists?
      </p>
      <p>
        Go back <Link to="/">to the dashboard</Link>.
      </p>
    </div>
  ),
};

export const components: Partial<ComponentsState> = {
  ErrorInfo: (props) => (
    <div>
      <h1>Error</h1>
      <SwitchErrorInfo {...props} />
    </div>
  ),
  DashboardContainer: ({ children }) => (
    <div>
      <h1>Hello, Nürnberg!</h1>
      <div className="tiles">
        <div className={`tile cols-8 rows-4`}>
          <Dependencies />
        </div>
        {children}
      </div>
    </div>
  ),
  DashboardTile: ({ columns, rows, children }) => (
    <div className={`tile cols-${columns} rows-${rows}`}>{children}</div>
  ),
  Layout: ({ children }) => (
    <div>
      <Menu type="general" />
      <div className="container">{children}</div>
    </div>
  ),
  MenuContainer: ({ children }) => {
    const [collapsed, setCollapsed] = React.useState(true);
    return (
      <header>
        <nav className="navbar navbar-light navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3">
          <div className="container">
            <Link className="navbar-brand" to="/">
              Dependencania
            </Link>
            <button
              aria-label="Toggle navigation"
              type="button"
              onClick={() => setCollapsed(!collapsed)}
              className="navbar-toggler mr-2"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className={`collapse navbar-collapse d-sm-inline-flex flex-sm-row-reverse ${
                collapsed ? "" : "show"
              }`}
              aria-expanded={!collapsed}
            >
              <ul className="navbar-nav flex-grow">{children}</ul>
            </div>
          </div>
        </nav>
      </header>
    );
  },
  MenuItem,
};
