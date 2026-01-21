'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2272<T> = T extends (infer U)[]
  ? DeepReadonlyArray2272<U>
  : T extends object
  ? DeepReadonlyObject2272<T>
  : T;

interface DeepReadonlyArray2272<T> extends ReadonlyArray<DeepReadonly2272<T>> {}

type DeepReadonlyObject2272<T> = {
  readonly [P in keyof T]: DeepReadonly2272<T[P]>;
};

type UnionToIntersection2272<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2272<T> = UnionToIntersection2272<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2272<T extends unknown[], V> = [...T, V];

type TuplifyUnion2272<T, L = LastOf2272<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2272<TuplifyUnion2272<Exclude<T, L>>, L>;

type DeepPartial2272<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2272<T[P]> }
  : T;

type Paths2272<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2272<K, Paths2272<T[K], Prev2272[D]>> : never }[keyof T]
  : never;

type Prev2272 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2272<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2272 {
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

type ConfigPaths2272 = Paths2272<NestedConfig2272>;

interface HeavyProps2272 {
  config: DeepPartial2272<NestedConfig2272>;
  path?: ConfigPaths2272;
}

const HeavyComponent2272 = memo(function HeavyComponent2272({ config }: HeavyProps2272) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2272) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2272 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2272: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2272.displayName = 'HeavyComponent2272';
export default HeavyComponent2272;
