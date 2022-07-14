export type MapStateProps = {
  theme: string;
};

type MapDispatchProps = {
  changeTheme: (theme: string) => void;
};

export type SwitchThemeProps = MapStateProps & MapDispatchProps;
