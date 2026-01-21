'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9630<T> = T extends (infer U)[]
  ? DeepReadonlyArray9630<U>
  : T extends object
  ? DeepReadonlyObject9630<T>
  : T;

interface DeepReadonlyArray9630<T> extends ReadonlyArray<DeepReadonly9630<T>> {}

type DeepReadonlyObject9630<T> = {
  readonly [P in keyof T]: DeepReadonly9630<T[P]>;
};

type UnionToIntersection9630<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9630<T> = UnionToIntersection9630<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9630<T extends unknown[], V> = [...T, V];

type TuplifyUnion9630<T, L = LastOf9630<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9630<TuplifyUnion9630<Exclude<T, L>>, L>;

type DeepPartial9630<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9630<T[P]> }
  : T;

type Paths9630<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9630<K, Paths9630<T[K], Prev9630[D]>> : never }[keyof T]
  : never;

type Prev9630 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9630<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9630 {
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

type ConfigPaths9630 = Paths9630<NestedConfig9630>;

interface HeavyProps9630 {
  config: DeepPartial9630<NestedConfig9630>;
  path?: ConfigPaths9630;
}

const HeavyComponent9630 = memo(function HeavyComponent9630({ config }: HeavyProps9630) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9630) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9630 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9630: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9630.displayName = 'HeavyComponent9630';
export default HeavyComponent9630;
