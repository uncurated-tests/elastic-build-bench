'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4948<T> = T extends (infer U)[]
  ? DeepReadonlyArray4948<U>
  : T extends object
  ? DeepReadonlyObject4948<T>
  : T;

interface DeepReadonlyArray4948<T> extends ReadonlyArray<DeepReadonly4948<T>> {}

type DeepReadonlyObject4948<T> = {
  readonly [P in keyof T]: DeepReadonly4948<T[P]>;
};

type UnionToIntersection4948<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4948<T> = UnionToIntersection4948<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4948<T extends unknown[], V> = [...T, V];

type TuplifyUnion4948<T, L = LastOf4948<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4948<TuplifyUnion4948<Exclude<T, L>>, L>;

type DeepPartial4948<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4948<T[P]> }
  : T;

type Paths4948<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4948<K, Paths4948<T[K], Prev4948[D]>> : never }[keyof T]
  : never;

type Prev4948 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4948<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4948 {
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

type ConfigPaths4948 = Paths4948<NestedConfig4948>;

interface HeavyProps4948 {
  config: DeepPartial4948<NestedConfig4948>;
  path?: ConfigPaths4948;
}

const HeavyComponent4948 = memo(function HeavyComponent4948({ config }: HeavyProps4948) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4948) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4948 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4948: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4948.displayName = 'HeavyComponent4948';
export default HeavyComponent4948;
