'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4854<T> = T extends (infer U)[]
  ? DeepReadonlyArray4854<U>
  : T extends object
  ? DeepReadonlyObject4854<T>
  : T;

interface DeepReadonlyArray4854<T> extends ReadonlyArray<DeepReadonly4854<T>> {}

type DeepReadonlyObject4854<T> = {
  readonly [P in keyof T]: DeepReadonly4854<T[P]>;
};

type UnionToIntersection4854<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4854<T> = UnionToIntersection4854<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4854<T extends unknown[], V> = [...T, V];

type TuplifyUnion4854<T, L = LastOf4854<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4854<TuplifyUnion4854<Exclude<T, L>>, L>;

type DeepPartial4854<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4854<T[P]> }
  : T;

type Paths4854<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4854<K, Paths4854<T[K], Prev4854[D]>> : never }[keyof T]
  : never;

type Prev4854 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4854<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4854 {
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

type ConfigPaths4854 = Paths4854<NestedConfig4854>;

interface HeavyProps4854 {
  config: DeepPartial4854<NestedConfig4854>;
  path?: ConfigPaths4854;
}

const HeavyComponent4854 = memo(function HeavyComponent4854({ config }: HeavyProps4854) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4854) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4854 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4854: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4854.displayName = 'HeavyComponent4854';
export default HeavyComponent4854;
