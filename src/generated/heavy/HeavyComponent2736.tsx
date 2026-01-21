'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2736<T> = T extends (infer U)[]
  ? DeepReadonlyArray2736<U>
  : T extends object
  ? DeepReadonlyObject2736<T>
  : T;

interface DeepReadonlyArray2736<T> extends ReadonlyArray<DeepReadonly2736<T>> {}

type DeepReadonlyObject2736<T> = {
  readonly [P in keyof T]: DeepReadonly2736<T[P]>;
};

type UnionToIntersection2736<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2736<T> = UnionToIntersection2736<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2736<T extends unknown[], V> = [...T, V];

type TuplifyUnion2736<T, L = LastOf2736<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2736<TuplifyUnion2736<Exclude<T, L>>, L>;

type DeepPartial2736<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2736<T[P]> }
  : T;

type Paths2736<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2736<K, Paths2736<T[K], Prev2736[D]>> : never }[keyof T]
  : never;

type Prev2736 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2736<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2736 {
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

type ConfigPaths2736 = Paths2736<NestedConfig2736>;

interface HeavyProps2736 {
  config: DeepPartial2736<NestedConfig2736>;
  path?: ConfigPaths2736;
}

const HeavyComponent2736 = memo(function HeavyComponent2736({ config }: HeavyProps2736) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2736) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2736 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2736: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2736.displayName = 'HeavyComponent2736';
export default HeavyComponent2736;
