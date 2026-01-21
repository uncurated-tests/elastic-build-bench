'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3251<T> = T extends (infer U)[]
  ? DeepReadonlyArray3251<U>
  : T extends object
  ? DeepReadonlyObject3251<T>
  : T;

interface DeepReadonlyArray3251<T> extends ReadonlyArray<DeepReadonly3251<T>> {}

type DeepReadonlyObject3251<T> = {
  readonly [P in keyof T]: DeepReadonly3251<T[P]>;
};

type UnionToIntersection3251<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3251<T> = UnionToIntersection3251<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3251<T extends unknown[], V> = [...T, V];

type TuplifyUnion3251<T, L = LastOf3251<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3251<TuplifyUnion3251<Exclude<T, L>>, L>;

type DeepPartial3251<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3251<T[P]> }
  : T;

type Paths3251<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3251<K, Paths3251<T[K], Prev3251[D]>> : never }[keyof T]
  : never;

type Prev3251 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3251<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3251 {
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

type ConfigPaths3251 = Paths3251<NestedConfig3251>;

interface HeavyProps3251 {
  config: DeepPartial3251<NestedConfig3251>;
  path?: ConfigPaths3251;
}

const HeavyComponent3251 = memo(function HeavyComponent3251({ config }: HeavyProps3251) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3251) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3251 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3251: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3251.displayName = 'HeavyComponent3251';
export default HeavyComponent3251;
