'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2872<T> = T extends (infer U)[]
  ? DeepReadonlyArray2872<U>
  : T extends object
  ? DeepReadonlyObject2872<T>
  : T;

interface DeepReadonlyArray2872<T> extends ReadonlyArray<DeepReadonly2872<T>> {}

type DeepReadonlyObject2872<T> = {
  readonly [P in keyof T]: DeepReadonly2872<T[P]>;
};

type UnionToIntersection2872<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2872<T> = UnionToIntersection2872<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2872<T extends unknown[], V> = [...T, V];

type TuplifyUnion2872<T, L = LastOf2872<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2872<TuplifyUnion2872<Exclude<T, L>>, L>;

type DeepPartial2872<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2872<T[P]> }
  : T;

type Paths2872<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2872<K, Paths2872<T[K], Prev2872[D]>> : never }[keyof T]
  : never;

type Prev2872 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2872<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2872 {
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

type ConfigPaths2872 = Paths2872<NestedConfig2872>;

interface HeavyProps2872 {
  config: DeepPartial2872<NestedConfig2872>;
  path?: ConfigPaths2872;
}

const HeavyComponent2872 = memo(function HeavyComponent2872({ config }: HeavyProps2872) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2872) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2872 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2872: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2872.displayName = 'HeavyComponent2872';
export default HeavyComponent2872;
