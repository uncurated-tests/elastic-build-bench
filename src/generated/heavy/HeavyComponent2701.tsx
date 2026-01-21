'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2701<T> = T extends (infer U)[]
  ? DeepReadonlyArray2701<U>
  : T extends object
  ? DeepReadonlyObject2701<T>
  : T;

interface DeepReadonlyArray2701<T> extends ReadonlyArray<DeepReadonly2701<T>> {}

type DeepReadonlyObject2701<T> = {
  readonly [P in keyof T]: DeepReadonly2701<T[P]>;
};

type UnionToIntersection2701<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2701<T> = UnionToIntersection2701<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2701<T extends unknown[], V> = [...T, V];

type TuplifyUnion2701<T, L = LastOf2701<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2701<TuplifyUnion2701<Exclude<T, L>>, L>;

type DeepPartial2701<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2701<T[P]> }
  : T;

type Paths2701<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2701<K, Paths2701<T[K], Prev2701[D]>> : never }[keyof T]
  : never;

type Prev2701 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2701<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2701 {
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

type ConfigPaths2701 = Paths2701<NestedConfig2701>;

interface HeavyProps2701 {
  config: DeepPartial2701<NestedConfig2701>;
  path?: ConfigPaths2701;
}

const HeavyComponent2701 = memo(function HeavyComponent2701({ config }: HeavyProps2701) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2701) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2701 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2701: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2701.displayName = 'HeavyComponent2701';
export default HeavyComponent2701;
