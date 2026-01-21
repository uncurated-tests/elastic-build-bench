'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2620<T> = T extends (infer U)[]
  ? DeepReadonlyArray2620<U>
  : T extends object
  ? DeepReadonlyObject2620<T>
  : T;

interface DeepReadonlyArray2620<T> extends ReadonlyArray<DeepReadonly2620<T>> {}

type DeepReadonlyObject2620<T> = {
  readonly [P in keyof T]: DeepReadonly2620<T[P]>;
};

type UnionToIntersection2620<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2620<T> = UnionToIntersection2620<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2620<T extends unknown[], V> = [...T, V];

type TuplifyUnion2620<T, L = LastOf2620<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2620<TuplifyUnion2620<Exclude<T, L>>, L>;

type DeepPartial2620<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2620<T[P]> }
  : T;

type Paths2620<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2620<K, Paths2620<T[K], Prev2620[D]>> : never }[keyof T]
  : never;

type Prev2620 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2620<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2620 {
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

type ConfigPaths2620 = Paths2620<NestedConfig2620>;

interface HeavyProps2620 {
  config: DeepPartial2620<NestedConfig2620>;
  path?: ConfigPaths2620;
}

const HeavyComponent2620 = memo(function HeavyComponent2620({ config }: HeavyProps2620) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2620) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2620 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2620: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2620.displayName = 'HeavyComponent2620';
export default HeavyComponent2620;
