'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5750<T> = T extends (infer U)[]
  ? DeepReadonlyArray5750<U>
  : T extends object
  ? DeepReadonlyObject5750<T>
  : T;

interface DeepReadonlyArray5750<T> extends ReadonlyArray<DeepReadonly5750<T>> {}

type DeepReadonlyObject5750<T> = {
  readonly [P in keyof T]: DeepReadonly5750<T[P]>;
};

type UnionToIntersection5750<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5750<T> = UnionToIntersection5750<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5750<T extends unknown[], V> = [...T, V];

type TuplifyUnion5750<T, L = LastOf5750<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5750<TuplifyUnion5750<Exclude<T, L>>, L>;

type DeepPartial5750<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5750<T[P]> }
  : T;

type Paths5750<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5750<K, Paths5750<T[K], Prev5750[D]>> : never }[keyof T]
  : never;

type Prev5750 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5750<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5750 {
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

type ConfigPaths5750 = Paths5750<NestedConfig5750>;

interface HeavyProps5750 {
  config: DeepPartial5750<NestedConfig5750>;
  path?: ConfigPaths5750;
}

const HeavyComponent5750 = memo(function HeavyComponent5750({ config }: HeavyProps5750) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5750) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5750 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5750: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5750.displayName = 'HeavyComponent5750';
export default HeavyComponent5750;
