'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2066<T> = T extends (infer U)[]
  ? DeepReadonlyArray2066<U>
  : T extends object
  ? DeepReadonlyObject2066<T>
  : T;

interface DeepReadonlyArray2066<T> extends ReadonlyArray<DeepReadonly2066<T>> {}

type DeepReadonlyObject2066<T> = {
  readonly [P in keyof T]: DeepReadonly2066<T[P]>;
};

type UnionToIntersection2066<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2066<T> = UnionToIntersection2066<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2066<T extends unknown[], V> = [...T, V];

type TuplifyUnion2066<T, L = LastOf2066<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2066<TuplifyUnion2066<Exclude<T, L>>, L>;

type DeepPartial2066<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2066<T[P]> }
  : T;

type Paths2066<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2066<K, Paths2066<T[K], Prev2066[D]>> : never }[keyof T]
  : never;

type Prev2066 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2066<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2066 {
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

type ConfigPaths2066 = Paths2066<NestedConfig2066>;

interface HeavyProps2066 {
  config: DeepPartial2066<NestedConfig2066>;
  path?: ConfigPaths2066;
}

const HeavyComponent2066 = memo(function HeavyComponent2066({ config }: HeavyProps2066) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2066) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2066 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2066: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2066.displayName = 'HeavyComponent2066';
export default HeavyComponent2066;
