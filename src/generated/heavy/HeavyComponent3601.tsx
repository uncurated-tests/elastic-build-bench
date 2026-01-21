'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3601<T> = T extends (infer U)[]
  ? DeepReadonlyArray3601<U>
  : T extends object
  ? DeepReadonlyObject3601<T>
  : T;

interface DeepReadonlyArray3601<T> extends ReadonlyArray<DeepReadonly3601<T>> {}

type DeepReadonlyObject3601<T> = {
  readonly [P in keyof T]: DeepReadonly3601<T[P]>;
};

type UnionToIntersection3601<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3601<T> = UnionToIntersection3601<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3601<T extends unknown[], V> = [...T, V];

type TuplifyUnion3601<T, L = LastOf3601<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3601<TuplifyUnion3601<Exclude<T, L>>, L>;

type DeepPartial3601<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3601<T[P]> }
  : T;

type Paths3601<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3601<K, Paths3601<T[K], Prev3601[D]>> : never }[keyof T]
  : never;

type Prev3601 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3601<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3601 {
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

type ConfigPaths3601 = Paths3601<NestedConfig3601>;

interface HeavyProps3601 {
  config: DeepPartial3601<NestedConfig3601>;
  path?: ConfigPaths3601;
}

const HeavyComponent3601 = memo(function HeavyComponent3601({ config }: HeavyProps3601) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3601) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3601 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3601: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3601.displayName = 'HeavyComponent3601';
export default HeavyComponent3601;
