import Vue from "vue";
import Router from "vue-router";
import CustomersList from "./components/CustomersList.vue";
import AddCustomer from "./components/AddCustomer.vue";
import SearchCustomers from "./components/SearchCustomers.vue";
import Customer from "./components/Customer.vue";
import stateCompute from '../map-state/state-compute.vue';
import stateMapping from '../map-state/state-mapping.vue';
import computeModule from '../map-state/compute-module';
import mappingModule from '../map-state/mapping-module';



Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "customers",
            alias: "/customer",
            component: CustomersList,
            children: [
                {
                    path: "/customer/:id",
                    name: "customer-details",
                    component: Customer
                }
            ]
        },
        {
            path: "/add",
            name: "add",
            component: AddCustomer
        },
        {
            path: "/search",
            name: "search",
            component: SearchCustomers
        },
        {
            path: "/state-compute",
            name: "state-compute",
            component: stateCompute
        },
        {
            path: "/state-mapping",
            name: "state-mapping",
            component: stateMapping
        },
        {
            path: "/compute-module",
            name: "compute-module",
            component: computeModule
        },
        {
            path: "/mapping-module",
            name: "mapping-module",
            component: mappingModule
        }


    ]
});
