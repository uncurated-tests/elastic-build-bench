'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2306<T> = T extends (infer U)[]
  ? DeepReadonlyArray2306<U>
  : T extends object
  ? DeepReadonlyObject2306<T>
  : T;

interface DeepReadonlyArray2306<T> extends ReadonlyArray<DeepReadonly2306<T>> {}

type DeepReadonlyObject2306<T> = {
  readonly [P in keyof T]: DeepReadonly2306<T[P]>;
};

type UnionToIntersection2306<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2306<T> = UnionToIntersection2306<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2306<T extends unknown[], V> = [...T, V];

type TuplifyUnion2306<T, L = LastOf2306<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2306<TuplifyUnion2306<Exclude<T, L>>, L>;

type DeepPartial2306<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2306<T[P]> }
  : T;

type Paths2306<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2306<K, Paths2306<T[K], Prev2306[D]>> : never }[keyof T]
  : never;

type Prev2306 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2306<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2306 {
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

type ConfigPaths2306 = Paths2306<NestedConfig2306>;

interface HeavyProps2306 {
  config: DeepPartial2306<NestedConfig2306>;
  path?: ConfigPaths2306;
}

const HeavyComponent2306 = memo(function HeavyComponent2306({ config }: HeavyProps2306) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2306) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2306 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2306: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2306.displayName = 'HeavyComponent2306';
export default HeavyComponent2306;
