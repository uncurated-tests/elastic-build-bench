'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3511<T> = T extends (infer U)[]
  ? DeepReadonlyArray3511<U>
  : T extends object
  ? DeepReadonlyObject3511<T>
  : T;

interface DeepReadonlyArray3511<T> extends ReadonlyArray<DeepReadonly3511<T>> {}

type DeepReadonlyObject3511<T> = {
  readonly [P in keyof T]: DeepReadonly3511<T[P]>;
};

type UnionToIntersection3511<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3511<T> = UnionToIntersection3511<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3511<T extends unknown[], V> = [...T, V];

type TuplifyUnion3511<T, L = LastOf3511<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3511<TuplifyUnion3511<Exclude<T, L>>, L>;

type DeepPartial3511<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3511<T[P]> }
  : T;

type Paths3511<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3511<K, Paths3511<T[K], Prev3511[D]>> : never }[keyof T]
  : never;

type Prev3511 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3511<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3511 {
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

type ConfigPaths3511 = Paths3511<NestedConfig3511>;

interface HeavyProps3511 {
  config: DeepPartial3511<NestedConfig3511>;
  path?: ConfigPaths3511;
}

const HeavyComponent3511 = memo(function HeavyComponent3511({ config }: HeavyProps3511) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3511) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3511 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3511: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3511.displayName = 'HeavyComponent3511';
export default HeavyComponent3511;
