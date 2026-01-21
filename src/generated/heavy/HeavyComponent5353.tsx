'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5353<T> = T extends (infer U)[]
  ? DeepReadonlyArray5353<U>
  : T extends object
  ? DeepReadonlyObject5353<T>
  : T;

interface DeepReadonlyArray5353<T> extends ReadonlyArray<DeepReadonly5353<T>> {}

type DeepReadonlyObject5353<T> = {
  readonly [P in keyof T]: DeepReadonly5353<T[P]>;
};

type UnionToIntersection5353<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5353<T> = UnionToIntersection5353<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5353<T extends unknown[], V> = [...T, V];

type TuplifyUnion5353<T, L = LastOf5353<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5353<TuplifyUnion5353<Exclude<T, L>>, L>;

type DeepPartial5353<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5353<T[P]> }
  : T;

type Paths5353<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5353<K, Paths5353<T[K], Prev5353[D]>> : never }[keyof T]
  : never;

type Prev5353 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5353<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5353 {
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

type ConfigPaths5353 = Paths5353<NestedConfig5353>;

interface HeavyProps5353 {
  config: DeepPartial5353<NestedConfig5353>;
  path?: ConfigPaths5353;
}

const HeavyComponent5353 = memo(function HeavyComponent5353({ config }: HeavyProps5353) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5353) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5353 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5353: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5353.displayName = 'HeavyComponent5353';
export default HeavyComponent5353;
