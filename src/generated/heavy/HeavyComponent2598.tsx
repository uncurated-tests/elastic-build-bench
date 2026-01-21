'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2598<T> = T extends (infer U)[]
  ? DeepReadonlyArray2598<U>
  : T extends object
  ? DeepReadonlyObject2598<T>
  : T;

interface DeepReadonlyArray2598<T> extends ReadonlyArray<DeepReadonly2598<T>> {}

type DeepReadonlyObject2598<T> = {
  readonly [P in keyof T]: DeepReadonly2598<T[P]>;
};

type UnionToIntersection2598<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2598<T> = UnionToIntersection2598<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2598<T extends unknown[], V> = [...T, V];

type TuplifyUnion2598<T, L = LastOf2598<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2598<TuplifyUnion2598<Exclude<T, L>>, L>;

type DeepPartial2598<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2598<T[P]> }
  : T;

type Paths2598<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2598<K, Paths2598<T[K], Prev2598[D]>> : never }[keyof T]
  : never;

type Prev2598 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2598<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2598 {
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

type ConfigPaths2598 = Paths2598<NestedConfig2598>;

interface HeavyProps2598 {
  config: DeepPartial2598<NestedConfig2598>;
  path?: ConfigPaths2598;
}

const HeavyComponent2598 = memo(function HeavyComponent2598({ config }: HeavyProps2598) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2598) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2598 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2598: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2598.displayName = 'HeavyComponent2598';
export default HeavyComponent2598;
