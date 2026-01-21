'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4722<T> = T extends (infer U)[]
  ? DeepReadonlyArray4722<U>
  : T extends object
  ? DeepReadonlyObject4722<T>
  : T;

interface DeepReadonlyArray4722<T> extends ReadonlyArray<DeepReadonly4722<T>> {}

type DeepReadonlyObject4722<T> = {
  readonly [P in keyof T]: DeepReadonly4722<T[P]>;
};

type UnionToIntersection4722<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4722<T> = UnionToIntersection4722<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4722<T extends unknown[], V> = [...T, V];

type TuplifyUnion4722<T, L = LastOf4722<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4722<TuplifyUnion4722<Exclude<T, L>>, L>;

type DeepPartial4722<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4722<T[P]> }
  : T;

type Paths4722<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4722<K, Paths4722<T[K], Prev4722[D]>> : never }[keyof T]
  : never;

type Prev4722 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4722<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4722 {
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

type ConfigPaths4722 = Paths4722<NestedConfig4722>;

interface HeavyProps4722 {
  config: DeepPartial4722<NestedConfig4722>;
  path?: ConfigPaths4722;
}

const HeavyComponent4722 = memo(function HeavyComponent4722({ config }: HeavyProps4722) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4722) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4722 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4722: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4722.displayName = 'HeavyComponent4722';
export default HeavyComponent4722;
