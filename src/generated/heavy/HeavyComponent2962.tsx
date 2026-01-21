'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2962<T> = T extends (infer U)[]
  ? DeepReadonlyArray2962<U>
  : T extends object
  ? DeepReadonlyObject2962<T>
  : T;

interface DeepReadonlyArray2962<T> extends ReadonlyArray<DeepReadonly2962<T>> {}

type DeepReadonlyObject2962<T> = {
  readonly [P in keyof T]: DeepReadonly2962<T[P]>;
};

type UnionToIntersection2962<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2962<T> = UnionToIntersection2962<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2962<T extends unknown[], V> = [...T, V];

type TuplifyUnion2962<T, L = LastOf2962<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2962<TuplifyUnion2962<Exclude<T, L>>, L>;

type DeepPartial2962<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2962<T[P]> }
  : T;

type Paths2962<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2962<K, Paths2962<T[K], Prev2962[D]>> : never }[keyof T]
  : never;

type Prev2962 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2962<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2962 {
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

type ConfigPaths2962 = Paths2962<NestedConfig2962>;

interface HeavyProps2962 {
  config: DeepPartial2962<NestedConfig2962>;
  path?: ConfigPaths2962;
}

const HeavyComponent2962 = memo(function HeavyComponent2962({ config }: HeavyProps2962) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2962) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2962 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2962: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2962.displayName = 'HeavyComponent2962';
export default HeavyComponent2962;
