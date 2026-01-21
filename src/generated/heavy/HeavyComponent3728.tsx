'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3728<T> = T extends (infer U)[]
  ? DeepReadonlyArray3728<U>
  : T extends object
  ? DeepReadonlyObject3728<T>
  : T;

interface DeepReadonlyArray3728<T> extends ReadonlyArray<DeepReadonly3728<T>> {}

type DeepReadonlyObject3728<T> = {
  readonly [P in keyof T]: DeepReadonly3728<T[P]>;
};

type UnionToIntersection3728<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3728<T> = UnionToIntersection3728<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3728<T extends unknown[], V> = [...T, V];

type TuplifyUnion3728<T, L = LastOf3728<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3728<TuplifyUnion3728<Exclude<T, L>>, L>;

type DeepPartial3728<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3728<T[P]> }
  : T;

type Paths3728<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3728<K, Paths3728<T[K], Prev3728[D]>> : never }[keyof T]
  : never;

type Prev3728 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3728<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3728 {
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

type ConfigPaths3728 = Paths3728<NestedConfig3728>;

interface HeavyProps3728 {
  config: DeepPartial3728<NestedConfig3728>;
  path?: ConfigPaths3728;
}

const HeavyComponent3728 = memo(function HeavyComponent3728({ config }: HeavyProps3728) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3728) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3728 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3728: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3728.displayName = 'HeavyComponent3728';
export default HeavyComponent3728;
