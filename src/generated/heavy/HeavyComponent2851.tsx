'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2851<T> = T extends (infer U)[]
  ? DeepReadonlyArray2851<U>
  : T extends object
  ? DeepReadonlyObject2851<T>
  : T;

interface DeepReadonlyArray2851<T> extends ReadonlyArray<DeepReadonly2851<T>> {}

type DeepReadonlyObject2851<T> = {
  readonly [P in keyof T]: DeepReadonly2851<T[P]>;
};

type UnionToIntersection2851<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2851<T> = UnionToIntersection2851<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2851<T extends unknown[], V> = [...T, V];

type TuplifyUnion2851<T, L = LastOf2851<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2851<TuplifyUnion2851<Exclude<T, L>>, L>;

type DeepPartial2851<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2851<T[P]> }
  : T;

type Paths2851<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2851<K, Paths2851<T[K], Prev2851[D]>> : never }[keyof T]
  : never;

type Prev2851 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2851<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2851 {
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

type ConfigPaths2851 = Paths2851<NestedConfig2851>;

interface HeavyProps2851 {
  config: DeepPartial2851<NestedConfig2851>;
  path?: ConfigPaths2851;
}

const HeavyComponent2851 = memo(function HeavyComponent2851({ config }: HeavyProps2851) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2851) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2851 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2851: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2851.displayName = 'HeavyComponent2851';
export default HeavyComponent2851;
