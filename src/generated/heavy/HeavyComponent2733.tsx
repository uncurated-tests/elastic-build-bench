'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2733<T> = T extends (infer U)[]
  ? DeepReadonlyArray2733<U>
  : T extends object
  ? DeepReadonlyObject2733<T>
  : T;

interface DeepReadonlyArray2733<T> extends ReadonlyArray<DeepReadonly2733<T>> {}

type DeepReadonlyObject2733<T> = {
  readonly [P in keyof T]: DeepReadonly2733<T[P]>;
};

type UnionToIntersection2733<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2733<T> = UnionToIntersection2733<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2733<T extends unknown[], V> = [...T, V];

type TuplifyUnion2733<T, L = LastOf2733<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2733<TuplifyUnion2733<Exclude<T, L>>, L>;

type DeepPartial2733<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2733<T[P]> }
  : T;

type Paths2733<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2733<K, Paths2733<T[K], Prev2733[D]>> : never }[keyof T]
  : never;

type Prev2733 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2733<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2733 {
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

type ConfigPaths2733 = Paths2733<NestedConfig2733>;

interface HeavyProps2733 {
  config: DeepPartial2733<NestedConfig2733>;
  path?: ConfigPaths2733;
}

const HeavyComponent2733 = memo(function HeavyComponent2733({ config }: HeavyProps2733) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2733) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2733 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2733: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2733.displayName = 'HeavyComponent2733';
export default HeavyComponent2733;
