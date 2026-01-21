'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3378<T> = T extends (infer U)[]
  ? DeepReadonlyArray3378<U>
  : T extends object
  ? DeepReadonlyObject3378<T>
  : T;

interface DeepReadonlyArray3378<T> extends ReadonlyArray<DeepReadonly3378<T>> {}

type DeepReadonlyObject3378<T> = {
  readonly [P in keyof T]: DeepReadonly3378<T[P]>;
};

type UnionToIntersection3378<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3378<T> = UnionToIntersection3378<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3378<T extends unknown[], V> = [...T, V];

type TuplifyUnion3378<T, L = LastOf3378<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3378<TuplifyUnion3378<Exclude<T, L>>, L>;

type DeepPartial3378<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3378<T[P]> }
  : T;

type Paths3378<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3378<K, Paths3378<T[K], Prev3378[D]>> : never }[keyof T]
  : never;

type Prev3378 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3378<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3378 {
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

type ConfigPaths3378 = Paths3378<NestedConfig3378>;

interface HeavyProps3378 {
  config: DeepPartial3378<NestedConfig3378>;
  path?: ConfigPaths3378;
}

const HeavyComponent3378 = memo(function HeavyComponent3378({ config }: HeavyProps3378) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3378) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3378 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3378: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3378.displayName = 'HeavyComponent3378';
export default HeavyComponent3378;
