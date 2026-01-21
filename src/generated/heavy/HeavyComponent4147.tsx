'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4147<T> = T extends (infer U)[]
  ? DeepReadonlyArray4147<U>
  : T extends object
  ? DeepReadonlyObject4147<T>
  : T;

interface DeepReadonlyArray4147<T> extends ReadonlyArray<DeepReadonly4147<T>> {}

type DeepReadonlyObject4147<T> = {
  readonly [P in keyof T]: DeepReadonly4147<T[P]>;
};

type UnionToIntersection4147<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4147<T> = UnionToIntersection4147<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4147<T extends unknown[], V> = [...T, V];

type TuplifyUnion4147<T, L = LastOf4147<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4147<TuplifyUnion4147<Exclude<T, L>>, L>;

type DeepPartial4147<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4147<T[P]> }
  : T;

type Paths4147<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4147<K, Paths4147<T[K], Prev4147[D]>> : never }[keyof T]
  : never;

type Prev4147 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4147<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4147 {
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

type ConfigPaths4147 = Paths4147<NestedConfig4147>;

interface HeavyProps4147 {
  config: DeepPartial4147<NestedConfig4147>;
  path?: ConfigPaths4147;
}

const HeavyComponent4147 = memo(function HeavyComponent4147({ config }: HeavyProps4147) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4147) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4147 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4147: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4147.displayName = 'HeavyComponent4147';
export default HeavyComponent4147;
