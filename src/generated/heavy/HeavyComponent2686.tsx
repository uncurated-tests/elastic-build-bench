'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2686<T> = T extends (infer U)[]
  ? DeepReadonlyArray2686<U>
  : T extends object
  ? DeepReadonlyObject2686<T>
  : T;

interface DeepReadonlyArray2686<T> extends ReadonlyArray<DeepReadonly2686<T>> {}

type DeepReadonlyObject2686<T> = {
  readonly [P in keyof T]: DeepReadonly2686<T[P]>;
};

type UnionToIntersection2686<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2686<T> = UnionToIntersection2686<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2686<T extends unknown[], V> = [...T, V];

type TuplifyUnion2686<T, L = LastOf2686<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2686<TuplifyUnion2686<Exclude<T, L>>, L>;

type DeepPartial2686<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2686<T[P]> }
  : T;

type Paths2686<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2686<K, Paths2686<T[K], Prev2686[D]>> : never }[keyof T]
  : never;

type Prev2686 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2686<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2686 {
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

type ConfigPaths2686 = Paths2686<NestedConfig2686>;

interface HeavyProps2686 {
  config: DeepPartial2686<NestedConfig2686>;
  path?: ConfigPaths2686;
}

const HeavyComponent2686 = memo(function HeavyComponent2686({ config }: HeavyProps2686) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2686) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2686 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2686: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2686.displayName = 'HeavyComponent2686';
export default HeavyComponent2686;
