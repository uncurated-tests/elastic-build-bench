'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5962<T> = T extends (infer U)[]
  ? DeepReadonlyArray5962<U>
  : T extends object
  ? DeepReadonlyObject5962<T>
  : T;

interface DeepReadonlyArray5962<T> extends ReadonlyArray<DeepReadonly5962<T>> {}

type DeepReadonlyObject5962<T> = {
  readonly [P in keyof T]: DeepReadonly5962<T[P]>;
};

type UnionToIntersection5962<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5962<T> = UnionToIntersection5962<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5962<T extends unknown[], V> = [...T, V];

type TuplifyUnion5962<T, L = LastOf5962<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5962<TuplifyUnion5962<Exclude<T, L>>, L>;

type DeepPartial5962<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5962<T[P]> }
  : T;

type Paths5962<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5962<K, Paths5962<T[K], Prev5962[D]>> : never }[keyof T]
  : never;

type Prev5962 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5962<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5962 {
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

type ConfigPaths5962 = Paths5962<NestedConfig5962>;

interface HeavyProps5962 {
  config: DeepPartial5962<NestedConfig5962>;
  path?: ConfigPaths5962;
}

const HeavyComponent5962 = memo(function HeavyComponent5962({ config }: HeavyProps5962) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5962) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5962 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5962: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5962.displayName = 'HeavyComponent5962';
export default HeavyComponent5962;
