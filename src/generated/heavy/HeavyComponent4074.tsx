'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4074<T> = T extends (infer U)[]
  ? DeepReadonlyArray4074<U>
  : T extends object
  ? DeepReadonlyObject4074<T>
  : T;

interface DeepReadonlyArray4074<T> extends ReadonlyArray<DeepReadonly4074<T>> {}

type DeepReadonlyObject4074<T> = {
  readonly [P in keyof T]: DeepReadonly4074<T[P]>;
};

type UnionToIntersection4074<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4074<T> = UnionToIntersection4074<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4074<T extends unknown[], V> = [...T, V];

type TuplifyUnion4074<T, L = LastOf4074<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4074<TuplifyUnion4074<Exclude<T, L>>, L>;

type DeepPartial4074<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4074<T[P]> }
  : T;

type Paths4074<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4074<K, Paths4074<T[K], Prev4074[D]>> : never }[keyof T]
  : never;

type Prev4074 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4074<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4074 {
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

type ConfigPaths4074 = Paths4074<NestedConfig4074>;

interface HeavyProps4074 {
  config: DeepPartial4074<NestedConfig4074>;
  path?: ConfigPaths4074;
}

const HeavyComponent4074 = memo(function HeavyComponent4074({ config }: HeavyProps4074) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4074) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4074 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4074: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4074.displayName = 'HeavyComponent4074';
export default HeavyComponent4074;
