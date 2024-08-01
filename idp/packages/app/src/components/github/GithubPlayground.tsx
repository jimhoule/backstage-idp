import React from 'react';
import { useEffect, useState } from 'react';
import { identityApiRef, useApi, ProfileInfo } from '@backstage/core-plugin-api';
import { Card, Typography } from '@material-ui/core';

export function GithubPlayground() {
    // API hook
    const identityApi = useApi(identityApiRef);

    // State
    const [ profileInfo, setProfileInfo ] = useState<ProfileInfo>()

    const getProfileInfo = async (): Promise<void> => {
        const profileInfo = await identityApi.getProfileInfo();
        setProfileInfo(profileInfo);
    }

    useEffect(
        (): void => {
            getProfileInfo()
        },
        []
    )

    return (
        <Card title={profileInfo?.email}>
            <Typography variant="body1">
                {`${profileInfo?.displayName} | ${profileInfo?.email}`}
            </Typography>
        </Card>
    );
}