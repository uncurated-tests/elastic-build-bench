'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2593<T> = T extends (infer U)[]
  ? DeepReadonlyArray2593<U>
  : T extends object
  ? DeepReadonlyObject2593<T>
  : T;

interface DeepReadonlyArray2593<T> extends ReadonlyArray<DeepReadonly2593<T>> {}

type DeepReadonlyObject2593<T> = {
  readonly [P in keyof T]: DeepReadonly2593<T[P]>;
};

type UnionToIntersection2593<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2593<T> = UnionToIntersection2593<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2593<T extends unknown[], V> = [...T, V];

type TuplifyUnion2593<T, L = LastOf2593<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2593<TuplifyUnion2593<Exclude<T, L>>, L>;

type DeepPartial2593<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2593<T[P]> }
  : T;

type Paths2593<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2593<K, Paths2593<T[K], Prev2593[D]>> : never }[keyof T]
  : never;

type Prev2593 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2593<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2593 {
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

type ConfigPaths2593 = Paths2593<NestedConfig2593>;

interface HeavyProps2593 {
  config: DeepPartial2593<NestedConfig2593>;
  path?: ConfigPaths2593;
}

const HeavyComponent2593 = memo(function HeavyComponent2593({ config }: HeavyProps2593) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2593) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2593 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2593: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2593.displayName = 'HeavyComponent2593';
export default HeavyComponent2593;
