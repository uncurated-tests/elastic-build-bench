'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3149<T> = T extends (infer U)[]
  ? DeepReadonlyArray3149<U>
  : T extends object
  ? DeepReadonlyObject3149<T>
  : T;

interface DeepReadonlyArray3149<T> extends ReadonlyArray<DeepReadonly3149<T>> {}

type DeepReadonlyObject3149<T> = {
  readonly [P in keyof T]: DeepReadonly3149<T[P]>;
};

type UnionToIntersection3149<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3149<T> = UnionToIntersection3149<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3149<T extends unknown[], V> = [...T, V];

type TuplifyUnion3149<T, L = LastOf3149<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3149<TuplifyUnion3149<Exclude<T, L>>, L>;

type DeepPartial3149<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3149<T[P]> }
  : T;

type Paths3149<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3149<K, Paths3149<T[K], Prev3149[D]>> : never }[keyof T]
  : never;

type Prev3149 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3149<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3149 {
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

type ConfigPaths3149 = Paths3149<NestedConfig3149>;

interface HeavyProps3149 {
  config: DeepPartial3149<NestedConfig3149>;
  path?: ConfigPaths3149;
}

const HeavyComponent3149 = memo(function HeavyComponent3149({ config }: HeavyProps3149) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3149) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3149 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3149: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3149.displayName = 'HeavyComponent3149';
export default HeavyComponent3149;
