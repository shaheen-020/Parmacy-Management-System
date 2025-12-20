import React from "react";
import Case from "../components/Case";
import { useEffect } from "react";

export default function AdvancedFeature() {
    useEffect(() => {
        document.title = "Advanced Feature";
    }, []);

    return (
        <Case>
            <div className="section-header px-4 tw-rounded-none tw-shadow-md tw-shadow-gray-200 lg:tw-rounded-lg">
                <h1 className="mb-1 tw-text-lg">Advanced Feature</h1>
            </div>

            <div className="section-body">
                <div className="card">
                    <div className="card-body px-0">
                        <h3>Tabel Advanced Feature</h3>
                        <p className="px-4">
                            Advanced features in a Pharmacy Management System include role-based user access for better security, 
                            automatic stock updates with low-stock and expiry alerts, and barcode-based billing for faster and 
                            accurate sales. The system can generate detailed sales, purchase, and profit reports to support decision-making.
                            It also supports supplier and customer management with purchase history tracking. 
                            These features improve efficiency, reduce errors, and ensure smooth pharmacy operations.
                        </p>
                    </div>
                </div>
            </div>
        </Case>
    );
}
