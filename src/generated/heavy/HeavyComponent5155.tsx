'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5155<T> = T extends (infer U)[]
  ? DeepReadonlyArray5155<U>
  : T extends object
  ? DeepReadonlyObject5155<T>
  : T;

interface DeepReadonlyArray5155<T> extends ReadonlyArray<DeepReadonly5155<T>> {}

type DeepReadonlyObject5155<T> = {
  readonly [P in keyof T]: DeepReadonly5155<T[P]>;
};

type UnionToIntersection5155<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5155<T> = UnionToIntersection5155<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5155<T extends unknown[], V> = [...T, V];

type TuplifyUnion5155<T, L = LastOf5155<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5155<TuplifyUnion5155<Exclude<T, L>>, L>;

type DeepPartial5155<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5155<T[P]> }
  : T;

type Paths5155<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5155<K, Paths5155<T[K], Prev5155[D]>> : never }[keyof T]
  : never;

type Prev5155 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5155<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5155 {
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

type ConfigPaths5155 = Paths5155<NestedConfig5155>;

interface HeavyProps5155 {
  config: DeepPartial5155<NestedConfig5155>;
  path?: ConfigPaths5155;
}

const HeavyComponent5155 = memo(function HeavyComponent5155({ config }: HeavyProps5155) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5155) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5155 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5155: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5155.displayName = 'HeavyComponent5155';
export default HeavyComponent5155;
