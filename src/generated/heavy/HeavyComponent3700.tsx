'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3700<T> = T extends (infer U)[]
  ? DeepReadonlyArray3700<U>
  : T extends object
  ? DeepReadonlyObject3700<T>
  : T;

interface DeepReadonlyArray3700<T> extends ReadonlyArray<DeepReadonly3700<T>> {}

type DeepReadonlyObject3700<T> = {
  readonly [P in keyof T]: DeepReadonly3700<T[P]>;
};

type UnionToIntersection3700<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3700<T> = UnionToIntersection3700<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3700<T extends unknown[], V> = [...T, V];

type TuplifyUnion3700<T, L = LastOf3700<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3700<TuplifyUnion3700<Exclude<T, L>>, L>;

type DeepPartial3700<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3700<T[P]> }
  : T;

type Paths3700<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3700<K, Paths3700<T[K], Prev3700[D]>> : never }[keyof T]
  : never;

type Prev3700 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3700<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3700 {
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

type ConfigPaths3700 = Paths3700<NestedConfig3700>;

interface HeavyProps3700 {
  config: DeepPartial3700<NestedConfig3700>;
  path?: ConfigPaths3700;
}

const HeavyComponent3700 = memo(function HeavyComponent3700({ config }: HeavyProps3700) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3700) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3700 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3700: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3700.displayName = 'HeavyComponent3700';
export default HeavyComponent3700;
