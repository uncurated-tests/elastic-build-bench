'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2186<T> = T extends (infer U)[]
  ? DeepReadonlyArray2186<U>
  : T extends object
  ? DeepReadonlyObject2186<T>
  : T;

interface DeepReadonlyArray2186<T> extends ReadonlyArray<DeepReadonly2186<T>> {}

type DeepReadonlyObject2186<T> = {
  readonly [P in keyof T]: DeepReadonly2186<T[P]>;
};

type UnionToIntersection2186<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2186<T> = UnionToIntersection2186<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2186<T extends unknown[], V> = [...T, V];

type TuplifyUnion2186<T, L = LastOf2186<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2186<TuplifyUnion2186<Exclude<T, L>>, L>;

type DeepPartial2186<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2186<T[P]> }
  : T;

type Paths2186<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2186<K, Paths2186<T[K], Prev2186[D]>> : never }[keyof T]
  : never;

type Prev2186 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2186<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2186 {
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

type ConfigPaths2186 = Paths2186<NestedConfig2186>;

interface HeavyProps2186 {
  config: DeepPartial2186<NestedConfig2186>;
  path?: ConfigPaths2186;
}

const HeavyComponent2186 = memo(function HeavyComponent2186({ config }: HeavyProps2186) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2186) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2186 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2186: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2186.displayName = 'HeavyComponent2186';
export default HeavyComponent2186;
