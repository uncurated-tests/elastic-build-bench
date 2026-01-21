'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5316<T> = T extends (infer U)[]
  ? DeepReadonlyArray5316<U>
  : T extends object
  ? DeepReadonlyObject5316<T>
  : T;

interface DeepReadonlyArray5316<T> extends ReadonlyArray<DeepReadonly5316<T>> {}

type DeepReadonlyObject5316<T> = {
  readonly [P in keyof T]: DeepReadonly5316<T[P]>;
};

type UnionToIntersection5316<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5316<T> = UnionToIntersection5316<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5316<T extends unknown[], V> = [...T, V];

type TuplifyUnion5316<T, L = LastOf5316<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5316<TuplifyUnion5316<Exclude<T, L>>, L>;

type DeepPartial5316<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5316<T[P]> }
  : T;

type Paths5316<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5316<K, Paths5316<T[K], Prev5316[D]>> : never }[keyof T]
  : never;

type Prev5316 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5316<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5316 {
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

type ConfigPaths5316 = Paths5316<NestedConfig5316>;

interface HeavyProps5316 {
  config: DeepPartial5316<NestedConfig5316>;
  path?: ConfigPaths5316;
}

const HeavyComponent5316 = memo(function HeavyComponent5316({ config }: HeavyProps5316) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5316) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5316 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5316: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5316.displayName = 'HeavyComponent5316';
export default HeavyComponent5316;
