'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3080<T> = T extends (infer U)[]
  ? DeepReadonlyArray3080<U>
  : T extends object
  ? DeepReadonlyObject3080<T>
  : T;

interface DeepReadonlyArray3080<T> extends ReadonlyArray<DeepReadonly3080<T>> {}

type DeepReadonlyObject3080<T> = {
  readonly [P in keyof T]: DeepReadonly3080<T[P]>;
};

type UnionToIntersection3080<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3080<T> = UnionToIntersection3080<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3080<T extends unknown[], V> = [...T, V];

type TuplifyUnion3080<T, L = LastOf3080<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3080<TuplifyUnion3080<Exclude<T, L>>, L>;

type DeepPartial3080<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3080<T[P]> }
  : T;

type Paths3080<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3080<K, Paths3080<T[K], Prev3080[D]>> : never }[keyof T]
  : never;

type Prev3080 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3080<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3080 {
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

type ConfigPaths3080 = Paths3080<NestedConfig3080>;

interface HeavyProps3080 {
  config: DeepPartial3080<NestedConfig3080>;
  path?: ConfigPaths3080;
}

const HeavyComponent3080 = memo(function HeavyComponent3080({ config }: HeavyProps3080) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3080) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3080 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3080: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3080.displayName = 'HeavyComponent3080';
export default HeavyComponent3080;
