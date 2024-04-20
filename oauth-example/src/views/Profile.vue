<template>
    <div>
      <div>
        <img :src="user.picture" />
        <h2>{{ user.name }}</h2>
        <p>{{ user.email }}</p>
      </div>
  
      <div>
        <pre>{{ JSON.stringify(user, null, 2) }}</pre>
      </div>
    </div>
  </template>

<script lang="ts">
import { useAuth0 } from '../auth/index';

export default {
  name: "profile-view",
  setup() {
    const auth0 = useAuth0();
    
    return {
      user: auth0.user,
    }
  }
};
</script>