'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4059<T> = T extends (infer U)[]
  ? DeepReadonlyArray4059<U>
  : T extends object
  ? DeepReadonlyObject4059<T>
  : T;

interface DeepReadonlyArray4059<T> extends ReadonlyArray<DeepReadonly4059<T>> {}

type DeepReadonlyObject4059<T> = {
  readonly [P in keyof T]: DeepReadonly4059<T[P]>;
};

type UnionToIntersection4059<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4059<T> = UnionToIntersection4059<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4059<T extends unknown[], V> = [...T, V];

type TuplifyUnion4059<T, L = LastOf4059<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4059<TuplifyUnion4059<Exclude<T, L>>, L>;

type DeepPartial4059<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4059<T[P]> }
  : T;

type Paths4059<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4059<K, Paths4059<T[K], Prev4059[D]>> : never }[keyof T]
  : never;

type Prev4059 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4059<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4059 {
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

type ConfigPaths4059 = Paths4059<NestedConfig4059>;

interface HeavyProps4059 {
  config: DeepPartial4059<NestedConfig4059>;
  path?: ConfigPaths4059;
}

const HeavyComponent4059 = memo(function HeavyComponent4059({ config }: HeavyProps4059) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4059) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4059 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4059: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4059.displayName = 'HeavyComponent4059';
export default HeavyComponent4059;
