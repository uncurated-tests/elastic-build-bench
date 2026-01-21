'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5271<T> = T extends (infer U)[]
  ? DeepReadonlyArray5271<U>
  : T extends object
  ? DeepReadonlyObject5271<T>
  : T;

interface DeepReadonlyArray5271<T> extends ReadonlyArray<DeepReadonly5271<T>> {}

type DeepReadonlyObject5271<T> = {
  readonly [P in keyof T]: DeepReadonly5271<T[P]>;
};

type UnionToIntersection5271<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5271<T> = UnionToIntersection5271<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5271<T extends unknown[], V> = [...T, V];

type TuplifyUnion5271<T, L = LastOf5271<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5271<TuplifyUnion5271<Exclude<T, L>>, L>;

type DeepPartial5271<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5271<T[P]> }
  : T;

type Paths5271<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5271<K, Paths5271<T[K], Prev5271[D]>> : never }[keyof T]
  : never;

type Prev5271 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5271<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5271 {
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

type ConfigPaths5271 = Paths5271<NestedConfig5271>;

interface HeavyProps5271 {
  config: DeepPartial5271<NestedConfig5271>;
  path?: ConfigPaths5271;
}

const HeavyComponent5271 = memo(function HeavyComponent5271({ config }: HeavyProps5271) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5271) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5271 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5271: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5271.displayName = 'HeavyComponent5271';
export default HeavyComponent5271;
