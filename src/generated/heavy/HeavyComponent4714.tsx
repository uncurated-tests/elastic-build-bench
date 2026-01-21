'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4714<T> = T extends (infer U)[]
  ? DeepReadonlyArray4714<U>
  : T extends object
  ? DeepReadonlyObject4714<T>
  : T;

interface DeepReadonlyArray4714<T> extends ReadonlyArray<DeepReadonly4714<T>> {}

type DeepReadonlyObject4714<T> = {
  readonly [P in keyof T]: DeepReadonly4714<T[P]>;
};

type UnionToIntersection4714<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4714<T> = UnionToIntersection4714<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4714<T extends unknown[], V> = [...T, V];

type TuplifyUnion4714<T, L = LastOf4714<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4714<TuplifyUnion4714<Exclude<T, L>>, L>;

type DeepPartial4714<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4714<T[P]> }
  : T;

type Paths4714<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4714<K, Paths4714<T[K], Prev4714[D]>> : never }[keyof T]
  : never;

type Prev4714 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4714<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4714 {
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

type ConfigPaths4714 = Paths4714<NestedConfig4714>;

interface HeavyProps4714 {
  config: DeepPartial4714<NestedConfig4714>;
  path?: ConfigPaths4714;
}

const HeavyComponent4714 = memo(function HeavyComponent4714({ config }: HeavyProps4714) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4714) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4714 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4714: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4714.displayName = 'HeavyComponent4714';
export default HeavyComponent4714;
