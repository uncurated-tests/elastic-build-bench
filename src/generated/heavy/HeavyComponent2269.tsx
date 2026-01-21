'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2269<T> = T extends (infer U)[]
  ? DeepReadonlyArray2269<U>
  : T extends object
  ? DeepReadonlyObject2269<T>
  : T;

interface DeepReadonlyArray2269<T> extends ReadonlyArray<DeepReadonly2269<T>> {}

type DeepReadonlyObject2269<T> = {
  readonly [P in keyof T]: DeepReadonly2269<T[P]>;
};

type UnionToIntersection2269<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2269<T> = UnionToIntersection2269<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2269<T extends unknown[], V> = [...T, V];

type TuplifyUnion2269<T, L = LastOf2269<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2269<TuplifyUnion2269<Exclude<T, L>>, L>;

type DeepPartial2269<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2269<T[P]> }
  : T;

type Paths2269<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2269<K, Paths2269<T[K], Prev2269[D]>> : never }[keyof T]
  : never;

type Prev2269 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2269<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2269 {
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

type ConfigPaths2269 = Paths2269<NestedConfig2269>;

interface HeavyProps2269 {
  config: DeepPartial2269<NestedConfig2269>;
  path?: ConfigPaths2269;
}

const HeavyComponent2269 = memo(function HeavyComponent2269({ config }: HeavyProps2269) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2269) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2269 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2269: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2269.displayName = 'HeavyComponent2269';
export default HeavyComponent2269;
