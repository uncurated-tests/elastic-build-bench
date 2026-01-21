'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3097<T> = T extends (infer U)[]
  ? DeepReadonlyArray3097<U>
  : T extends object
  ? DeepReadonlyObject3097<T>
  : T;

interface DeepReadonlyArray3097<T> extends ReadonlyArray<DeepReadonly3097<T>> {}

type DeepReadonlyObject3097<T> = {
  readonly [P in keyof T]: DeepReadonly3097<T[P]>;
};

type UnionToIntersection3097<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3097<T> = UnionToIntersection3097<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3097<T extends unknown[], V> = [...T, V];

type TuplifyUnion3097<T, L = LastOf3097<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3097<TuplifyUnion3097<Exclude<T, L>>, L>;

type DeepPartial3097<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3097<T[P]> }
  : T;

type Paths3097<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3097<K, Paths3097<T[K], Prev3097[D]>> : never }[keyof T]
  : never;

type Prev3097 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3097<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3097 {
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

type ConfigPaths3097 = Paths3097<NestedConfig3097>;

interface HeavyProps3097 {
  config: DeepPartial3097<NestedConfig3097>;
  path?: ConfigPaths3097;
}

const HeavyComponent3097 = memo(function HeavyComponent3097({ config }: HeavyProps3097) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3097) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3097 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3097: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3097.displayName = 'HeavyComponent3097';
export default HeavyComponent3097;
