'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4876<T> = T extends (infer U)[]
  ? DeepReadonlyArray4876<U>
  : T extends object
  ? DeepReadonlyObject4876<T>
  : T;

interface DeepReadonlyArray4876<T> extends ReadonlyArray<DeepReadonly4876<T>> {}

type DeepReadonlyObject4876<T> = {
  readonly [P in keyof T]: DeepReadonly4876<T[P]>;
};

type UnionToIntersection4876<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4876<T> = UnionToIntersection4876<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4876<T extends unknown[], V> = [...T, V];

type TuplifyUnion4876<T, L = LastOf4876<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4876<TuplifyUnion4876<Exclude<T, L>>, L>;

type DeepPartial4876<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4876<T[P]> }
  : T;

type Paths4876<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4876<K, Paths4876<T[K], Prev4876[D]>> : never }[keyof T]
  : never;

type Prev4876 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4876<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4876 {
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

type ConfigPaths4876 = Paths4876<NestedConfig4876>;

interface HeavyProps4876 {
  config: DeepPartial4876<NestedConfig4876>;
  path?: ConfigPaths4876;
}

const HeavyComponent4876 = memo(function HeavyComponent4876({ config }: HeavyProps4876) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4876) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4876 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4876: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4876.displayName = 'HeavyComponent4876';
export default HeavyComponent4876;
