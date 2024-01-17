export default function Section({
  id,
  darkBackground,
  title,
  subtitle,
  tag,
  children,
}: {
  id: string;
  darkBackground?: boolean;
  title?: string;
  subtitle?: string;
  tag?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={`w-full py-32 text-gray-400 md:py-50 lg:py-32 ${
        darkBackground ? "bg-gray-800" : "bg-gray-100"
      }`}
    >
      <div className="mx-auto container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="">
            {tag && (
              <div className="inline-block mb-2 rounded-lg bg-gray-600 text-gray-100 px-2 py-1 text-xs">
                {tag}
              </div>
            )}
            {title && (
              <h2
                className={`text-4xl mb-6 font-bold tracking-tighter ${
                  darkBackground ? "text-gray-500" : "text-black"
                }`}
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <h3 className="mx-auto max-w-[700px] text-gray-600  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {subtitle}
              </h3>
            )}
            <div className="text-gray-400 max-w-[900px] text-left">
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
