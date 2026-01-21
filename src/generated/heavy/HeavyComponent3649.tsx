'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3649<T> = T extends (infer U)[]
  ? DeepReadonlyArray3649<U>
  : T extends object
  ? DeepReadonlyObject3649<T>
  : T;

interface DeepReadonlyArray3649<T> extends ReadonlyArray<DeepReadonly3649<T>> {}

type DeepReadonlyObject3649<T> = {
  readonly [P in keyof T]: DeepReadonly3649<T[P]>;
};

type UnionToIntersection3649<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3649<T> = UnionToIntersection3649<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3649<T extends unknown[], V> = [...T, V];

type TuplifyUnion3649<T, L = LastOf3649<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3649<TuplifyUnion3649<Exclude<T, L>>, L>;

type DeepPartial3649<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3649<T[P]> }
  : T;

type Paths3649<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3649<K, Paths3649<T[K], Prev3649[D]>> : never }[keyof T]
  : never;

type Prev3649 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3649<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3649 {
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

type ConfigPaths3649 = Paths3649<NestedConfig3649>;

interface HeavyProps3649 {
  config: DeepPartial3649<NestedConfig3649>;
  path?: ConfigPaths3649;
}

const HeavyComponent3649 = memo(function HeavyComponent3649({ config }: HeavyProps3649) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3649) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3649 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3649: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3649.displayName = 'HeavyComponent3649';
export default HeavyComponent3649;
