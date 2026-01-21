'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3979<T> = T extends (infer U)[]
  ? DeepReadonlyArray3979<U>
  : T extends object
  ? DeepReadonlyObject3979<T>
  : T;

interface DeepReadonlyArray3979<T> extends ReadonlyArray<DeepReadonly3979<T>> {}

type DeepReadonlyObject3979<T> = {
  readonly [P in keyof T]: DeepReadonly3979<T[P]>;
};

type UnionToIntersection3979<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3979<T> = UnionToIntersection3979<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3979<T extends unknown[], V> = [...T, V];

type TuplifyUnion3979<T, L = LastOf3979<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3979<TuplifyUnion3979<Exclude<T, L>>, L>;

type DeepPartial3979<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3979<T[P]> }
  : T;

type Paths3979<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3979<K, Paths3979<T[K], Prev3979[D]>> : never }[keyof T]
  : never;

type Prev3979 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3979<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3979 {
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

type ConfigPaths3979 = Paths3979<NestedConfig3979>;

interface HeavyProps3979 {
  config: DeepPartial3979<NestedConfig3979>;
  path?: ConfigPaths3979;
}

const HeavyComponent3979 = memo(function HeavyComponent3979({ config }: HeavyProps3979) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3979) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3979 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3979: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3979.displayName = 'HeavyComponent3979';
export default HeavyComponent3979;
