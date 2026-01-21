'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5238<T> = T extends (infer U)[]
  ? DeepReadonlyArray5238<U>
  : T extends object
  ? DeepReadonlyObject5238<T>
  : T;

interface DeepReadonlyArray5238<T> extends ReadonlyArray<DeepReadonly5238<T>> {}

type DeepReadonlyObject5238<T> = {
  readonly [P in keyof T]: DeepReadonly5238<T[P]>;
};

type UnionToIntersection5238<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5238<T> = UnionToIntersection5238<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5238<T extends unknown[], V> = [...T, V];

type TuplifyUnion5238<T, L = LastOf5238<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5238<TuplifyUnion5238<Exclude<T, L>>, L>;

type DeepPartial5238<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5238<T[P]> }
  : T;

type Paths5238<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5238<K, Paths5238<T[K], Prev5238[D]>> : never }[keyof T]
  : never;

type Prev5238 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5238<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5238 {
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

type ConfigPaths5238 = Paths5238<NestedConfig5238>;

interface HeavyProps5238 {
  config: DeepPartial5238<NestedConfig5238>;
  path?: ConfigPaths5238;
}

const HeavyComponent5238 = memo(function HeavyComponent5238({ config }: HeavyProps5238) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5238) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5238 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5238: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5238.displayName = 'HeavyComponent5238';
export default HeavyComponent5238;
