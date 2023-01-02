function freelancerLoader() {
  return (
    ['i1', 'i2', 'i3', 'i4'].map((item) => (
      <div key={item} className="border ml-1 col-auto rounded shadow-lg px-4 mb-6 flex flex-col items-center justify-center mobileWidth mobilePadding mx-auto">
        <div className="animate-pulse flex flex-col space-x-4">
          <div className="rounded-full bg-slate-200 w-60 h-60" />
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-200 rounded" />
            <div className="h-1 bg-slate-200 rounded" />
            <div className="h-20 bg-slate-200 rounded" />
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-5 bg-slate-200 rounded-full col-span-1" />
                <div className="h-5 bg-slate-200 rounded-full col-span-1" />
                <div className="h-5 bg-slate-200 rounded-full col-span-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    ))
  );
}

export function tableListLoader() {
  return (
    ['i1', 'i2', 'i3', 'i4'].map((item) => (
      <div key={item} className="flex items-center justify-center w-11/12 mt-3 ">
        <div className="animate-pulse flex justify-around items-center  w-full  space-x-4 rounded-lg shadow-lg py-2">
          <div className="rounded-full bg-slate-200 h-20 w-20" />
          <div className="flex-1  grid grid-cols-3 gap-10">
            <div className="h-5 bg-slate-200 rounded-full col-span-1" />
            <div className="h-5 bg-slate-200 rounded-full col-span-1" />
            <div className="h-5 bg-slate-200 rounded-full col-span-1" />
          </div>
        </div>
      </div>
    ))
  );
}
export default freelancerLoader;
