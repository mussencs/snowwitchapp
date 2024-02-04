import {Locations} from '../constants';

export function get_location_ids() {
    let main_locations_name_id = []
    for (let i = 0; i < Locations.length; i++) {
        let location = Locations[i]
        for (let i = 0; i < location.length; i++) {
            let location_name_id = [location[i].id]
            main_locations_name_id.push(location_name_id)
        }
    }
    main_locations_name_id.sort();
    return main_locations_name_id
}

export function get_location_information(selected_location_id) {
    let location_info
    for (let i = 0; i < Locations.length; i++) {
        let location = Locations[i]
        for (let i = 0; i < location.length; i++) {
            let location_id = location[i].id
            if (selected_location_id == location_id) {
                location_info = location[i]
                return location_info
            }
        }
    }
}

export async function get_api_data(url) {
    let obj = []
    let res
    for (let i = 0; i < 5; i++) {
        res = await fetch(url)
                
        if (res.status == 200) {
            break
        }
    }
    obj = await res.json()
    return obj
}

export function find_today_index(){
    let today_mst = toTimeZone('America/Denver') + "T06:00:00-06:00"
    let today_index = 0


    for (let i = 0; i < snowwitch_location_data.length; i++) {
        if (snowwitch_location_data[i]["date_time"] == today_mst) {
            today_index = i
            break
        }
    }
    
    return today_index
}

export function toTimeZone(zone) {
    let format = 'YYYY-MM-DD';
    return moment().tz(zone).format(format);
}