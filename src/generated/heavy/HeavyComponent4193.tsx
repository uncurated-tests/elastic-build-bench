'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4193<T> = T extends (infer U)[]
  ? DeepReadonlyArray4193<U>
  : T extends object
  ? DeepReadonlyObject4193<T>
  : T;

interface DeepReadonlyArray4193<T> extends ReadonlyArray<DeepReadonly4193<T>> {}

type DeepReadonlyObject4193<T> = {
  readonly [P in keyof T]: DeepReadonly4193<T[P]>;
};

type UnionToIntersection4193<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4193<T> = UnionToIntersection4193<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4193<T extends unknown[], V> = [...T, V];

type TuplifyUnion4193<T, L = LastOf4193<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4193<TuplifyUnion4193<Exclude<T, L>>, L>;

type DeepPartial4193<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4193<T[P]> }
  : T;

type Paths4193<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4193<K, Paths4193<T[K], Prev4193[D]>> : never }[keyof T]
  : never;

type Prev4193 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4193<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4193 {
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

type ConfigPaths4193 = Paths4193<NestedConfig4193>;

interface HeavyProps4193 {
  config: DeepPartial4193<NestedConfig4193>;
  path?: ConfigPaths4193;
}

const HeavyComponent4193 = memo(function HeavyComponent4193({ config }: HeavyProps4193) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4193) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4193 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4193: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4193.displayName = 'HeavyComponent4193';
export default HeavyComponent4193;
