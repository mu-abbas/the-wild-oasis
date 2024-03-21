import SettingsConfig from '../components/SettingsConfig';

function Settings() {
  return (
    <section className="container relative min-h-full mx-auto">
      <header className="px-4 pb-8">
        <h1 className="text-3xl font-semibold">Settings</h1>
      </header>
      <SettingsConfig />
    </section>
  );
}

export default Settings;
