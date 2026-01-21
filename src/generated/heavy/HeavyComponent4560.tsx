'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4560<T> = T extends (infer U)[]
  ? DeepReadonlyArray4560<U>
  : T extends object
  ? DeepReadonlyObject4560<T>
  : T;

interface DeepReadonlyArray4560<T> extends ReadonlyArray<DeepReadonly4560<T>> {}

type DeepReadonlyObject4560<T> = {
  readonly [P in keyof T]: DeepReadonly4560<T[P]>;
};

type UnionToIntersection4560<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4560<T> = UnionToIntersection4560<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4560<T extends unknown[], V> = [...T, V];

type TuplifyUnion4560<T, L = LastOf4560<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4560<TuplifyUnion4560<Exclude<T, L>>, L>;

type DeepPartial4560<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4560<T[P]> }
  : T;

type Paths4560<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4560<K, Paths4560<T[K], Prev4560[D]>> : never }[keyof T]
  : never;

type Prev4560 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4560<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4560 {
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

type ConfigPaths4560 = Paths4560<NestedConfig4560>;

interface HeavyProps4560 {
  config: DeepPartial4560<NestedConfig4560>;
  path?: ConfigPaths4560;
}

const HeavyComponent4560 = memo(function HeavyComponent4560({ config }: HeavyProps4560) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4560) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4560 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4560: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4560.displayName = 'HeavyComponent4560';
export default HeavyComponent4560;
