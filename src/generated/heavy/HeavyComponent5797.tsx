'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5797<T> = T extends (infer U)[]
  ? DeepReadonlyArray5797<U>
  : T extends object
  ? DeepReadonlyObject5797<T>
  : T;

interface DeepReadonlyArray5797<T> extends ReadonlyArray<DeepReadonly5797<T>> {}

type DeepReadonlyObject5797<T> = {
  readonly [P in keyof T]: DeepReadonly5797<T[P]>;
};

type UnionToIntersection5797<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5797<T> = UnionToIntersection5797<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5797<T extends unknown[], V> = [...T, V];

type TuplifyUnion5797<T, L = LastOf5797<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5797<TuplifyUnion5797<Exclude<T, L>>, L>;

type DeepPartial5797<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5797<T[P]> }
  : T;

type Paths5797<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5797<K, Paths5797<T[K], Prev5797[D]>> : never }[keyof T]
  : never;

type Prev5797 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5797<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5797 {
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

type ConfigPaths5797 = Paths5797<NestedConfig5797>;

interface HeavyProps5797 {
  config: DeepPartial5797<NestedConfig5797>;
  path?: ConfigPaths5797;
}

const HeavyComponent5797 = memo(function HeavyComponent5797({ config }: HeavyProps5797) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5797) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5797 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5797: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5797.displayName = 'HeavyComponent5797';
export default HeavyComponent5797;
