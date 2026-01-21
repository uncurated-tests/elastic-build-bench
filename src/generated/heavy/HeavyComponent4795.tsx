'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4795<T> = T extends (infer U)[]
  ? DeepReadonlyArray4795<U>
  : T extends object
  ? DeepReadonlyObject4795<T>
  : T;

interface DeepReadonlyArray4795<T> extends ReadonlyArray<DeepReadonly4795<T>> {}

type DeepReadonlyObject4795<T> = {
  readonly [P in keyof T]: DeepReadonly4795<T[P]>;
};

type UnionToIntersection4795<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4795<T> = UnionToIntersection4795<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4795<T extends unknown[], V> = [...T, V];

type TuplifyUnion4795<T, L = LastOf4795<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4795<TuplifyUnion4795<Exclude<T, L>>, L>;

type DeepPartial4795<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4795<T[P]> }
  : T;

type Paths4795<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4795<K, Paths4795<T[K], Prev4795[D]>> : never }[keyof T]
  : never;

type Prev4795 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4795<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4795 {
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

type ConfigPaths4795 = Paths4795<NestedConfig4795>;

interface HeavyProps4795 {
  config: DeepPartial4795<NestedConfig4795>;
  path?: ConfigPaths4795;
}

const HeavyComponent4795 = memo(function HeavyComponent4795({ config }: HeavyProps4795) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4795) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4795 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4795: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4795.displayName = 'HeavyComponent4795';
export default HeavyComponent4795;
