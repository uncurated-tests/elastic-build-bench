'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4301<T> = T extends (infer U)[]
  ? DeepReadonlyArray4301<U>
  : T extends object
  ? DeepReadonlyObject4301<T>
  : T;

interface DeepReadonlyArray4301<T> extends ReadonlyArray<DeepReadonly4301<T>> {}

type DeepReadonlyObject4301<T> = {
  readonly [P in keyof T]: DeepReadonly4301<T[P]>;
};

type UnionToIntersection4301<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4301<T> = UnionToIntersection4301<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4301<T extends unknown[], V> = [...T, V];

type TuplifyUnion4301<T, L = LastOf4301<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4301<TuplifyUnion4301<Exclude<T, L>>, L>;

type DeepPartial4301<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4301<T[P]> }
  : T;

type Paths4301<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4301<K, Paths4301<T[K], Prev4301[D]>> : never }[keyof T]
  : never;

type Prev4301 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4301<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4301 {
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

type ConfigPaths4301 = Paths4301<NestedConfig4301>;

interface HeavyProps4301 {
  config: DeepPartial4301<NestedConfig4301>;
  path?: ConfigPaths4301;
}

const HeavyComponent4301 = memo(function HeavyComponent4301({ config }: HeavyProps4301) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4301) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4301 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4301: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4301.displayName = 'HeavyComponent4301';
export default HeavyComponent4301;
