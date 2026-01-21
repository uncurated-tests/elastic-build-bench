'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3517<T> = T extends (infer U)[]
  ? DeepReadonlyArray3517<U>
  : T extends object
  ? DeepReadonlyObject3517<T>
  : T;

interface DeepReadonlyArray3517<T> extends ReadonlyArray<DeepReadonly3517<T>> {}

type DeepReadonlyObject3517<T> = {
  readonly [P in keyof T]: DeepReadonly3517<T[P]>;
};

type UnionToIntersection3517<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3517<T> = UnionToIntersection3517<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3517<T extends unknown[], V> = [...T, V];

type TuplifyUnion3517<T, L = LastOf3517<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3517<TuplifyUnion3517<Exclude<T, L>>, L>;

type DeepPartial3517<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3517<T[P]> }
  : T;

type Paths3517<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3517<K, Paths3517<T[K], Prev3517[D]>> : never }[keyof T]
  : never;

type Prev3517 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3517<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3517 {
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

type ConfigPaths3517 = Paths3517<NestedConfig3517>;

interface HeavyProps3517 {
  config: DeepPartial3517<NestedConfig3517>;
  path?: ConfigPaths3517;
}

const HeavyComponent3517 = memo(function HeavyComponent3517({ config }: HeavyProps3517) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3517) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3517 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3517: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3517.displayName = 'HeavyComponent3517';
export default HeavyComponent3517;
