import AppLoadingIcon from '../icons/appLoading';
import Typography from '../typography';

function AppLoading() {
  return (
    <div className="fixed left-0 top-0 w-full h-full flex justify-center items-center flex-col bg-inherit">
      <AppLoadingIcon />

      <Typography variant="titleMd">Better Mode</Typography>
    </div>
  );
}

export default AppLoading;
