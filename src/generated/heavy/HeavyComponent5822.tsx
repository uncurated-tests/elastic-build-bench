'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5822<T> = T extends (infer U)[]
  ? DeepReadonlyArray5822<U>
  : T extends object
  ? DeepReadonlyObject5822<T>
  : T;

interface DeepReadonlyArray5822<T> extends ReadonlyArray<DeepReadonly5822<T>> {}

type DeepReadonlyObject5822<T> = {
  readonly [P in keyof T]: DeepReadonly5822<T[P]>;
};

type UnionToIntersection5822<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5822<T> = UnionToIntersection5822<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5822<T extends unknown[], V> = [...T, V];

type TuplifyUnion5822<T, L = LastOf5822<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5822<TuplifyUnion5822<Exclude<T, L>>, L>;

type DeepPartial5822<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5822<T[P]> }
  : T;

type Paths5822<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5822<K, Paths5822<T[K], Prev5822[D]>> : never }[keyof T]
  : never;

type Prev5822 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5822<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5822 {
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

type ConfigPaths5822 = Paths5822<NestedConfig5822>;

interface HeavyProps5822 {
  config: DeepPartial5822<NestedConfig5822>;
  path?: ConfigPaths5822;
}

const HeavyComponent5822 = memo(function HeavyComponent5822({ config }: HeavyProps5822) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5822) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5822 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5822: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5822.displayName = 'HeavyComponent5822';
export default HeavyComponent5822;
