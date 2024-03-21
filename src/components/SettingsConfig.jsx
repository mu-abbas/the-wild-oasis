import { useQuery } from '@tanstack/react-query';
import SettingInput from './SettingInput';
import { getSettings } from '../services/apiSettings';
import Error from './Error';
import Spinner from './Spinner';

function SettingsConfig() {
  const { isLoading, data, error } = useQuery({
    queryKey: ['settings'],
    queryFn: getSettings,
  });

  const { minBookingLength, maxBookingLength, maxGuestsPerBooking, breakfastPrice } = data || {};

  if (isLoading) return <Spinner />;
  if (error) return <Error error={error.message} />;

  return (
    <div className="rounded-md bg-grey-0">
      <form className="px-12 py-4">
        <SettingInput label="Minimum nights/booking" defaultValue={minBookingLength} name="minBookingLength" />
        <SettingInput label="Maximum nights/booking" defaultValue={maxBookingLength} name="maxBookingLength" />
        <SettingInput label="Minimum guests/booking" defaultValue={maxGuestsPerBooking} name="maxGuestsPerBooking" />
        <SettingInput label="Breakfast Price" defaultValue={breakfastPrice} name="breakfastPrice" />
      </form>
    </div>
  );
}

export default SettingsConfig;
