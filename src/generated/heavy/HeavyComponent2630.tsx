'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2630<T> = T extends (infer U)[]
  ? DeepReadonlyArray2630<U>
  : T extends object
  ? DeepReadonlyObject2630<T>
  : T;

interface DeepReadonlyArray2630<T> extends ReadonlyArray<DeepReadonly2630<T>> {}

type DeepReadonlyObject2630<T> = {
  readonly [P in keyof T]: DeepReadonly2630<T[P]>;
};

type UnionToIntersection2630<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2630<T> = UnionToIntersection2630<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2630<T extends unknown[], V> = [...T, V];

type TuplifyUnion2630<T, L = LastOf2630<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2630<TuplifyUnion2630<Exclude<T, L>>, L>;

type DeepPartial2630<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2630<T[P]> }
  : T;

type Paths2630<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2630<K, Paths2630<T[K], Prev2630[D]>> : never }[keyof T]
  : never;

type Prev2630 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2630<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2630 {
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

type ConfigPaths2630 = Paths2630<NestedConfig2630>;

interface HeavyProps2630 {
  config: DeepPartial2630<NestedConfig2630>;
  path?: ConfigPaths2630;
}

const HeavyComponent2630 = memo(function HeavyComponent2630({ config }: HeavyProps2630) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2630) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2630 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2630: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2630.displayName = 'HeavyComponent2630';
export default HeavyComponent2630;
