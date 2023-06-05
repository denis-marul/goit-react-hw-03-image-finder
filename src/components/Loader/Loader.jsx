import { Triangle } from 'react-loader-spinner'

import PropTypes from 'prop-types';
export const Loader = ({ loading }) => {
    return <>
        {loading &&
            <Triangle
                justify-content= "center"
                margin-left= "auto"
                margin-right= "auto"
                align-items= "center"
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="triangle-loading"
                wrapperStyle={{
                justifyContent: "center",
                marginLeft: "auto",
                marginRight: "auto",
                alignItems: "center",}}
                wrapperClassName=""
                visible={true}
            />}
    </>
};

Loader.protoTypes = {
    loading: PropTypes.bool.isRequired,
}