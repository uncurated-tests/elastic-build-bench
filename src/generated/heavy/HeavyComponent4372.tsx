'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4372<T> = T extends (infer U)[]
  ? DeepReadonlyArray4372<U>
  : T extends object
  ? DeepReadonlyObject4372<T>
  : T;

interface DeepReadonlyArray4372<T> extends ReadonlyArray<DeepReadonly4372<T>> {}

type DeepReadonlyObject4372<T> = {
  readonly [P in keyof T]: DeepReadonly4372<T[P]>;
};

type UnionToIntersection4372<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4372<T> = UnionToIntersection4372<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4372<T extends unknown[], V> = [...T, V];

type TuplifyUnion4372<T, L = LastOf4372<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4372<TuplifyUnion4372<Exclude<T, L>>, L>;

type DeepPartial4372<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4372<T[P]> }
  : T;

type Paths4372<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4372<K, Paths4372<T[K], Prev4372[D]>> : never }[keyof T]
  : never;

type Prev4372 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4372<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4372 {
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

type ConfigPaths4372 = Paths4372<NestedConfig4372>;

interface HeavyProps4372 {
  config: DeepPartial4372<NestedConfig4372>;
  path?: ConfigPaths4372;
}

const HeavyComponent4372 = memo(function HeavyComponent4372({ config }: HeavyProps4372) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4372) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4372 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4372: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4372.displayName = 'HeavyComponent4372';
export default HeavyComponent4372;
