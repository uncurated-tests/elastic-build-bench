'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2876<T> = T extends (infer U)[]
  ? DeepReadonlyArray2876<U>
  : T extends object
  ? DeepReadonlyObject2876<T>
  : T;

interface DeepReadonlyArray2876<T> extends ReadonlyArray<DeepReadonly2876<T>> {}

type DeepReadonlyObject2876<T> = {
  readonly [P in keyof T]: DeepReadonly2876<T[P]>;
};

type UnionToIntersection2876<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2876<T> = UnionToIntersection2876<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2876<T extends unknown[], V> = [...T, V];

type TuplifyUnion2876<T, L = LastOf2876<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2876<TuplifyUnion2876<Exclude<T, L>>, L>;

type DeepPartial2876<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2876<T[P]> }
  : T;

type Paths2876<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2876<K, Paths2876<T[K], Prev2876[D]>> : never }[keyof T]
  : never;

type Prev2876 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2876<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2876 {
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

type ConfigPaths2876 = Paths2876<NestedConfig2876>;

interface HeavyProps2876 {
  config: DeepPartial2876<NestedConfig2876>;
  path?: ConfigPaths2876;
}

const HeavyComponent2876 = memo(function HeavyComponent2876({ config }: HeavyProps2876) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2876) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2876 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2876: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2876.displayName = 'HeavyComponent2876';
export default HeavyComponent2876;
