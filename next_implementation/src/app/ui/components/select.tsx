export default function Select({
  options,
  title,
  id,
}: {
  options: string[];
  title: string;
  id: string;
}) {
  return (
    <div>
      <label
        htmlFor="countries"
        className="block mb-2 text-sm font-normal text-gray-900 dark:text-gray-400"
      >
        Country
      </label>
      <select
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg XqTQaCRgxrhPloX2lDDg Gzt3yIR6XQkvVjk5M81S block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 _DJ2tfp6E9c_teMKVD3z dark:text-white OOJuY9kV1XZH_KV1ElVw FXh9uSTLEhQn4Ek_3flj"
      >
        <option selected>Choose a country</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
    </div>
  );
}
