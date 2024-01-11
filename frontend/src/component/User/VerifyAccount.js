import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { resetError, resetIsVerified, verifyUser } from "../../slices/userSlice/userSlice";
import { useEffect } from "react";
import { toast } from "react-toastify";

const VerifyAccount = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { token } = useParams()

    const { isVerified, error } = useSelector((state) => state.user)
    useEffect(() => {
        dispatch((verifyUser({ token })));
        if (isVerified) {
            navigate("/");
            dispatch(resetIsVerified());
            toast.success("User account verify");
        }
        if (error) {
            toast.error(error.message);
            dispatch(resetError());
            navigate("/")
        }
    }, [dispatch, navigate, error, token, isVerified])
    return (
        <>
        </>
    )
}

export default VerifyAccount;