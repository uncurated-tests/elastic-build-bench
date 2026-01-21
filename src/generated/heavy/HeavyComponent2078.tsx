'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2078<T> = T extends (infer U)[]
  ? DeepReadonlyArray2078<U>
  : T extends object
  ? DeepReadonlyObject2078<T>
  : T;

interface DeepReadonlyArray2078<T> extends ReadonlyArray<DeepReadonly2078<T>> {}

type DeepReadonlyObject2078<T> = {
  readonly [P in keyof T]: DeepReadonly2078<T[P]>;
};

type UnionToIntersection2078<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2078<T> = UnionToIntersection2078<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2078<T extends unknown[], V> = [...T, V];

type TuplifyUnion2078<T, L = LastOf2078<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2078<TuplifyUnion2078<Exclude<T, L>>, L>;

type DeepPartial2078<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2078<T[P]> }
  : T;

type Paths2078<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2078<K, Paths2078<T[K], Prev2078[D]>> : never }[keyof T]
  : never;

type Prev2078 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2078<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2078 {
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

type ConfigPaths2078 = Paths2078<NestedConfig2078>;

interface HeavyProps2078 {
  config: DeepPartial2078<NestedConfig2078>;
  path?: ConfigPaths2078;
}

const HeavyComponent2078 = memo(function HeavyComponent2078({ config }: HeavyProps2078) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2078) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2078 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2078: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2078.displayName = 'HeavyComponent2078';
export default HeavyComponent2078;
