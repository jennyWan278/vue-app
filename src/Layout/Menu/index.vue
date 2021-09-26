<template>
  <div class="memu">
    <v-navigation-drawer
      v-model="primaryDrawer.model"
      :mini-variant.sync="primaryDrawer.mini"
      app
    >
      <v-toolbar color="teal" dark>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Topics</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon @click.stop="primaryDrawer.mini = !primaryDrawer.mini">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>
      <v-list>
        <v-list-group
          v-for="item in items"
          :key="item.title"
          v-model="item.active"
          :prepend-icon="item.action"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item v-for="subItem in item.items" :key="subItem.title">
            <v-list-item-content>
              <v-list-item-title
                v-text="subItem.title"
                @click="() => toPage(subItem.path)"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
type Titems = {
  title: string;
  path: string;
};
type Titem = {
  action: string;
  title: string;
  active?: boolean;
  items: Titems[];
};

@Component({
  components: {},
})
export default class Test extends Vue {
  public items: Array<Titem> = [
    {
      action: "mdi-beach",
      title: "Attractions",
      items: [{ title: "Login", path: "login" }],
    },
    {
      action: "mdi-bike-fast",
      title: "Dining",
      active: true,
      items: [
        { title: "About", path: "about" },
        { title: "Info", path: "info" },
      ],
    },
  ];
  public drawers: Array<string> = [
    "Default (no property)",
    "Permanent",
    "Temporary",
  ];
  public primaryDrawer: any = {
    model: true,
    type: "default (no property)",
    clipped: false,
    floating: false,
    mini: false,
  };
  public footer: any = {
    inset: false,
  };
  created(): void {
    // created
  }
  mounted(): void {
    //mounted
  }

  private trimAll(value: string): string {
    return value.replace(" ", "");
  }
  public toPage(path: string): void {
    this.$router.push(path);
  }

  // @Prop({ default: [] }) private itemArr!: Array<{
  //   key: string;
  //   value: string;
  // }>;
}
</script>
<style lang="scss">
.memu {
  display: flex;
  flex-direction: column;
  width: 260px;
  min-width: 260px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  white-space: nowrap;
  user-select: none;
  transition: all 0.3s;
  overflow: hidden;
  background-color: transparent;
}
</style>
