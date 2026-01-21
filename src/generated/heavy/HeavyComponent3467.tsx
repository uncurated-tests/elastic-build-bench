'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3467<T> = T extends (infer U)[]
  ? DeepReadonlyArray3467<U>
  : T extends object
  ? DeepReadonlyObject3467<T>
  : T;

interface DeepReadonlyArray3467<T> extends ReadonlyArray<DeepReadonly3467<T>> {}

type DeepReadonlyObject3467<T> = {
  readonly [P in keyof T]: DeepReadonly3467<T[P]>;
};

type UnionToIntersection3467<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3467<T> = UnionToIntersection3467<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3467<T extends unknown[], V> = [...T, V];

type TuplifyUnion3467<T, L = LastOf3467<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3467<TuplifyUnion3467<Exclude<T, L>>, L>;

type DeepPartial3467<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3467<T[P]> }
  : T;

type Paths3467<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3467<K, Paths3467<T[K], Prev3467[D]>> : never }[keyof T]
  : never;

type Prev3467 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3467<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3467 {
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

type ConfigPaths3467 = Paths3467<NestedConfig3467>;

interface HeavyProps3467 {
  config: DeepPartial3467<NestedConfig3467>;
  path?: ConfigPaths3467;
}

const HeavyComponent3467 = memo(function HeavyComponent3467({ config }: HeavyProps3467) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3467) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3467 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3467: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3467.displayName = 'HeavyComponent3467';
export default HeavyComponent3467;
