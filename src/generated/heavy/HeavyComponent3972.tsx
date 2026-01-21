'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3972<T> = T extends (infer U)[]
  ? DeepReadonlyArray3972<U>
  : T extends object
  ? DeepReadonlyObject3972<T>
  : T;

interface DeepReadonlyArray3972<T> extends ReadonlyArray<DeepReadonly3972<T>> {}

type DeepReadonlyObject3972<T> = {
  readonly [P in keyof T]: DeepReadonly3972<T[P]>;
};

type UnionToIntersection3972<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3972<T> = UnionToIntersection3972<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3972<T extends unknown[], V> = [...T, V];

type TuplifyUnion3972<T, L = LastOf3972<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3972<TuplifyUnion3972<Exclude<T, L>>, L>;

type DeepPartial3972<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3972<T[P]> }
  : T;

type Paths3972<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3972<K, Paths3972<T[K], Prev3972[D]>> : never }[keyof T]
  : never;

type Prev3972 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3972<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3972 {
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

type ConfigPaths3972 = Paths3972<NestedConfig3972>;

interface HeavyProps3972 {
  config: DeepPartial3972<NestedConfig3972>;
  path?: ConfigPaths3972;
}

const HeavyComponent3972 = memo(function HeavyComponent3972({ config }: HeavyProps3972) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3972) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3972 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3972: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3972.displayName = 'HeavyComponent3972';
export default HeavyComponent3972;
