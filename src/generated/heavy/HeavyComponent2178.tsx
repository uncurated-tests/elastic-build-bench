'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2178<T> = T extends (infer U)[]
  ? DeepReadonlyArray2178<U>
  : T extends object
  ? DeepReadonlyObject2178<T>
  : T;

interface DeepReadonlyArray2178<T> extends ReadonlyArray<DeepReadonly2178<T>> {}

type DeepReadonlyObject2178<T> = {
  readonly [P in keyof T]: DeepReadonly2178<T[P]>;
};

type UnionToIntersection2178<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2178<T> = UnionToIntersection2178<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2178<T extends unknown[], V> = [...T, V];

type TuplifyUnion2178<T, L = LastOf2178<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2178<TuplifyUnion2178<Exclude<T, L>>, L>;

type DeepPartial2178<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2178<T[P]> }
  : T;

type Paths2178<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2178<K, Paths2178<T[K], Prev2178[D]>> : never }[keyof T]
  : never;

type Prev2178 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2178<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2178 {
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

type ConfigPaths2178 = Paths2178<NestedConfig2178>;

interface HeavyProps2178 {
  config: DeepPartial2178<NestedConfig2178>;
  path?: ConfigPaths2178;
}

const HeavyComponent2178 = memo(function HeavyComponent2178({ config }: HeavyProps2178) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2178) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2178 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2178: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2178.displayName = 'HeavyComponent2178';
export default HeavyComponent2178;
