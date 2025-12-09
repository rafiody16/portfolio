import React, { useEffect } from "react";

const CertificateModal = ({ cert, onClose }) => {
    if (!cert) return null;

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") onClose();
        };

        document.addEventListener("keydown", handleEsc);
        return () => {
            window.removeEventListener("keydown", handleEsc);
        };
    }, [onClose]);

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity duration-300" onClick={onClose}>
        <div className="bg-zinc-900 border border-zinc-700 rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl animate-fade-in-up relative" onClick={(e) => e.stopPropagation()}>
            <div className="p-4 border-b border-zinc-800 flex justify-between items-center bg-zinc-900 sticky top-0 z-10">
                <h3 className="text-lg font-bold text-zinc-100 truncate pr-4">Detail Sertifikat</h3>
                <button 
                    onClick={onClose}
                    className="p-2 bg-zinc-800 hover:bg-red-500/20 hover:text-red-500 rounded-full transition-colors">
                    <i className="ri-close-line text-xl"></i>
                </button>
            </div>
            <div className="overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-zinc-950 rounded-lg overflow-hidden border border-zinc-800 flex items-center justify-center p-2">
                        <img 
                          src={cert.gambar} 
                          alt={cert.nama} 
                          className="w-full h-auto object-contain rounded-md" />
                    </div>
                    <div className="flex flex-col justify-center gap-4">
                        <div>
                          <h2 className="text-2xl font-bold text-white mb-2">{cert.nama}</h2>
                          <p className="text-violet-400 font-medium text-lg">{cert.ket}</p>
                        </div>
                        <div className="space-y-3 bg-zinc-800/50 p-4 rounded-xl border border-zinc-800">
                            <div className="flex items-start gap-3">
                              <i className="ri-calendar-line text-zinc-400 mt-1"></i>
                              <div>
                                <span className="block text-xs text-zinc-500 uppercase tracking-wider">Tahun Terbit</span>
                                <span className="text-zinc-200">{cert.tahun}</span>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <i className="ri-barcode-line text-zinc-400 mt-1"></i>
                              <div className="break-all">
                                <span className="block text-xs text-zinc-500 uppercase tracking-wider">ID Kredensial</span>
                                <span className="text-zinc-200 font-mono text-sm">
                                    {cert.unique || cert.unqiue || "-"}
                                </span>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
}

export default CertificateModal