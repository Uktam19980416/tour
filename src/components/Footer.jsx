export const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div
      className="text-center py-10 bg-slate-200 text-xl font-semibold max-md:text-sm"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
    >
      Copyright © {year} Zamon Business Tour. All rights reserved.
    </div>
  )
}
