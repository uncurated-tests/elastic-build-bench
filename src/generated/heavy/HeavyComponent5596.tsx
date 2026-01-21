'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5596<T> = T extends (infer U)[]
  ? DeepReadonlyArray5596<U>
  : T extends object
  ? DeepReadonlyObject5596<T>
  : T;

interface DeepReadonlyArray5596<T> extends ReadonlyArray<DeepReadonly5596<T>> {}

type DeepReadonlyObject5596<T> = {
  readonly [P in keyof T]: DeepReadonly5596<T[P]>;
};

type UnionToIntersection5596<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5596<T> = UnionToIntersection5596<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5596<T extends unknown[], V> = [...T, V];

type TuplifyUnion5596<T, L = LastOf5596<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5596<TuplifyUnion5596<Exclude<T, L>>, L>;

type DeepPartial5596<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5596<T[P]> }
  : T;

type Paths5596<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5596<K, Paths5596<T[K], Prev5596[D]>> : never }[keyof T]
  : never;

type Prev5596 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5596<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5596 {
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

type ConfigPaths5596 = Paths5596<NestedConfig5596>;

interface HeavyProps5596 {
  config: DeepPartial5596<NestedConfig5596>;
  path?: ConfigPaths5596;
}

const HeavyComponent5596 = memo(function HeavyComponent5596({ config }: HeavyProps5596) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5596) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5596 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5596: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5596.displayName = 'HeavyComponent5596';
export default HeavyComponent5596;
