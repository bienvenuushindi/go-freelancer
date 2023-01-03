import React from 'react';

function freelancerLoader() {
  return (
    ['i1', 'i2', 'i3', 'i4'].map((item) => (
      <div key={item} className="border ml-1 col-auto rounded shadow-lg lg:w-1/4 md:w-2/4 sm:w-full sm:flex-1 px-4 mb-6 flex flex-col items-center justify-center mobileWidth mobilePadding mx-auto">
        <div className="animate-pulse flex w-full flex-col ">
          <div className="rounded-full bg-slate-200 w-40 h-40 mx-auto" />
          <div className="flex-1 space-y-6 py-1">
            <div className="h-8 w-20 mx-auto mt-4 bg-slate-200 rounded" />
            <div className="h-1 bg-slate-200 rounded" />
            <div className="h-20 w-full bg-slate-200 rounded" />
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

export function specializationLoader() {
  return (
    <div className="flex items-center justify-center w-full mt-3 ">
      <div className="animate-pulse flex justify-around items-center  w-full  space-x-4 rounded-lg  py-4">
        <div className="w-full grid lg:grid-cols-4 sm:grid-cols-2 gap-3">
          {['i1', 'i2', 'i3', 'i4', 'i5', 'i6', 'i7', 'i8', 'i9', 'i10', 'i11', 'i12'].map((item) => (
            <div key={item} className="col-span-1 flex gap-2">
              <div className="rounded bg-slate-200 h-5 w-5" />
              <div className="h-5 bg-slate-200 rounded-full flex-1" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default freelancerLoader;
