'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2858<T> = T extends (infer U)[]
  ? DeepReadonlyArray2858<U>
  : T extends object
  ? DeepReadonlyObject2858<T>
  : T;

interface DeepReadonlyArray2858<T> extends ReadonlyArray<DeepReadonly2858<T>> {}

type DeepReadonlyObject2858<T> = {
  readonly [P in keyof T]: DeepReadonly2858<T[P]>;
};

type UnionToIntersection2858<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2858<T> = UnionToIntersection2858<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2858<T extends unknown[], V> = [...T, V];

type TuplifyUnion2858<T, L = LastOf2858<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2858<TuplifyUnion2858<Exclude<T, L>>, L>;

type DeepPartial2858<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2858<T[P]> }
  : T;

type Paths2858<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2858<K, Paths2858<T[K], Prev2858[D]>> : never }[keyof T]
  : never;

type Prev2858 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2858<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2858 {
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

type ConfigPaths2858 = Paths2858<NestedConfig2858>;

interface HeavyProps2858 {
  config: DeepPartial2858<NestedConfig2858>;
  path?: ConfigPaths2858;
}

const HeavyComponent2858 = memo(function HeavyComponent2858({ config }: HeavyProps2858) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2858) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2858 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2858: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2858.displayName = 'HeavyComponent2858';
export default HeavyComponent2858;
