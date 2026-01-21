'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3425<T> = T extends (infer U)[]
  ? DeepReadonlyArray3425<U>
  : T extends object
  ? DeepReadonlyObject3425<T>
  : T;

interface DeepReadonlyArray3425<T> extends ReadonlyArray<DeepReadonly3425<T>> {}

type DeepReadonlyObject3425<T> = {
  readonly [P in keyof T]: DeepReadonly3425<T[P]>;
};

type UnionToIntersection3425<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3425<T> = UnionToIntersection3425<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3425<T extends unknown[], V> = [...T, V];

type TuplifyUnion3425<T, L = LastOf3425<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3425<TuplifyUnion3425<Exclude<T, L>>, L>;

type DeepPartial3425<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3425<T[P]> }
  : T;

type Paths3425<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3425<K, Paths3425<T[K], Prev3425[D]>> : never }[keyof T]
  : never;

type Prev3425 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3425<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3425 {
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

type ConfigPaths3425 = Paths3425<NestedConfig3425>;

interface HeavyProps3425 {
  config: DeepPartial3425<NestedConfig3425>;
  path?: ConfigPaths3425;
}

const HeavyComponent3425 = memo(function HeavyComponent3425({ config }: HeavyProps3425) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3425) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3425 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3425: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3425.displayName = 'HeavyComponent3425';
export default HeavyComponent3425;
