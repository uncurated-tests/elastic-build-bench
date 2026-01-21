'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3478<T> = T extends (infer U)[]
  ? DeepReadonlyArray3478<U>
  : T extends object
  ? DeepReadonlyObject3478<T>
  : T;

interface DeepReadonlyArray3478<T> extends ReadonlyArray<DeepReadonly3478<T>> {}

type DeepReadonlyObject3478<T> = {
  readonly [P in keyof T]: DeepReadonly3478<T[P]>;
};

type UnionToIntersection3478<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3478<T> = UnionToIntersection3478<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3478<T extends unknown[], V> = [...T, V];

type TuplifyUnion3478<T, L = LastOf3478<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3478<TuplifyUnion3478<Exclude<T, L>>, L>;

type DeepPartial3478<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3478<T[P]> }
  : T;

type Paths3478<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3478<K, Paths3478<T[K], Prev3478[D]>> : never }[keyof T]
  : never;

type Prev3478 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3478<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3478 {
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

type ConfigPaths3478 = Paths3478<NestedConfig3478>;

interface HeavyProps3478 {
  config: DeepPartial3478<NestedConfig3478>;
  path?: ConfigPaths3478;
}

const HeavyComponent3478 = memo(function HeavyComponent3478({ config }: HeavyProps3478) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3478) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3478 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3478: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3478.displayName = 'HeavyComponent3478';
export default HeavyComponent3478;
