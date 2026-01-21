'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2891<T> = T extends (infer U)[]
  ? DeepReadonlyArray2891<U>
  : T extends object
  ? DeepReadonlyObject2891<T>
  : T;

interface DeepReadonlyArray2891<T> extends ReadonlyArray<DeepReadonly2891<T>> {}

type DeepReadonlyObject2891<T> = {
  readonly [P in keyof T]: DeepReadonly2891<T[P]>;
};

type UnionToIntersection2891<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2891<T> = UnionToIntersection2891<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2891<T extends unknown[], V> = [...T, V];

type TuplifyUnion2891<T, L = LastOf2891<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2891<TuplifyUnion2891<Exclude<T, L>>, L>;

type DeepPartial2891<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2891<T[P]> }
  : T;

type Paths2891<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2891<K, Paths2891<T[K], Prev2891[D]>> : never }[keyof T]
  : never;

type Prev2891 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2891<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2891 {
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

type ConfigPaths2891 = Paths2891<NestedConfig2891>;

interface HeavyProps2891 {
  config: DeepPartial2891<NestedConfig2891>;
  path?: ConfigPaths2891;
}

const HeavyComponent2891 = memo(function HeavyComponent2891({ config }: HeavyProps2891) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2891) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2891 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2891: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2891.displayName = 'HeavyComponent2891';
export default HeavyComponent2891;
