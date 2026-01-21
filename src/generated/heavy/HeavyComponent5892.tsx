'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5892<T> = T extends (infer U)[]
  ? DeepReadonlyArray5892<U>
  : T extends object
  ? DeepReadonlyObject5892<T>
  : T;

interface DeepReadonlyArray5892<T> extends ReadonlyArray<DeepReadonly5892<T>> {}

type DeepReadonlyObject5892<T> = {
  readonly [P in keyof T]: DeepReadonly5892<T[P]>;
};

type UnionToIntersection5892<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5892<T> = UnionToIntersection5892<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5892<T extends unknown[], V> = [...T, V];

type TuplifyUnion5892<T, L = LastOf5892<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5892<TuplifyUnion5892<Exclude<T, L>>, L>;

type DeepPartial5892<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5892<T[P]> }
  : T;

type Paths5892<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5892<K, Paths5892<T[K], Prev5892[D]>> : never }[keyof T]
  : never;

type Prev5892 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5892<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5892 {
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

type ConfigPaths5892 = Paths5892<NestedConfig5892>;

interface HeavyProps5892 {
  config: DeepPartial5892<NestedConfig5892>;
  path?: ConfigPaths5892;
}

const HeavyComponent5892 = memo(function HeavyComponent5892({ config }: HeavyProps5892) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5892) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5892 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5892: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5892.displayName = 'HeavyComponent5892';
export default HeavyComponent5892;
