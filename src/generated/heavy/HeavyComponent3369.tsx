'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3369<T> = T extends (infer U)[]
  ? DeepReadonlyArray3369<U>
  : T extends object
  ? DeepReadonlyObject3369<T>
  : T;

interface DeepReadonlyArray3369<T> extends ReadonlyArray<DeepReadonly3369<T>> {}

type DeepReadonlyObject3369<T> = {
  readonly [P in keyof T]: DeepReadonly3369<T[P]>;
};

type UnionToIntersection3369<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3369<T> = UnionToIntersection3369<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3369<T extends unknown[], V> = [...T, V];

type TuplifyUnion3369<T, L = LastOf3369<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3369<TuplifyUnion3369<Exclude<T, L>>, L>;

type DeepPartial3369<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3369<T[P]> }
  : T;

type Paths3369<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3369<K, Paths3369<T[K], Prev3369[D]>> : never }[keyof T]
  : never;

type Prev3369 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3369<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3369 {
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

type ConfigPaths3369 = Paths3369<NestedConfig3369>;

interface HeavyProps3369 {
  config: DeepPartial3369<NestedConfig3369>;
  path?: ConfigPaths3369;
}

const HeavyComponent3369 = memo(function HeavyComponent3369({ config }: HeavyProps3369) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3369) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3369 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3369: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3369.displayName = 'HeavyComponent3369';
export default HeavyComponent3369;
