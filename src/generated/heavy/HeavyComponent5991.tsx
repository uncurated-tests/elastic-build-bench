'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5991<T> = T extends (infer U)[]
  ? DeepReadonlyArray5991<U>
  : T extends object
  ? DeepReadonlyObject5991<T>
  : T;

interface DeepReadonlyArray5991<T> extends ReadonlyArray<DeepReadonly5991<T>> {}

type DeepReadonlyObject5991<T> = {
  readonly [P in keyof T]: DeepReadonly5991<T[P]>;
};

type UnionToIntersection5991<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5991<T> = UnionToIntersection5991<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5991<T extends unknown[], V> = [...T, V];

type TuplifyUnion5991<T, L = LastOf5991<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5991<TuplifyUnion5991<Exclude<T, L>>, L>;

type DeepPartial5991<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5991<T[P]> }
  : T;

type Paths5991<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5991<K, Paths5991<T[K], Prev5991[D]>> : never }[keyof T]
  : never;

type Prev5991 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5991<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5991 {
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

type ConfigPaths5991 = Paths5991<NestedConfig5991>;

interface HeavyProps5991 {
  config: DeepPartial5991<NestedConfig5991>;
  path?: ConfigPaths5991;
}

const HeavyComponent5991 = memo(function HeavyComponent5991({ config }: HeavyProps5991) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5991) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5991 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5991: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5991.displayName = 'HeavyComponent5991';
export default HeavyComponent5991;
