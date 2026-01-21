'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5450<T> = T extends (infer U)[]
  ? DeepReadonlyArray5450<U>
  : T extends object
  ? DeepReadonlyObject5450<T>
  : T;

interface DeepReadonlyArray5450<T> extends ReadonlyArray<DeepReadonly5450<T>> {}

type DeepReadonlyObject5450<T> = {
  readonly [P in keyof T]: DeepReadonly5450<T[P]>;
};

type UnionToIntersection5450<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5450<T> = UnionToIntersection5450<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5450<T extends unknown[], V> = [...T, V];

type TuplifyUnion5450<T, L = LastOf5450<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5450<TuplifyUnion5450<Exclude<T, L>>, L>;

type DeepPartial5450<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5450<T[P]> }
  : T;

type Paths5450<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5450<K, Paths5450<T[K], Prev5450[D]>> : never }[keyof T]
  : never;

type Prev5450 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5450<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5450 {
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

type ConfigPaths5450 = Paths5450<NestedConfig5450>;

interface HeavyProps5450 {
  config: DeepPartial5450<NestedConfig5450>;
  path?: ConfigPaths5450;
}

const HeavyComponent5450 = memo(function HeavyComponent5450({ config }: HeavyProps5450) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5450) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5450 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5450: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5450.displayName = 'HeavyComponent5450';
export default HeavyComponent5450;
