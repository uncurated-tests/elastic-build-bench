'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2596<T> = T extends (infer U)[]
  ? DeepReadonlyArray2596<U>
  : T extends object
  ? DeepReadonlyObject2596<T>
  : T;

interface DeepReadonlyArray2596<T> extends ReadonlyArray<DeepReadonly2596<T>> {}

type DeepReadonlyObject2596<T> = {
  readonly [P in keyof T]: DeepReadonly2596<T[P]>;
};

type UnionToIntersection2596<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2596<T> = UnionToIntersection2596<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2596<T extends unknown[], V> = [...T, V];

type TuplifyUnion2596<T, L = LastOf2596<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2596<TuplifyUnion2596<Exclude<T, L>>, L>;

type DeepPartial2596<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2596<T[P]> }
  : T;

type Paths2596<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2596<K, Paths2596<T[K], Prev2596[D]>> : never }[keyof T]
  : never;

type Prev2596 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2596<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2596 {
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

type ConfigPaths2596 = Paths2596<NestedConfig2596>;

interface HeavyProps2596 {
  config: DeepPartial2596<NestedConfig2596>;
  path?: ConfigPaths2596;
}

const HeavyComponent2596 = memo(function HeavyComponent2596({ config }: HeavyProps2596) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2596) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2596 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2596: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2596.displayName = 'HeavyComponent2596';
export default HeavyComponent2596;
