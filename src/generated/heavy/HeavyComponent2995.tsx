'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2995<T> = T extends (infer U)[]
  ? DeepReadonlyArray2995<U>
  : T extends object
  ? DeepReadonlyObject2995<T>
  : T;

interface DeepReadonlyArray2995<T> extends ReadonlyArray<DeepReadonly2995<T>> {}

type DeepReadonlyObject2995<T> = {
  readonly [P in keyof T]: DeepReadonly2995<T[P]>;
};

type UnionToIntersection2995<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2995<T> = UnionToIntersection2995<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2995<T extends unknown[], V> = [...T, V];

type TuplifyUnion2995<T, L = LastOf2995<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2995<TuplifyUnion2995<Exclude<T, L>>, L>;

type DeepPartial2995<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2995<T[P]> }
  : T;

type Paths2995<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2995<K, Paths2995<T[K], Prev2995[D]>> : never }[keyof T]
  : never;

type Prev2995 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2995<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2995 {
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

type ConfigPaths2995 = Paths2995<NestedConfig2995>;

interface HeavyProps2995 {
  config: DeepPartial2995<NestedConfig2995>;
  path?: ConfigPaths2995;
}

const HeavyComponent2995 = memo(function HeavyComponent2995({ config }: HeavyProps2995) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2995) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2995 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2995: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2995.displayName = 'HeavyComponent2995';
export default HeavyComponent2995;
