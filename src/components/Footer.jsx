export const Footer = () => {
  const year = new Date().getFullYear()
  return <div className="text-center py-10 bg-slate-200 text-xl font-semibold max-md:text-sm">Copyright © {year} Zamon Business Tour. All rights reserved.</div>
}
