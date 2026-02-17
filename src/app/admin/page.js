import { projectId, dataset } from '@/sanity/env';

export const metadata = {
  title: 'Admin Dashboard — Fruitland Cyprus',
  robots: 'noindex, nofollow',
};

const studioUrl = `https://${projectId}.sanity.studio`;
const manageUrl = `https://www.sanity.io/manage/project/${projectId}`;

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        <div className="text-5xl mb-4">🍊</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Fruitland Cyprus Admin
        </h1>
        <p className="text-gray-600 mb-8">
          Manage your website content — update products, hero slides, features,
          and partners from the Sanity dashboard.
        </p>

        <div className="space-y-4">
          <a
            href={studioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-[#ff8c42] hover:bg-[#e07535] text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Open Content Studio
          </a>

          <a
            href={manageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full border-2 border-gray-200 hover:border-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Project Settings
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
            What you can edit
          </h2>
          <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
            <div className="bg-gray-50 rounded-lg p-3">
              <span className="block text-lg mb-1">🖼️</span>
              Hero Slides
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <span className="block text-lg mb-1">🍋</span>
              Products
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <span className="block text-lg mb-1">⭐</span>
              Features
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <span className="block text-lg mb-1">🤝</span>
              Partners
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-400 mt-6">
          Dataset: {dataset} &middot; Project: {projectId}
        </p>
      </div>
    </div>
  );
}
