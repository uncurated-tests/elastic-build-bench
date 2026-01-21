'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3300<T> = T extends (infer U)[]
  ? DeepReadonlyArray3300<U>
  : T extends object
  ? DeepReadonlyObject3300<T>
  : T;

interface DeepReadonlyArray3300<T> extends ReadonlyArray<DeepReadonly3300<T>> {}

type DeepReadonlyObject3300<T> = {
  readonly [P in keyof T]: DeepReadonly3300<T[P]>;
};

type UnionToIntersection3300<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3300<T> = UnionToIntersection3300<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3300<T extends unknown[], V> = [...T, V];

type TuplifyUnion3300<T, L = LastOf3300<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3300<TuplifyUnion3300<Exclude<T, L>>, L>;

type DeepPartial3300<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3300<T[P]> }
  : T;

type Paths3300<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3300<K, Paths3300<T[K], Prev3300[D]>> : never }[keyof T]
  : never;

type Prev3300 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3300<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3300 {
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

type ConfigPaths3300 = Paths3300<NestedConfig3300>;

interface HeavyProps3300 {
  config: DeepPartial3300<NestedConfig3300>;
  path?: ConfigPaths3300;
}

const HeavyComponent3300 = memo(function HeavyComponent3300({ config }: HeavyProps3300) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3300) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3300 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3300: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3300.displayName = 'HeavyComponent3300';
export default HeavyComponent3300;
