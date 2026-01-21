'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5086<T> = T extends (infer U)[]
  ? DeepReadonlyArray5086<U>
  : T extends object
  ? DeepReadonlyObject5086<T>
  : T;

interface DeepReadonlyArray5086<T> extends ReadonlyArray<DeepReadonly5086<T>> {}

type DeepReadonlyObject5086<T> = {
  readonly [P in keyof T]: DeepReadonly5086<T[P]>;
};

type UnionToIntersection5086<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5086<T> = UnionToIntersection5086<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5086<T extends unknown[], V> = [...T, V];

type TuplifyUnion5086<T, L = LastOf5086<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5086<TuplifyUnion5086<Exclude<T, L>>, L>;

type DeepPartial5086<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5086<T[P]> }
  : T;

type Paths5086<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5086<K, Paths5086<T[K], Prev5086[D]>> : never }[keyof T]
  : never;

type Prev5086 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5086<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5086 {
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

type ConfigPaths5086 = Paths5086<NestedConfig5086>;

interface HeavyProps5086 {
  config: DeepPartial5086<NestedConfig5086>;
  path?: ConfigPaths5086;
}

const HeavyComponent5086 = memo(function HeavyComponent5086({ config }: HeavyProps5086) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5086) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5086 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5086: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5086.displayName = 'HeavyComponent5086';
export default HeavyComponent5086;
