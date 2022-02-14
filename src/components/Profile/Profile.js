import React from 'react'
import {ProfileContainer,ProfileDetailWrapper,ProfileDetail,ProfileDetailHeader} from './ProfileStyle'
function Profile() {
    var Details=JSON.parse(localStorage.getItem("data"))
    return (
        <React.Fragment>
            <ProfileContainer>
                <ProfileDetailWrapper>
                    <ProfileDetailHeader>
                        Email
                    </ProfileDetailHeader>
                    <ProfileDetail>{Details.email}</ProfileDetail>
                    <ProfileDetailHeader>
                        Username
                    </ProfileDetailHeader>
                    <ProfileDetail>{Details.username}</ProfileDetail>
                    <ProfileDetailHeader>
                        Full Name
                    </ProfileDetailHeader>
                    <ProfileDetail>
                        {Details.fullName}
                    </ProfileDetail>

                    <ProfileDetailHeader>
                        Balance
                    </ProfileDetailHeader>
                    <ProfileDetail>{Details.balance}</ProfileDetail>

                    <ProfileDetailHeader>
                        Number of Payments
                    </ProfileDetailHeader>
                    <ProfileDetail>{Details.payments.length}</ProfileDetail>
                </ProfileDetailWrapper>
            </ProfileContainer>

        </React.Fragment>
    )
}

export default Profile