interface Props {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <div className="
            h-screen 
            bg-gradient-to-br 
            from-slate-950 
            via-slate-900 
            to-slate-950"
        >
            {children}
        </div>
    );
};

export default Layout;