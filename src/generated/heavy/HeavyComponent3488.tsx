'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3488<T> = T extends (infer U)[]
  ? DeepReadonlyArray3488<U>
  : T extends object
  ? DeepReadonlyObject3488<T>
  : T;

interface DeepReadonlyArray3488<T> extends ReadonlyArray<DeepReadonly3488<T>> {}

type DeepReadonlyObject3488<T> = {
  readonly [P in keyof T]: DeepReadonly3488<T[P]>;
};

type UnionToIntersection3488<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3488<T> = UnionToIntersection3488<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3488<T extends unknown[], V> = [...T, V];

type TuplifyUnion3488<T, L = LastOf3488<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3488<TuplifyUnion3488<Exclude<T, L>>, L>;

type DeepPartial3488<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3488<T[P]> }
  : T;

type Paths3488<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3488<K, Paths3488<T[K], Prev3488[D]>> : never }[keyof T]
  : never;

type Prev3488 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3488<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3488 {
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

type ConfigPaths3488 = Paths3488<NestedConfig3488>;

interface HeavyProps3488 {
  config: DeepPartial3488<NestedConfig3488>;
  path?: ConfigPaths3488;
}

const HeavyComponent3488 = memo(function HeavyComponent3488({ config }: HeavyProps3488) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3488) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3488 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3488: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3488.displayName = 'HeavyComponent3488';
export default HeavyComponent3488;
