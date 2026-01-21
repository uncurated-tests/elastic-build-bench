'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3076<T> = T extends (infer U)[]
  ? DeepReadonlyArray3076<U>
  : T extends object
  ? DeepReadonlyObject3076<T>
  : T;

interface DeepReadonlyArray3076<T> extends ReadonlyArray<DeepReadonly3076<T>> {}

type DeepReadonlyObject3076<T> = {
  readonly [P in keyof T]: DeepReadonly3076<T[P]>;
};

type UnionToIntersection3076<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3076<T> = UnionToIntersection3076<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3076<T extends unknown[], V> = [...T, V];

type TuplifyUnion3076<T, L = LastOf3076<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3076<TuplifyUnion3076<Exclude<T, L>>, L>;

type DeepPartial3076<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3076<T[P]> }
  : T;

type Paths3076<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3076<K, Paths3076<T[K], Prev3076[D]>> : never }[keyof T]
  : never;

type Prev3076 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3076<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3076 {
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

type ConfigPaths3076 = Paths3076<NestedConfig3076>;

interface HeavyProps3076 {
  config: DeepPartial3076<NestedConfig3076>;
  path?: ConfigPaths3076;
}

const HeavyComponent3076 = memo(function HeavyComponent3076({ config }: HeavyProps3076) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3076) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3076 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3076: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3076.displayName = 'HeavyComponent3076';
export default HeavyComponent3076;
