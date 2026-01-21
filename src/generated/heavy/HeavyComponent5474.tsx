'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5474<T> = T extends (infer U)[]
  ? DeepReadonlyArray5474<U>
  : T extends object
  ? DeepReadonlyObject5474<T>
  : T;

interface DeepReadonlyArray5474<T> extends ReadonlyArray<DeepReadonly5474<T>> {}

type DeepReadonlyObject5474<T> = {
  readonly [P in keyof T]: DeepReadonly5474<T[P]>;
};

type UnionToIntersection5474<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5474<T> = UnionToIntersection5474<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5474<T extends unknown[], V> = [...T, V];

type TuplifyUnion5474<T, L = LastOf5474<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5474<TuplifyUnion5474<Exclude<T, L>>, L>;

type DeepPartial5474<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5474<T[P]> }
  : T;

type Paths5474<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5474<K, Paths5474<T[K], Prev5474[D]>> : never }[keyof T]
  : never;

type Prev5474 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5474<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5474 {
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

type ConfigPaths5474 = Paths5474<NestedConfig5474>;

interface HeavyProps5474 {
  config: DeepPartial5474<NestedConfig5474>;
  path?: ConfigPaths5474;
}

const HeavyComponent5474 = memo(function HeavyComponent5474({ config }: HeavyProps5474) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5474) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5474 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5474: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5474.displayName = 'HeavyComponent5474';
export default HeavyComponent5474;
