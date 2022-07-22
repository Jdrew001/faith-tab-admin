import { LeftNavModel } from "./shared/component/left-navigation/model/left-nav.model";

export class AppConstant {
    public static LEFT_MENU: Array<LeftNavModel> = [
        {
            label: 'Dashboard',
            icon: 'p-home'
        },
        {
            label: 'Groups',
            icon: 'pi-users'
        },
        {
            label: 'Giving',
            icon: 'pi-money-bill'
        },
        {
            label: 'Interactions',
            icon: 'pi-comments'
        },
        {
            label: 'Attendance',
            icon: 'pi-history'
        },
        {
            label: 'Reports',
            icon: 'pi-chart-line'
        },
        {
            label: 'Schedule',
            icon: 'pi-calendar'
        },
        {
            label: 'Logout',
            icon: 'pi-power-off'
        }
    ]
}