'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4702<T> = T extends (infer U)[]
  ? DeepReadonlyArray4702<U>
  : T extends object
  ? DeepReadonlyObject4702<T>
  : T;

interface DeepReadonlyArray4702<T> extends ReadonlyArray<DeepReadonly4702<T>> {}

type DeepReadonlyObject4702<T> = {
  readonly [P in keyof T]: DeepReadonly4702<T[P]>;
};

type UnionToIntersection4702<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4702<T> = UnionToIntersection4702<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4702<T extends unknown[], V> = [...T, V];

type TuplifyUnion4702<T, L = LastOf4702<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4702<TuplifyUnion4702<Exclude<T, L>>, L>;

type DeepPartial4702<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4702<T[P]> }
  : T;

type Paths4702<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4702<K, Paths4702<T[K], Prev4702[D]>> : never }[keyof T]
  : never;

type Prev4702 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4702<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4702 {
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

type ConfigPaths4702 = Paths4702<NestedConfig4702>;

interface HeavyProps4702 {
  config: DeepPartial4702<NestedConfig4702>;
  path?: ConfigPaths4702;
}

const HeavyComponent4702 = memo(function HeavyComponent4702({ config }: HeavyProps4702) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4702) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4702 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4702: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4702.displayName = 'HeavyComponent4702';
export default HeavyComponent4702;
