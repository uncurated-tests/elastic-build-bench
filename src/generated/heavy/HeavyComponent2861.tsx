'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2861<T> = T extends (infer U)[]
  ? DeepReadonlyArray2861<U>
  : T extends object
  ? DeepReadonlyObject2861<T>
  : T;

interface DeepReadonlyArray2861<T> extends ReadonlyArray<DeepReadonly2861<T>> {}

type DeepReadonlyObject2861<T> = {
  readonly [P in keyof T]: DeepReadonly2861<T[P]>;
};

type UnionToIntersection2861<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2861<T> = UnionToIntersection2861<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2861<T extends unknown[], V> = [...T, V];

type TuplifyUnion2861<T, L = LastOf2861<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2861<TuplifyUnion2861<Exclude<T, L>>, L>;

type DeepPartial2861<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2861<T[P]> }
  : T;

type Paths2861<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2861<K, Paths2861<T[K], Prev2861[D]>> : never }[keyof T]
  : never;

type Prev2861 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2861<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2861 {
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

type ConfigPaths2861 = Paths2861<NestedConfig2861>;

interface HeavyProps2861 {
  config: DeepPartial2861<NestedConfig2861>;
  path?: ConfigPaths2861;
}

const HeavyComponent2861 = memo(function HeavyComponent2861({ config }: HeavyProps2861) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2861) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2861 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2861: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2861.displayName = 'HeavyComponent2861';
export default HeavyComponent2861;
