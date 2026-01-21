'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5714<T> = T extends (infer U)[]
  ? DeepReadonlyArray5714<U>
  : T extends object
  ? DeepReadonlyObject5714<T>
  : T;

interface DeepReadonlyArray5714<T> extends ReadonlyArray<DeepReadonly5714<T>> {}

type DeepReadonlyObject5714<T> = {
  readonly [P in keyof T]: DeepReadonly5714<T[P]>;
};

type UnionToIntersection5714<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5714<T> = UnionToIntersection5714<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5714<T extends unknown[], V> = [...T, V];

type TuplifyUnion5714<T, L = LastOf5714<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5714<TuplifyUnion5714<Exclude<T, L>>, L>;

type DeepPartial5714<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5714<T[P]> }
  : T;

type Paths5714<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5714<K, Paths5714<T[K], Prev5714[D]>> : never }[keyof T]
  : never;

type Prev5714 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5714<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5714 {
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

type ConfigPaths5714 = Paths5714<NestedConfig5714>;

interface HeavyProps5714 {
  config: DeepPartial5714<NestedConfig5714>;
  path?: ConfigPaths5714;
}

const HeavyComponent5714 = memo(function HeavyComponent5714({ config }: HeavyProps5714) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5714) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5714 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5714: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5714.displayName = 'HeavyComponent5714';
export default HeavyComponent5714;
