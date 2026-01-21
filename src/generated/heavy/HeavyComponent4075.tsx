'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4075<T> = T extends (infer U)[]
  ? DeepReadonlyArray4075<U>
  : T extends object
  ? DeepReadonlyObject4075<T>
  : T;

interface DeepReadonlyArray4075<T> extends ReadonlyArray<DeepReadonly4075<T>> {}

type DeepReadonlyObject4075<T> = {
  readonly [P in keyof T]: DeepReadonly4075<T[P]>;
};

type UnionToIntersection4075<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4075<T> = UnionToIntersection4075<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4075<T extends unknown[], V> = [...T, V];

type TuplifyUnion4075<T, L = LastOf4075<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4075<TuplifyUnion4075<Exclude<T, L>>, L>;

type DeepPartial4075<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4075<T[P]> }
  : T;

type Paths4075<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4075<K, Paths4075<T[K], Prev4075[D]>> : never }[keyof T]
  : never;

type Prev4075 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4075<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4075 {
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

type ConfigPaths4075 = Paths4075<NestedConfig4075>;

interface HeavyProps4075 {
  config: DeepPartial4075<NestedConfig4075>;
  path?: ConfigPaths4075;
}

const HeavyComponent4075 = memo(function HeavyComponent4075({ config }: HeavyProps4075) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4075) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4075 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4075: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4075.displayName = 'HeavyComponent4075';
export default HeavyComponent4075;
