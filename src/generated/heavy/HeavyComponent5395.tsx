'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5395<T> = T extends (infer U)[]
  ? DeepReadonlyArray5395<U>
  : T extends object
  ? DeepReadonlyObject5395<T>
  : T;

interface DeepReadonlyArray5395<T> extends ReadonlyArray<DeepReadonly5395<T>> {}

type DeepReadonlyObject5395<T> = {
  readonly [P in keyof T]: DeepReadonly5395<T[P]>;
};

type UnionToIntersection5395<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5395<T> = UnionToIntersection5395<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5395<T extends unknown[], V> = [...T, V];

type TuplifyUnion5395<T, L = LastOf5395<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5395<TuplifyUnion5395<Exclude<T, L>>, L>;

type DeepPartial5395<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5395<T[P]> }
  : T;

type Paths5395<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5395<K, Paths5395<T[K], Prev5395[D]>> : never }[keyof T]
  : never;

type Prev5395 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5395<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5395 {
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

type ConfigPaths5395 = Paths5395<NestedConfig5395>;

interface HeavyProps5395 {
  config: DeepPartial5395<NestedConfig5395>;
  path?: ConfigPaths5395;
}

const HeavyComponent5395 = memo(function HeavyComponent5395({ config }: HeavyProps5395) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5395) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5395 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5395: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5395.displayName = 'HeavyComponent5395';
export default HeavyComponent5395;
