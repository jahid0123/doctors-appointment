import { NgClass, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-panel',
  imports: [NgFor, NgClass],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css'
})
export class AdminPanelComponent implements OnInit {
  // Stats data
  userCount = 1245;
  postCount = 876;
  packageCount = 342;
  activeSessions = 28;
  
  // System status
  storageUsage = 65;
  storageUsed = 65;
  storageTotal = 100;
  memoryUsage = 45;
  memoryUsed = 900;
  memoryTotal = 2000;
  cpuLoad = 30;
  
  // Recent activities
  recentActivities = [
    { event: 'New user registration', user: 'John Doe', time: new Date(), status: 'completed' },
    { event: 'Post published', user: 'Jane Smith', time: new Date(Date.now() - 3600000), status: 'completed' },
    { event: 'Package update', user: 'System', time: new Date(Date.now() - 7200000), status: 'pending' },
    { event: 'Failed login attempt', user: 'Unknown', time: new Date(Date.now() - 10800000), status: 'failed' },
    { event: 'Database backup', user: 'System', time: new Date(Date.now() - 14400000), status: 'completed' }
  ];

  // Sidebar state
  sidebarCollapsed = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar(): void {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }
}