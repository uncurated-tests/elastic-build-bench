'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5435<T> = T extends (infer U)[]
  ? DeepReadonlyArray5435<U>
  : T extends object
  ? DeepReadonlyObject5435<T>
  : T;

interface DeepReadonlyArray5435<T> extends ReadonlyArray<DeepReadonly5435<T>> {}

type DeepReadonlyObject5435<T> = {
  readonly [P in keyof T]: DeepReadonly5435<T[P]>;
};

type UnionToIntersection5435<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5435<T> = UnionToIntersection5435<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5435<T extends unknown[], V> = [...T, V];

type TuplifyUnion5435<T, L = LastOf5435<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5435<TuplifyUnion5435<Exclude<T, L>>, L>;

type DeepPartial5435<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5435<T[P]> }
  : T;

type Paths5435<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5435<K, Paths5435<T[K], Prev5435[D]>> : never }[keyof T]
  : never;

type Prev5435 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5435<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5435 {
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

type ConfigPaths5435 = Paths5435<NestedConfig5435>;

interface HeavyProps5435 {
  config: DeepPartial5435<NestedConfig5435>;
  path?: ConfigPaths5435;
}

const HeavyComponent5435 = memo(function HeavyComponent5435({ config }: HeavyProps5435) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5435) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5435 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5435: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5435.displayName = 'HeavyComponent5435';
export default HeavyComponent5435;
