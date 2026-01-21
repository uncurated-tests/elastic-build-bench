'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3105<T> = T extends (infer U)[]
  ? DeepReadonlyArray3105<U>
  : T extends object
  ? DeepReadonlyObject3105<T>
  : T;

interface DeepReadonlyArray3105<T> extends ReadonlyArray<DeepReadonly3105<T>> {}

type DeepReadonlyObject3105<T> = {
  readonly [P in keyof T]: DeepReadonly3105<T[P]>;
};

type UnionToIntersection3105<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3105<T> = UnionToIntersection3105<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3105<T extends unknown[], V> = [...T, V];

type TuplifyUnion3105<T, L = LastOf3105<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3105<TuplifyUnion3105<Exclude<T, L>>, L>;

type DeepPartial3105<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3105<T[P]> }
  : T;

type Paths3105<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3105<K, Paths3105<T[K], Prev3105[D]>> : never }[keyof T]
  : never;

type Prev3105 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3105<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3105 {
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

type ConfigPaths3105 = Paths3105<NestedConfig3105>;

interface HeavyProps3105 {
  config: DeepPartial3105<NestedConfig3105>;
  path?: ConfigPaths3105;
}

const HeavyComponent3105 = memo(function HeavyComponent3105({ config }: HeavyProps3105) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3105) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3105 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3105: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3105.displayName = 'HeavyComponent3105';
export default HeavyComponent3105;
