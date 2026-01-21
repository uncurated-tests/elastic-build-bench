'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5309<T> = T extends (infer U)[]
  ? DeepReadonlyArray5309<U>
  : T extends object
  ? DeepReadonlyObject5309<T>
  : T;

interface DeepReadonlyArray5309<T> extends ReadonlyArray<DeepReadonly5309<T>> {}

type DeepReadonlyObject5309<T> = {
  readonly [P in keyof T]: DeepReadonly5309<T[P]>;
};

type UnionToIntersection5309<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5309<T> = UnionToIntersection5309<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5309<T extends unknown[], V> = [...T, V];

type TuplifyUnion5309<T, L = LastOf5309<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5309<TuplifyUnion5309<Exclude<T, L>>, L>;

type DeepPartial5309<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5309<T[P]> }
  : T;

type Paths5309<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5309<K, Paths5309<T[K], Prev5309[D]>> : never }[keyof T]
  : never;

type Prev5309 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5309<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5309 {
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

type ConfigPaths5309 = Paths5309<NestedConfig5309>;

interface HeavyProps5309 {
  config: DeepPartial5309<NestedConfig5309>;
  path?: ConfigPaths5309;
}

const HeavyComponent5309 = memo(function HeavyComponent5309({ config }: HeavyProps5309) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5309) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5309 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5309: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5309.displayName = 'HeavyComponent5309';
export default HeavyComponent5309;
