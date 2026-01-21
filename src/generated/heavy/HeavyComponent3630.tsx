'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3630<T> = T extends (infer U)[]
  ? DeepReadonlyArray3630<U>
  : T extends object
  ? DeepReadonlyObject3630<T>
  : T;

interface DeepReadonlyArray3630<T> extends ReadonlyArray<DeepReadonly3630<T>> {}

type DeepReadonlyObject3630<T> = {
  readonly [P in keyof T]: DeepReadonly3630<T[P]>;
};

type UnionToIntersection3630<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3630<T> = UnionToIntersection3630<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3630<T extends unknown[], V> = [...T, V];

type TuplifyUnion3630<T, L = LastOf3630<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3630<TuplifyUnion3630<Exclude<T, L>>, L>;

type DeepPartial3630<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3630<T[P]> }
  : T;

type Paths3630<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3630<K, Paths3630<T[K], Prev3630[D]>> : never }[keyof T]
  : never;

type Prev3630 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3630<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3630 {
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

type ConfigPaths3630 = Paths3630<NestedConfig3630>;

interface HeavyProps3630 {
  config: DeepPartial3630<NestedConfig3630>;
  path?: ConfigPaths3630;
}

const HeavyComponent3630 = memo(function HeavyComponent3630({ config }: HeavyProps3630) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3630) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3630 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3630: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3630.displayName = 'HeavyComponent3630';
export default HeavyComponent3630;
