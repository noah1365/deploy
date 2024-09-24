import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/public/Home';
import LogIn from './pages/public/LogIn';

import ManagerDashboard from './pages/manager/ManagerDashboard';
import EmployeeDashboard from './pages/employee/EmployeeDashboard';

import ProtectedRoute from './components/ProtectedRoute';
import RedirectAuthenticatedUser from './components/RedirectAuthenticatedUser';

import ManagerSidebar from './pages/manager/ManagerSidebar';
import EmployeeSidebar from './pages/employee/EmployeeSidebar';

import Search from './pages/manager/Search';
import UserList from './pages/manager/user/UserList';

import { useAuthStore } from './store/authStore';
import AttendanceInfo from './pages/manager/user/AttendanceInfo';

import SalaryComputation from './pages/manager/payroll/SalaryComputation';
import DeductionsManagement from './pages/manager/payroll/DeductionsManagement';
import PayrollDistribution from './pages/manager/payroll/PayrollDistribution';
import ComplianceTracking from './pages/manager/payroll/ComplianceTracking';

import HealthBenefitsManagement from './pages/manager/benefits/HealthBenefitsManagement';
import RetirementPlans from './pages/manager/Benefits/RetirementPlans';
import LeaveManagement from './pages/manager/Benefits/LeaveManagement';
import FlexibleBenefits from './pages/manager/Benefits/FlexibleBenefits';

import PerformanceBasedBonuses from './pages/manager/Incentives/PerformanceBasedBonuses';
import RecognitionPrograms from './pages/manager/Incentives/RecognitionPrograms';
import SalesCommissions from './pages/manager/Incentives/SalesCommissions';
import ProfitSharing from './pages/manager/Incentives/ProfitSharing';

import SalaryPlanning from './pages/manager/Compentation/SalaryPlanning';
import CompensationAnalysis from './pages/manager/Compentation/CompentationAnalysis';
import EquityAdjustments from './pages/manager/Compentation/EquityAdjustments';
import TotalRewardsManagement from './pages/manager/Compentation/TotalRewardsManagement';

import RequestBudget from './pages/manager/Finance/RequestBudget';

import BenefitsUtilizationsAnalysis from './pages/manager/Predictive/BenefitsUtilizationsAnalysis';
import EmployeePerformanceForecasting from './pages/manager/Predictive/EmployeePerformanceForecasting';
import PredictiveTurnoverAnalysis from './pages/manager/Predictive/PredictiveTurnoverAnalysis';

import Regulations from './pages/manager/Compliance/Regulations';
import LaborLaws from './pages/manager/Compliance/LaborLaws';

import Compensation from './pages/manager/Predictive/Compensation';
import BenefitsOverview from './pages/manager/benefits/BenefitsOverview';

const App = () => {
  const { checkAuth, isAuthenticated, user } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1">
        {isAuthenticated ? (
          <>
            {user?.role === 'manager' ? <ManagerSidebar /> : user?.role === 'employee' ? <EmployeeSidebar /> : null}
            <main className="flex-1 p-4 flex flex-col">
              <Search />
              <div className="flex-1">
                <Routes>
                  <Route path="/" element={<RedirectAuthenticatedUser> <Home /> </RedirectAuthenticatedUser>} />
                  <Route path="/login" element={<RedirectAuthenticatedUser> <LogIn /> </RedirectAuthenticatedUser>} />
                  
                  {user?.role === 'manager' && (
                    <>
                      <Route path="/dashboard" element={<ProtectedRoute> <ManagerDashboard /> </ProtectedRoute>} />
                      {/* user */}
                      <Route path="/user-list" element={<ProtectedRoute> <UserList /> </ProtectedRoute>} />
                      <Route path="/attendance-info" element={<ProtectedRoute> <AttendanceInfo /> </ProtectedRoute>} />
                      {/* payroll processing */}
                      <Route path="/salary-computation" element={<ProtectedRoute> <SalaryComputation /> </ProtectedRoute>} />
                      <Route path="/deductions-management" element={<ProtectedRoute> <DeductionsManagement /> </ProtectedRoute>} />
                      <Route path="/payroll-distribution" element={<ProtectedRoute> <PayrollDistribution /> </ProtectedRoute>} />
                      <Route path="compliance-tracking" element={<ProtectedRoute> <ComplianceTracking /> </ProtectedRoute>} />
                      {/* benefits */}
                      <Route path="/benefits-overview" element={<ProtectedRoute> <BenefitsOverview /> </ProtectedRoute>} />
                      <Route path="health-benefits-management" element={<ProtectedRoute> <HealthBenefitsManagement /> </ProtectedRoute>} />
                      <Route path="retirement-plans" element={<ProtectedRoute> <RetirementPlans /> </ProtectedRoute>} />
                      <Route path="leave-management" element={<ProtectedRoute> <LeaveManagement /> </ProtectedRoute>} />
                      <Route path="flexible-benefits" element={<ProtectedRoute> <FlexibleBenefits /> </ProtectedRoute>} />
                      {/* incentives */}
                      <Route path="performance-based-bonuses" element={<ProtectedRoute> <PerformanceBasedBonuses /> </ProtectedRoute>} />
                      <Route path="recognition-programs" element={<ProtectedRoute> <RecognitionPrograms /> </ProtectedRoute>} />
                      <Route path="sales-commissions" element={<ProtectedRoute> <SalesCommissions /> </ProtectedRoute>} />
                      <Route path="profit-sharing" element={<ProtectedRoute> <ProfitSharing /> </ProtectedRoute>} />
                      {/* compensation */}
                      <Route path="salary-planning" element={<ProtectedRoute> <SalaryPlanning /> </ProtectedRoute>} />
                      <Route path="compensation-analysis" element={<ProtectedRoute> <CompensationAnalysis /> </ProtectedRoute>} />
                      <Route path="equity-adjustments" element={<ProtectedRoute> <EquityAdjustments /> </ProtectedRoute>} />
                      <Route path="total-rewards-management" element={<ProtectedRoute> <TotalRewardsManagement /> </ProtectedRoute>} />
                      {/* compliance */}
                      <Route path="labor-laws" element={<ProtectedRoute> <LaborLaws /> </ProtectedRoute>} />
                      <Route path="regulations" element={<ProtectedRoute> <Regulations /> </ProtectedRoute>} />
                      {/* analytics */}
                      <Route path="predictive-turnover-analysis" element={<ProtectedRoute> <PredictiveTurnoverAnalysis /> </ProtectedRoute>} />
                      <Route path="employee-performance-forecasting" element={<ProtectedRoute> <EmployeePerformanceForecasting /> </ProtectedRoute>} />
                      <Route path="benefits-utilization-analysis" element={<ProtectedRoute> <BenefitsUtilizationsAnalysis /> </ProtectedRoute>} />
                      {/* finance */}
                      <Route path="request-budget" element={<ProtectedRoute> <RequestBudget /> </ProtectedRoute>} />
                      <Route path="compensation" element={<ProtectedRoute> <Compensation /> </ProtectedRoute>} />
                    </>
                  )}
                  {user?.role === 'employee' && (
                    <Route path="/dashboard" element={<ProtectedRoute> <EmployeeDashboard /> </ProtectedRoute>} />
                  )}
                  
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </div>
            </main>
          </>
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        )}
      </div>
    </div>
  );
};

export default App;
