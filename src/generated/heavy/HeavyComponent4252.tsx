'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4252<T> = T extends (infer U)[]
  ? DeepReadonlyArray4252<U>
  : T extends object
  ? DeepReadonlyObject4252<T>
  : T;

interface DeepReadonlyArray4252<T> extends ReadonlyArray<DeepReadonly4252<T>> {}

type DeepReadonlyObject4252<T> = {
  readonly [P in keyof T]: DeepReadonly4252<T[P]>;
};

type UnionToIntersection4252<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4252<T> = UnionToIntersection4252<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4252<T extends unknown[], V> = [...T, V];

type TuplifyUnion4252<T, L = LastOf4252<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4252<TuplifyUnion4252<Exclude<T, L>>, L>;

type DeepPartial4252<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4252<T[P]> }
  : T;

type Paths4252<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4252<K, Paths4252<T[K], Prev4252[D]>> : never }[keyof T]
  : never;

type Prev4252 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4252<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4252 {
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

type ConfigPaths4252 = Paths4252<NestedConfig4252>;

interface HeavyProps4252 {
  config: DeepPartial4252<NestedConfig4252>;
  path?: ConfigPaths4252;
}

const HeavyComponent4252 = memo(function HeavyComponent4252({ config }: HeavyProps4252) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4252) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4252 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4252: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4252.displayName = 'HeavyComponent4252';
export default HeavyComponent4252;
