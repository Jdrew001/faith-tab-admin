import { LeftNavModel } from "./shared/component/left-navigation/model/left-nav.model";

export class AppConstant {
    public static LEFT_MENU: Array<LeftNavModel> = [
        {
            label: 'Dashboard',
            icon: 'pi-home',
            url: '/dashboard'
        },
        {
            label: 'Groups',
            icon: 'pi-users',
            url: '/groups'
        },
        {
            label: 'Giving',
            icon: 'pi-money-bill',
            url: '/giving'
        },
        {
            label: 'Interactions',
            icon: 'pi-comments',
            url: '/interactions'
        },
        {
            label: 'Attendance',
            icon: 'pi-history',
            url: '/attendance'
        },
        {
            label: 'Reports',
            icon: 'pi-chart-line',
            url: '/reports'
        },
        {
            label: 'Schedule',
            icon: 'pi-calendar',
            url: '/schedule'
        },
        {
            label: 'Logout',
            icon: 'pi-power-off',
            url: '/login'
        }
    ]
}