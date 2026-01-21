'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4767<T> = T extends (infer U)[]
  ? DeepReadonlyArray4767<U>
  : T extends object
  ? DeepReadonlyObject4767<T>
  : T;

interface DeepReadonlyArray4767<T> extends ReadonlyArray<DeepReadonly4767<T>> {}

type DeepReadonlyObject4767<T> = {
  readonly [P in keyof T]: DeepReadonly4767<T[P]>;
};

type UnionToIntersection4767<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4767<T> = UnionToIntersection4767<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4767<T extends unknown[], V> = [...T, V];

type TuplifyUnion4767<T, L = LastOf4767<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4767<TuplifyUnion4767<Exclude<T, L>>, L>;

type DeepPartial4767<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4767<T[P]> }
  : T;

type Paths4767<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4767<K, Paths4767<T[K], Prev4767[D]>> : never }[keyof T]
  : never;

type Prev4767 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4767<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4767 {
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

type ConfigPaths4767 = Paths4767<NestedConfig4767>;

interface HeavyProps4767 {
  config: DeepPartial4767<NestedConfig4767>;
  path?: ConfigPaths4767;
}

const HeavyComponent4767 = memo(function HeavyComponent4767({ config }: HeavyProps4767) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4767) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4767 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4767: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4767.displayName = 'HeavyComponent4767';
export default HeavyComponent4767;
