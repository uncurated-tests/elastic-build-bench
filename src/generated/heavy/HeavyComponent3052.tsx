'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3052<T> = T extends (infer U)[]
  ? DeepReadonlyArray3052<U>
  : T extends object
  ? DeepReadonlyObject3052<T>
  : T;

interface DeepReadonlyArray3052<T> extends ReadonlyArray<DeepReadonly3052<T>> {}

type DeepReadonlyObject3052<T> = {
  readonly [P in keyof T]: DeepReadonly3052<T[P]>;
};

type UnionToIntersection3052<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3052<T> = UnionToIntersection3052<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3052<T extends unknown[], V> = [...T, V];

type TuplifyUnion3052<T, L = LastOf3052<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3052<TuplifyUnion3052<Exclude<T, L>>, L>;

type DeepPartial3052<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3052<T[P]> }
  : T;

type Paths3052<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3052<K, Paths3052<T[K], Prev3052[D]>> : never }[keyof T]
  : never;

type Prev3052 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3052<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3052 {
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

type ConfigPaths3052 = Paths3052<NestedConfig3052>;

interface HeavyProps3052 {
  config: DeepPartial3052<NestedConfig3052>;
  path?: ConfigPaths3052;
}

const HeavyComponent3052 = memo(function HeavyComponent3052({ config }: HeavyProps3052) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3052) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3052 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3052: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3052.displayName = 'HeavyComponent3052';
export default HeavyComponent3052;
