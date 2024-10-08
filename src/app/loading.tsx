export default function Loading() {
  return (
    <div className="bg-lightSecondColor dark:bg-darkBgColor flex h-screen w-full flex-col items-center justify-center gap-16 text-center transition-all">
      <div
        className={`size-44 bg-[url('/images/logo-light.svg')] bg-cover bg-no-repeat dark:bg-[url('/images/logo-dark.svg')]`}
      ></div>
      <h1 className="text-darkBgColor dark:text-lightSecondColor font-skyer text-7xl font-semibold uppercase">
       satori
      </h1>

      <div className="h-24 w-24 animate-spin rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 p-3 dark:from-yellow-500 dark:to-red-500">
        <div className="bg-lightSecondColor dark:bg-darkBgColor h-full w-full rounded-full"></div>
      </div>
    </div>
  );
}
