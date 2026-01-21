'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3088<T> = T extends (infer U)[]
  ? DeepReadonlyArray3088<U>
  : T extends object
  ? DeepReadonlyObject3088<T>
  : T;

interface DeepReadonlyArray3088<T> extends ReadonlyArray<DeepReadonly3088<T>> {}

type DeepReadonlyObject3088<T> = {
  readonly [P in keyof T]: DeepReadonly3088<T[P]>;
};

type UnionToIntersection3088<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3088<T> = UnionToIntersection3088<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3088<T extends unknown[], V> = [...T, V];

type TuplifyUnion3088<T, L = LastOf3088<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3088<TuplifyUnion3088<Exclude<T, L>>, L>;

type DeepPartial3088<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3088<T[P]> }
  : T;

type Paths3088<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3088<K, Paths3088<T[K], Prev3088[D]>> : never }[keyof T]
  : never;

type Prev3088 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3088<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3088 {
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

type ConfigPaths3088 = Paths3088<NestedConfig3088>;

interface HeavyProps3088 {
  config: DeepPartial3088<NestedConfig3088>;
  path?: ConfigPaths3088;
}

const HeavyComponent3088 = memo(function HeavyComponent3088({ config }: HeavyProps3088) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3088) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3088 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3088: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3088.displayName = 'HeavyComponent3088';
export default HeavyComponent3088;
