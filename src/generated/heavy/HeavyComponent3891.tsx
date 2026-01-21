'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3891<T> = T extends (infer U)[]
  ? DeepReadonlyArray3891<U>
  : T extends object
  ? DeepReadonlyObject3891<T>
  : T;

interface DeepReadonlyArray3891<T> extends ReadonlyArray<DeepReadonly3891<T>> {}

type DeepReadonlyObject3891<T> = {
  readonly [P in keyof T]: DeepReadonly3891<T[P]>;
};

type UnionToIntersection3891<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3891<T> = UnionToIntersection3891<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3891<T extends unknown[], V> = [...T, V];

type TuplifyUnion3891<T, L = LastOf3891<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3891<TuplifyUnion3891<Exclude<T, L>>, L>;

type DeepPartial3891<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3891<T[P]> }
  : T;

type Paths3891<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3891<K, Paths3891<T[K], Prev3891[D]>> : never }[keyof T]
  : never;

type Prev3891 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3891<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3891 {
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

type ConfigPaths3891 = Paths3891<NestedConfig3891>;

interface HeavyProps3891 {
  config: DeepPartial3891<NestedConfig3891>;
  path?: ConfigPaths3891;
}

const HeavyComponent3891 = memo(function HeavyComponent3891({ config }: HeavyProps3891) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3891) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3891 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3891: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3891.displayName = 'HeavyComponent3891';
export default HeavyComponent3891;
