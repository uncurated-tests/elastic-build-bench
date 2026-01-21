'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5075<T> = T extends (infer U)[]
  ? DeepReadonlyArray5075<U>
  : T extends object
  ? DeepReadonlyObject5075<T>
  : T;

interface DeepReadonlyArray5075<T> extends ReadonlyArray<DeepReadonly5075<T>> {}

type DeepReadonlyObject5075<T> = {
  readonly [P in keyof T]: DeepReadonly5075<T[P]>;
};

type UnionToIntersection5075<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5075<T> = UnionToIntersection5075<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5075<T extends unknown[], V> = [...T, V];

type TuplifyUnion5075<T, L = LastOf5075<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5075<TuplifyUnion5075<Exclude<T, L>>, L>;

type DeepPartial5075<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5075<T[P]> }
  : T;

type Paths5075<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5075<K, Paths5075<T[K], Prev5075[D]>> : never }[keyof T]
  : never;

type Prev5075 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5075<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5075 {
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

type ConfigPaths5075 = Paths5075<NestedConfig5075>;

interface HeavyProps5075 {
  config: DeepPartial5075<NestedConfig5075>;
  path?: ConfigPaths5075;
}

const HeavyComponent5075 = memo(function HeavyComponent5075({ config }: HeavyProps5075) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5075) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5075 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5075: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5075.displayName = 'HeavyComponent5075';
export default HeavyComponent5075;
