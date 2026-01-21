'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5550<T> = T extends (infer U)[]
  ? DeepReadonlyArray5550<U>
  : T extends object
  ? DeepReadonlyObject5550<T>
  : T;

interface DeepReadonlyArray5550<T> extends ReadonlyArray<DeepReadonly5550<T>> {}

type DeepReadonlyObject5550<T> = {
  readonly [P in keyof T]: DeepReadonly5550<T[P]>;
};

type UnionToIntersection5550<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5550<T> = UnionToIntersection5550<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5550<T extends unknown[], V> = [...T, V];

type TuplifyUnion5550<T, L = LastOf5550<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5550<TuplifyUnion5550<Exclude<T, L>>, L>;

type DeepPartial5550<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5550<T[P]> }
  : T;

type Paths5550<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5550<K, Paths5550<T[K], Prev5550[D]>> : never }[keyof T]
  : never;

type Prev5550 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5550<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5550 {
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

type ConfigPaths5550 = Paths5550<NestedConfig5550>;

interface HeavyProps5550 {
  config: DeepPartial5550<NestedConfig5550>;
  path?: ConfigPaths5550;
}

const HeavyComponent5550 = memo(function HeavyComponent5550({ config }: HeavyProps5550) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5550) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5550 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5550: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5550.displayName = 'HeavyComponent5550';
export default HeavyComponent5550;
