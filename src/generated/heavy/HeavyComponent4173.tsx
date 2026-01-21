'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4173<T> = T extends (infer U)[]
  ? DeepReadonlyArray4173<U>
  : T extends object
  ? DeepReadonlyObject4173<T>
  : T;

interface DeepReadonlyArray4173<T> extends ReadonlyArray<DeepReadonly4173<T>> {}

type DeepReadonlyObject4173<T> = {
  readonly [P in keyof T]: DeepReadonly4173<T[P]>;
};

type UnionToIntersection4173<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4173<T> = UnionToIntersection4173<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4173<T extends unknown[], V> = [...T, V];

type TuplifyUnion4173<T, L = LastOf4173<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4173<TuplifyUnion4173<Exclude<T, L>>, L>;

type DeepPartial4173<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4173<T[P]> }
  : T;

type Paths4173<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4173<K, Paths4173<T[K], Prev4173[D]>> : never }[keyof T]
  : never;

type Prev4173 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4173<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4173 {
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

type ConfigPaths4173 = Paths4173<NestedConfig4173>;

interface HeavyProps4173 {
  config: DeepPartial4173<NestedConfig4173>;
  path?: ConfigPaths4173;
}

const HeavyComponent4173 = memo(function HeavyComponent4173({ config }: HeavyProps4173) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4173) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4173 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4173: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4173.displayName = 'HeavyComponent4173';
export default HeavyComponent4173;
