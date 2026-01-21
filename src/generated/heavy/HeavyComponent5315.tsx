'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5315<T> = T extends (infer U)[]
  ? DeepReadonlyArray5315<U>
  : T extends object
  ? DeepReadonlyObject5315<T>
  : T;

interface DeepReadonlyArray5315<T> extends ReadonlyArray<DeepReadonly5315<T>> {}

type DeepReadonlyObject5315<T> = {
  readonly [P in keyof T]: DeepReadonly5315<T[P]>;
};

type UnionToIntersection5315<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5315<T> = UnionToIntersection5315<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5315<T extends unknown[], V> = [...T, V];

type TuplifyUnion5315<T, L = LastOf5315<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5315<TuplifyUnion5315<Exclude<T, L>>, L>;

type DeepPartial5315<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5315<T[P]> }
  : T;

type Paths5315<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5315<K, Paths5315<T[K], Prev5315[D]>> : never }[keyof T]
  : never;

type Prev5315 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5315<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5315 {
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

type ConfigPaths5315 = Paths5315<NestedConfig5315>;

interface HeavyProps5315 {
  config: DeepPartial5315<NestedConfig5315>;
  path?: ConfigPaths5315;
}

const HeavyComponent5315 = memo(function HeavyComponent5315({ config }: HeavyProps5315) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5315) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5315 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5315: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5315.displayName = 'HeavyComponent5315';
export default HeavyComponent5315;
