'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5359<T> = T extends (infer U)[]
  ? DeepReadonlyArray5359<U>
  : T extends object
  ? DeepReadonlyObject5359<T>
  : T;

interface DeepReadonlyArray5359<T> extends ReadonlyArray<DeepReadonly5359<T>> {}

type DeepReadonlyObject5359<T> = {
  readonly [P in keyof T]: DeepReadonly5359<T[P]>;
};

type UnionToIntersection5359<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5359<T> = UnionToIntersection5359<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5359<T extends unknown[], V> = [...T, V];

type TuplifyUnion5359<T, L = LastOf5359<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5359<TuplifyUnion5359<Exclude<T, L>>, L>;

type DeepPartial5359<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5359<T[P]> }
  : T;

type Paths5359<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5359<K, Paths5359<T[K], Prev5359[D]>> : never }[keyof T]
  : never;

type Prev5359 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5359<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5359 {
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

type ConfigPaths5359 = Paths5359<NestedConfig5359>;

interface HeavyProps5359 {
  config: DeepPartial5359<NestedConfig5359>;
  path?: ConfigPaths5359;
}

const HeavyComponent5359 = memo(function HeavyComponent5359({ config }: HeavyProps5359) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5359) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5359 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5359: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5359.displayName = 'HeavyComponent5359';
export default HeavyComponent5359;
