export default function Input({
  id,
  type,
  placeholder,
  label,
}: {
  id: string;
  type: string;
  placeholder?: string;
  label: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-normal text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        type={type}
        name={id}
        id={id}
        className="bg-gray-50 border border-gray-300 text-gray-900 md:text-sm rounded-lg focus:ring-yellow-600 focus:border-yellow-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 _DJ2tfp6E9c_teMKVD3z dark:text-white OOJuY9kV1XZH_KV1ElVw FXh9uSTLEhQn4Ek_3flj"
        placeholder={placeholder ? placeholder : ""}
        required
      />
    </div>
  );
}
