'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5180<T> = T extends (infer U)[]
  ? DeepReadonlyArray5180<U>
  : T extends object
  ? DeepReadonlyObject5180<T>
  : T;

interface DeepReadonlyArray5180<T> extends ReadonlyArray<DeepReadonly5180<T>> {}

type DeepReadonlyObject5180<T> = {
  readonly [P in keyof T]: DeepReadonly5180<T[P]>;
};

type UnionToIntersection5180<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5180<T> = UnionToIntersection5180<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5180<T extends unknown[], V> = [...T, V];

type TuplifyUnion5180<T, L = LastOf5180<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5180<TuplifyUnion5180<Exclude<T, L>>, L>;

type DeepPartial5180<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5180<T[P]> }
  : T;

type Paths5180<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5180<K, Paths5180<T[K], Prev5180[D]>> : never }[keyof T]
  : never;

type Prev5180 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5180<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5180 {
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

type ConfigPaths5180 = Paths5180<NestedConfig5180>;

interface HeavyProps5180 {
  config: DeepPartial5180<NestedConfig5180>;
  path?: ConfigPaths5180;
}

const HeavyComponent5180 = memo(function HeavyComponent5180({ config }: HeavyProps5180) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5180) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5180 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5180: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5180.displayName = 'HeavyComponent5180';
export default HeavyComponent5180;
