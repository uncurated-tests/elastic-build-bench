'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2258<T> = T extends (infer U)[]
  ? DeepReadonlyArray2258<U>
  : T extends object
  ? DeepReadonlyObject2258<T>
  : T;

interface DeepReadonlyArray2258<T> extends ReadonlyArray<DeepReadonly2258<T>> {}

type DeepReadonlyObject2258<T> = {
  readonly [P in keyof T]: DeepReadonly2258<T[P]>;
};

type UnionToIntersection2258<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2258<T> = UnionToIntersection2258<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2258<T extends unknown[], V> = [...T, V];

type TuplifyUnion2258<T, L = LastOf2258<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2258<TuplifyUnion2258<Exclude<T, L>>, L>;

type DeepPartial2258<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2258<T[P]> }
  : T;

type Paths2258<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2258<K, Paths2258<T[K], Prev2258[D]>> : never }[keyof T]
  : never;

type Prev2258 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2258<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2258 {
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

type ConfigPaths2258 = Paths2258<NestedConfig2258>;

interface HeavyProps2258 {
  config: DeepPartial2258<NestedConfig2258>;
  path?: ConfigPaths2258;
}

const HeavyComponent2258 = memo(function HeavyComponent2258({ config }: HeavyProps2258) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2258) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2258 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2258: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2258.displayName = 'HeavyComponent2258';
export default HeavyComponent2258;
