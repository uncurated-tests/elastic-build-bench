'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5071<T> = T extends (infer U)[]
  ? DeepReadonlyArray5071<U>
  : T extends object
  ? DeepReadonlyObject5071<T>
  : T;

interface DeepReadonlyArray5071<T> extends ReadonlyArray<DeepReadonly5071<T>> {}

type DeepReadonlyObject5071<T> = {
  readonly [P in keyof T]: DeepReadonly5071<T[P]>;
};

type UnionToIntersection5071<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5071<T> = UnionToIntersection5071<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5071<T extends unknown[], V> = [...T, V];

type TuplifyUnion5071<T, L = LastOf5071<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5071<TuplifyUnion5071<Exclude<T, L>>, L>;

type DeepPartial5071<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5071<T[P]> }
  : T;

type Paths5071<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5071<K, Paths5071<T[K], Prev5071[D]>> : never }[keyof T]
  : never;

type Prev5071 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5071<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5071 {
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

type ConfigPaths5071 = Paths5071<NestedConfig5071>;

interface HeavyProps5071 {
  config: DeepPartial5071<NestedConfig5071>;
  path?: ConfigPaths5071;
}

const HeavyComponent5071 = memo(function HeavyComponent5071({ config }: HeavyProps5071) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5071) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5071 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5071: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5071.displayName = 'HeavyComponent5071';
export default HeavyComponent5071;
