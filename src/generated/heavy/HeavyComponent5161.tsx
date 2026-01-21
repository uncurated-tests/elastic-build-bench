'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5161<T> = T extends (infer U)[]
  ? DeepReadonlyArray5161<U>
  : T extends object
  ? DeepReadonlyObject5161<T>
  : T;

interface DeepReadonlyArray5161<T> extends ReadonlyArray<DeepReadonly5161<T>> {}

type DeepReadonlyObject5161<T> = {
  readonly [P in keyof T]: DeepReadonly5161<T[P]>;
};

type UnionToIntersection5161<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5161<T> = UnionToIntersection5161<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5161<T extends unknown[], V> = [...T, V];

type TuplifyUnion5161<T, L = LastOf5161<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5161<TuplifyUnion5161<Exclude<T, L>>, L>;

type DeepPartial5161<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5161<T[P]> }
  : T;

type Paths5161<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5161<K, Paths5161<T[K], Prev5161[D]>> : never }[keyof T]
  : never;

type Prev5161 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5161<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5161 {
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

type ConfigPaths5161 = Paths5161<NestedConfig5161>;

interface HeavyProps5161 {
  config: DeepPartial5161<NestedConfig5161>;
  path?: ConfigPaths5161;
}

const HeavyComponent5161 = memo(function HeavyComponent5161({ config }: HeavyProps5161) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5161) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5161 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5161: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5161.displayName = 'HeavyComponent5161';
export default HeavyComponent5161;
