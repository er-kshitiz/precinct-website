
const UnderConstruction: React.FC = () => {
    return (
        <div className="pt-20">
            <div className="min-h-screen flex items-center justify-center bg-cream-50 px-4">
                <div className="text-center max-w-xl">
                    <h1 className="text-4xl font-playfair font-bold text-taupe-900 mb-4">
                        🚧 This Page is Under Construction
                    </h1>
                    <p className="text-taupe-700 font-poppins text-lg mb-6">
                        We’re currently working on building something amazing. Please check back soon!
                    </p>
                    <div className="text-center">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/3195/3195023.png"
                            alt="Under Construction"
                            className="w-48 h-48 mx-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};


export default UnderConstruction;