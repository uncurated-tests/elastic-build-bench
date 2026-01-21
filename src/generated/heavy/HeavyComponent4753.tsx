'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4753<T> = T extends (infer U)[]
  ? DeepReadonlyArray4753<U>
  : T extends object
  ? DeepReadonlyObject4753<T>
  : T;

interface DeepReadonlyArray4753<T> extends ReadonlyArray<DeepReadonly4753<T>> {}

type DeepReadonlyObject4753<T> = {
  readonly [P in keyof T]: DeepReadonly4753<T[P]>;
};

type UnionToIntersection4753<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4753<T> = UnionToIntersection4753<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4753<T extends unknown[], V> = [...T, V];

type TuplifyUnion4753<T, L = LastOf4753<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4753<TuplifyUnion4753<Exclude<T, L>>, L>;

type DeepPartial4753<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4753<T[P]> }
  : T;

type Paths4753<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4753<K, Paths4753<T[K], Prev4753[D]>> : never }[keyof T]
  : never;

type Prev4753 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4753<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4753 {
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

type ConfigPaths4753 = Paths4753<NestedConfig4753>;

interface HeavyProps4753 {
  config: DeepPartial4753<NestedConfig4753>;
  path?: ConfigPaths4753;
}

const HeavyComponent4753 = memo(function HeavyComponent4753({ config }: HeavyProps4753) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4753) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4753 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4753: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4753.displayName = 'HeavyComponent4753';
export default HeavyComponent4753;
