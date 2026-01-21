'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5937<T> = T extends (infer U)[]
  ? DeepReadonlyArray5937<U>
  : T extends object
  ? DeepReadonlyObject5937<T>
  : T;

interface DeepReadonlyArray5937<T> extends ReadonlyArray<DeepReadonly5937<T>> {}

type DeepReadonlyObject5937<T> = {
  readonly [P in keyof T]: DeepReadonly5937<T[P]>;
};

type UnionToIntersection5937<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5937<T> = UnionToIntersection5937<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5937<T extends unknown[], V> = [...T, V];

type TuplifyUnion5937<T, L = LastOf5937<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5937<TuplifyUnion5937<Exclude<T, L>>, L>;

type DeepPartial5937<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5937<T[P]> }
  : T;

type Paths5937<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5937<K, Paths5937<T[K], Prev5937[D]>> : never }[keyof T]
  : never;

type Prev5937 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5937<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5937 {
  level1: {
    level2: {
      level3: {
        value: string;
        count: number;
        enabled: boolean;
        items: Array<{ id: number; name: string }>;
      };
    };
  };
}

type ConfigPaths5937 = Paths5937<NestedConfig5937>;

interface HeavyProps5937 {
  config: DeepPartial5937<NestedConfig5937>;
  path?: ConfigPaths5937;
}

const HeavyComponent5937 = memo(function HeavyComponent5937({ config }: HeavyProps5937) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5937) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5937 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5937: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5937.displayName = 'HeavyComponent5937';
export default HeavyComponent5937;
