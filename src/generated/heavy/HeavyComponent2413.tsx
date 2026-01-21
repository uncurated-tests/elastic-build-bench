'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2413<T> = T extends (infer U)[]
  ? DeepReadonlyArray2413<U>
  : T extends object
  ? DeepReadonlyObject2413<T>
  : T;

interface DeepReadonlyArray2413<T> extends ReadonlyArray<DeepReadonly2413<T>> {}

type DeepReadonlyObject2413<T> = {
  readonly [P in keyof T]: DeepReadonly2413<T[P]>;
};

type UnionToIntersection2413<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2413<T> = UnionToIntersection2413<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2413<T extends unknown[], V> = [...T, V];

type TuplifyUnion2413<T, L = LastOf2413<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2413<TuplifyUnion2413<Exclude<T, L>>, L>;

type DeepPartial2413<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2413<T[P]> }
  : T;

type Paths2413<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2413<K, Paths2413<T[K], Prev2413[D]>> : never }[keyof T]
  : never;

type Prev2413 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2413<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2413 {
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

type ConfigPaths2413 = Paths2413<NestedConfig2413>;

interface HeavyProps2413 {
  config: DeepPartial2413<NestedConfig2413>;
  path?: ConfigPaths2413;
}

const HeavyComponent2413 = memo(function HeavyComponent2413({ config }: HeavyProps2413) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2413) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2413 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2413: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2413.displayName = 'HeavyComponent2413';
export default HeavyComponent2413;
