'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2753<T> = T extends (infer U)[]
  ? DeepReadonlyArray2753<U>
  : T extends object
  ? DeepReadonlyObject2753<T>
  : T;

interface DeepReadonlyArray2753<T> extends ReadonlyArray<DeepReadonly2753<T>> {}

type DeepReadonlyObject2753<T> = {
  readonly [P in keyof T]: DeepReadonly2753<T[P]>;
};

type UnionToIntersection2753<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2753<T> = UnionToIntersection2753<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2753<T extends unknown[], V> = [...T, V];

type TuplifyUnion2753<T, L = LastOf2753<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2753<TuplifyUnion2753<Exclude<T, L>>, L>;

type DeepPartial2753<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2753<T[P]> }
  : T;

type Paths2753<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2753<K, Paths2753<T[K], Prev2753[D]>> : never }[keyof T]
  : never;

type Prev2753 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2753<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2753 {
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

type ConfigPaths2753 = Paths2753<NestedConfig2753>;

interface HeavyProps2753 {
  config: DeepPartial2753<NestedConfig2753>;
  path?: ConfigPaths2753;
}

const HeavyComponent2753 = memo(function HeavyComponent2753({ config }: HeavyProps2753) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2753) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2753 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2753: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2753.displayName = 'HeavyComponent2753';
export default HeavyComponent2753;
