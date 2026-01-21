'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2353<T> = T extends (infer U)[]
  ? DeepReadonlyArray2353<U>
  : T extends object
  ? DeepReadonlyObject2353<T>
  : T;

interface DeepReadonlyArray2353<T> extends ReadonlyArray<DeepReadonly2353<T>> {}

type DeepReadonlyObject2353<T> = {
  readonly [P in keyof T]: DeepReadonly2353<T[P]>;
};

type UnionToIntersection2353<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2353<T> = UnionToIntersection2353<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2353<T extends unknown[], V> = [...T, V];

type TuplifyUnion2353<T, L = LastOf2353<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2353<TuplifyUnion2353<Exclude<T, L>>, L>;

type DeepPartial2353<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2353<T[P]> }
  : T;

type Paths2353<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2353<K, Paths2353<T[K], Prev2353[D]>> : never }[keyof T]
  : never;

type Prev2353 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2353<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2353 {
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

type ConfigPaths2353 = Paths2353<NestedConfig2353>;

interface HeavyProps2353 {
  config: DeepPartial2353<NestedConfig2353>;
  path?: ConfigPaths2353;
}

const HeavyComponent2353 = memo(function HeavyComponent2353({ config }: HeavyProps2353) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2353) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2353 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2353: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2353.displayName = 'HeavyComponent2353';
export default HeavyComponent2353;
