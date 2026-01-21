'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4853<T> = T extends (infer U)[]
  ? DeepReadonlyArray4853<U>
  : T extends object
  ? DeepReadonlyObject4853<T>
  : T;

interface DeepReadonlyArray4853<T> extends ReadonlyArray<DeepReadonly4853<T>> {}

type DeepReadonlyObject4853<T> = {
  readonly [P in keyof T]: DeepReadonly4853<T[P]>;
};

type UnionToIntersection4853<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4853<T> = UnionToIntersection4853<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4853<T extends unknown[], V> = [...T, V];

type TuplifyUnion4853<T, L = LastOf4853<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4853<TuplifyUnion4853<Exclude<T, L>>, L>;

type DeepPartial4853<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4853<T[P]> }
  : T;

type Paths4853<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4853<K, Paths4853<T[K], Prev4853[D]>> : never }[keyof T]
  : never;

type Prev4853 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4853<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4853 {
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

type ConfigPaths4853 = Paths4853<NestedConfig4853>;

interface HeavyProps4853 {
  config: DeepPartial4853<NestedConfig4853>;
  path?: ConfigPaths4853;
}

const HeavyComponent4853 = memo(function HeavyComponent4853({ config }: HeavyProps4853) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4853) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4853 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4853: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4853.displayName = 'HeavyComponent4853';
export default HeavyComponent4853;
