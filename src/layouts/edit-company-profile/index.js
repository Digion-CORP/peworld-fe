import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector } from "react-redux";
import EditCompanyProfile from "./components/editProfile";
import NavbarLogin from "../../components/navbar/navbarLogin";
import Footer from "../../components/footer";

const CompanyProfiles = ({ data }) => {
    const [Refetch, setRefetch] = useState();
    const router = useRouter()
    if (data.isPekerja) {
        setRefetch(!Refetch)
        router.push('/')
    }
    return (<>
        <NavbarLogin />
        <EditCompanyProfile />
        <Footer />
    </>)
}
export default CompanyProfiles