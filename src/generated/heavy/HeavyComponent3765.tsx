'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3765<T> = T extends (infer U)[]
  ? DeepReadonlyArray3765<U>
  : T extends object
  ? DeepReadonlyObject3765<T>
  : T;

interface DeepReadonlyArray3765<T> extends ReadonlyArray<DeepReadonly3765<T>> {}

type DeepReadonlyObject3765<T> = {
  readonly [P in keyof T]: DeepReadonly3765<T[P]>;
};

type UnionToIntersection3765<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3765<T> = UnionToIntersection3765<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3765<T extends unknown[], V> = [...T, V];

type TuplifyUnion3765<T, L = LastOf3765<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3765<TuplifyUnion3765<Exclude<T, L>>, L>;

type DeepPartial3765<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3765<T[P]> }
  : T;

type Paths3765<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3765<K, Paths3765<T[K], Prev3765[D]>> : never }[keyof T]
  : never;

type Prev3765 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3765<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3765 {
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

type ConfigPaths3765 = Paths3765<NestedConfig3765>;

interface HeavyProps3765 {
  config: DeepPartial3765<NestedConfig3765>;
  path?: ConfigPaths3765;
}

const HeavyComponent3765 = memo(function HeavyComponent3765({ config }: HeavyProps3765) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3765) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3765 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3765: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3765.displayName = 'HeavyComponent3765';
export default HeavyComponent3765;
