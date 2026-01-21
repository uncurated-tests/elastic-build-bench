'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5954<T> = T extends (infer U)[]
  ? DeepReadonlyArray5954<U>
  : T extends object
  ? DeepReadonlyObject5954<T>
  : T;

interface DeepReadonlyArray5954<T> extends ReadonlyArray<DeepReadonly5954<T>> {}

type DeepReadonlyObject5954<T> = {
  readonly [P in keyof T]: DeepReadonly5954<T[P]>;
};

type UnionToIntersection5954<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5954<T> = UnionToIntersection5954<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5954<T extends unknown[], V> = [...T, V];

type TuplifyUnion5954<T, L = LastOf5954<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5954<TuplifyUnion5954<Exclude<T, L>>, L>;

type DeepPartial5954<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5954<T[P]> }
  : T;

type Paths5954<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5954<K, Paths5954<T[K], Prev5954[D]>> : never }[keyof T]
  : never;

type Prev5954 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5954<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5954 {
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

type ConfigPaths5954 = Paths5954<NestedConfig5954>;

interface HeavyProps5954 {
  config: DeepPartial5954<NestedConfig5954>;
  path?: ConfigPaths5954;
}

const HeavyComponent5954 = memo(function HeavyComponent5954({ config }: HeavyProps5954) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5954) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5954 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5954: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5954.displayName = 'HeavyComponent5954';
export default HeavyComponent5954;
