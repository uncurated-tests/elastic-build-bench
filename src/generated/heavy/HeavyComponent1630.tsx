'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1630<T> = T extends (infer U)[]
  ? DeepReadonlyArray1630<U>
  : T extends object
  ? DeepReadonlyObject1630<T>
  : T;

interface DeepReadonlyArray1630<T> extends ReadonlyArray<DeepReadonly1630<T>> {}

type DeepReadonlyObject1630<T> = {
  readonly [P in keyof T]: DeepReadonly1630<T[P]>;
};

type UnionToIntersection1630<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1630<T> = UnionToIntersection1630<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1630<T extends unknown[], V> = [...T, V];

type TuplifyUnion1630<T, L = LastOf1630<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1630<TuplifyUnion1630<Exclude<T, L>>, L>;

type DeepPartial1630<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1630<T[P]> }
  : T;

type Paths1630<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1630<K, Paths1630<T[K], Prev1630[D]>> : never }[keyof T]
  : never;

type Prev1630 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1630<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1630 {
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

type ConfigPaths1630 = Paths1630<NestedConfig1630>;

interface HeavyProps1630 {
  config: DeepPartial1630<NestedConfig1630>;
  path?: ConfigPaths1630;
}

const HeavyComponent1630 = memo(function HeavyComponent1630({ config }: HeavyProps1630) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1630) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1630 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1630: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1630.displayName = 'HeavyComponent1630';
export default HeavyComponent1630;
