'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2623<T> = T extends (infer U)[]
  ? DeepReadonlyArray2623<U>
  : T extends object
  ? DeepReadonlyObject2623<T>
  : T;

interface DeepReadonlyArray2623<T> extends ReadonlyArray<DeepReadonly2623<T>> {}

type DeepReadonlyObject2623<T> = {
  readonly [P in keyof T]: DeepReadonly2623<T[P]>;
};

type UnionToIntersection2623<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2623<T> = UnionToIntersection2623<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2623<T extends unknown[], V> = [...T, V];

type TuplifyUnion2623<T, L = LastOf2623<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2623<TuplifyUnion2623<Exclude<T, L>>, L>;

type DeepPartial2623<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2623<T[P]> }
  : T;

type Paths2623<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2623<K, Paths2623<T[K], Prev2623[D]>> : never }[keyof T]
  : never;

type Prev2623 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2623<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2623 {
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

type ConfigPaths2623 = Paths2623<NestedConfig2623>;

interface HeavyProps2623 {
  config: DeepPartial2623<NestedConfig2623>;
  path?: ConfigPaths2623;
}

const HeavyComponent2623 = memo(function HeavyComponent2623({ config }: HeavyProps2623) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2623) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2623 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2623: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2623.displayName = 'HeavyComponent2623';
export default HeavyComponent2623;
