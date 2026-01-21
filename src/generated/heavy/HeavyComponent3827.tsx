'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3827<T> = T extends (infer U)[]
  ? DeepReadonlyArray3827<U>
  : T extends object
  ? DeepReadonlyObject3827<T>
  : T;

interface DeepReadonlyArray3827<T> extends ReadonlyArray<DeepReadonly3827<T>> {}

type DeepReadonlyObject3827<T> = {
  readonly [P in keyof T]: DeepReadonly3827<T[P]>;
};

type UnionToIntersection3827<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3827<T> = UnionToIntersection3827<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3827<T extends unknown[], V> = [...T, V];

type TuplifyUnion3827<T, L = LastOf3827<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3827<TuplifyUnion3827<Exclude<T, L>>, L>;

type DeepPartial3827<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3827<T[P]> }
  : T;

type Paths3827<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3827<K, Paths3827<T[K], Prev3827[D]>> : never }[keyof T]
  : never;

type Prev3827 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3827<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3827 {
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

type ConfigPaths3827 = Paths3827<NestedConfig3827>;

interface HeavyProps3827 {
  config: DeepPartial3827<NestedConfig3827>;
  path?: ConfigPaths3827;
}

const HeavyComponent3827 = memo(function HeavyComponent3827({ config }: HeavyProps3827) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3827) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3827 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3827: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3827.displayName = 'HeavyComponent3827';
export default HeavyComponent3827;
