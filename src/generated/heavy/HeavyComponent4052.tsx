'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4052<T> = T extends (infer U)[]
  ? DeepReadonlyArray4052<U>
  : T extends object
  ? DeepReadonlyObject4052<T>
  : T;

interface DeepReadonlyArray4052<T> extends ReadonlyArray<DeepReadonly4052<T>> {}

type DeepReadonlyObject4052<T> = {
  readonly [P in keyof T]: DeepReadonly4052<T[P]>;
};

type UnionToIntersection4052<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4052<T> = UnionToIntersection4052<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4052<T extends unknown[], V> = [...T, V];

type TuplifyUnion4052<T, L = LastOf4052<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4052<TuplifyUnion4052<Exclude<T, L>>, L>;

type DeepPartial4052<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4052<T[P]> }
  : T;

type Paths4052<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4052<K, Paths4052<T[K], Prev4052[D]>> : never }[keyof T]
  : never;

type Prev4052 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4052<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4052 {
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

type ConfigPaths4052 = Paths4052<NestedConfig4052>;

interface HeavyProps4052 {
  config: DeepPartial4052<NestedConfig4052>;
  path?: ConfigPaths4052;
}

const HeavyComponent4052 = memo(function HeavyComponent4052({ config }: HeavyProps4052) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4052) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4052 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4052: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4052.displayName = 'HeavyComponent4052';
export default HeavyComponent4052;
