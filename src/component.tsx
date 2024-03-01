import { component$ } from "@builder.io/qwik";
import { Geolocation } from "@capacitor/geolocation";

// export const getGeoLocation = $(() => Geolocation.getCurrentPosition());

export default component$(() => {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <button
        onClick$={async () => {
          const coordinates = await Geolocation.getCurrentPosition();
          console.log("Current position:", coordinates);
        }}
      >
        Click Me To Crash
      </button>
      This crashes on calling the click handler because the `Geolocation` plugin and the handler are together in the same file, and the export of the handler is hidden behind what seems to be an ESM proxy, instead of the export itself.
    </>
  );
});
