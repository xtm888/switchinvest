var simplemaps_countrymap_mapdata={
  main_settings: {
   //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    
    //State defaults
    state_description: "State description",
    state_color: "#0D1B2A",
    state_hover_color: "#FFD700",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
    //Location defaults
    location_description: "Location description",
    location_url: "",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#FFFFFF",
    label_hover_color: "#FFFFFF",
    label_size: 16,
    label_font: "Arial",
    label_display: "auto",
    label_scale: "yes",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
    //Zoom settings
    zoom: "yes",
    manual_zoom: "yes",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "1.2",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.8,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "no",
    url_new_tab: "no",
    images_directory: "/map_images/",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "detect"
  },
  state_specific: {
    BEBRU: {
      name: "Brussels",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    BEVLG: {
      name: "Flanders",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    BEWAL: {
      name: "Wallonia",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    }
  },
  locations: {
  },
  labels: {
    BEBRU: {
      name: "Brussels",
      parent_id: "BEBRU"
    },
    BEVLG: {
      name: "Flanders",
      parent_id: "BEVLG"
    },
    BEWAL: {
      name: "Wallonia",
      parent_id: "BEWAL"
    }
  },
  legend: {
    entries: []
  },
  regions: {}
};