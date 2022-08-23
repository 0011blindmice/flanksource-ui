import { Combobox } from "@headlessui/react";
import { SelectorIcon } from "@heroicons/react/outline";
import { debounce } from "lodash";
import { ThreeDots } from "react-loading-icons";

interface IInputProps<T> {
  isFetching: boolean;
  displayValue: (v: T) => string;
  onChange: (v: string) => void;
  debounceTime?: number;
}

export function ComboboxInput<T>({
  isFetching,
  onChange,
  debounceTime = 500,
  displayValue
}: IInputProps<T>) {
  const debouncedChangeFn = debounce((event) => {
    onChange(event.target.value);
  }, debounceTime);
  return (
    <div className="bg-white cursor-default relative w-full">
      <Combobox.Input
        className="border border-gray-300 focus:border-blue-500 focus:ring-blue-500 leading-5 pl-3 pr-10 py-2 rounded-md shadow-sm text-gray-900 text-sm w-full"
        displayValue={(value: T) => displayValue(value)}
        onChange={debouncedChangeFn}
      />
      <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
        {isFetching ? (
          <ThreeDots fill="gray" stroke="black" width="24px" />
        ) : (
          <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        )}
      </Combobox.Button>
    </div>
  );
}
