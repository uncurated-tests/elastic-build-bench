'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5738<T> = T extends (infer U)[]
  ? DeepReadonlyArray5738<U>
  : T extends object
  ? DeepReadonlyObject5738<T>
  : T;

interface DeepReadonlyArray5738<T> extends ReadonlyArray<DeepReadonly5738<T>> {}

type DeepReadonlyObject5738<T> = {
  readonly [P in keyof T]: DeepReadonly5738<T[P]>;
};

type UnionToIntersection5738<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5738<T> = UnionToIntersection5738<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5738<T extends unknown[], V> = [...T, V];

type TuplifyUnion5738<T, L = LastOf5738<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5738<TuplifyUnion5738<Exclude<T, L>>, L>;

type DeepPartial5738<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5738<T[P]> }
  : T;

type Paths5738<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5738<K, Paths5738<T[K], Prev5738[D]>> : never }[keyof T]
  : never;

type Prev5738 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5738<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5738 {
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

type ConfigPaths5738 = Paths5738<NestedConfig5738>;

interface HeavyProps5738 {
  config: DeepPartial5738<NestedConfig5738>;
  path?: ConfigPaths5738;
}

const HeavyComponent5738 = memo(function HeavyComponent5738({ config }: HeavyProps5738) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5738) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5738 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5738: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5738.displayName = 'HeavyComponent5738';
export default HeavyComponent5738;
