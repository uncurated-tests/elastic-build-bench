'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5571<T> = T extends (infer U)[]
  ? DeepReadonlyArray5571<U>
  : T extends object
  ? DeepReadonlyObject5571<T>
  : T;

interface DeepReadonlyArray5571<T> extends ReadonlyArray<DeepReadonly5571<T>> {}

type DeepReadonlyObject5571<T> = {
  readonly [P in keyof T]: DeepReadonly5571<T[P]>;
};

type UnionToIntersection5571<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5571<T> = UnionToIntersection5571<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5571<T extends unknown[], V> = [...T, V];

type TuplifyUnion5571<T, L = LastOf5571<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5571<TuplifyUnion5571<Exclude<T, L>>, L>;

type DeepPartial5571<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5571<T[P]> }
  : T;

type Paths5571<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5571<K, Paths5571<T[K], Prev5571[D]>> : never }[keyof T]
  : never;

type Prev5571 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5571<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5571 {
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

type ConfigPaths5571 = Paths5571<NestedConfig5571>;

interface HeavyProps5571 {
  config: DeepPartial5571<NestedConfig5571>;
  path?: ConfigPaths5571;
}

const HeavyComponent5571 = memo(function HeavyComponent5571({ config }: HeavyProps5571) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5571) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5571 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5571: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5571.displayName = 'HeavyComponent5571';
export default HeavyComponent5571;
