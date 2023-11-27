type ProgressBarProps = {
  /*
   * The progress value in percentage to complete the circle.
   */
  progress: number
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="flex flex-col gap-4 items-center">
      <span className="text-md text-marine-50 font-bold">12 / 16</span>
      <div className="flex flex-row w-full h-3 bg-marine-800 rounded-full">
        <div
          className={`flex flex-row h-3 bg-marine-300 rounded-full`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}
