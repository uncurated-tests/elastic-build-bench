'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4727<T> = T extends (infer U)[]
  ? DeepReadonlyArray4727<U>
  : T extends object
  ? DeepReadonlyObject4727<T>
  : T;

interface DeepReadonlyArray4727<T> extends ReadonlyArray<DeepReadonly4727<T>> {}

type DeepReadonlyObject4727<T> = {
  readonly [P in keyof T]: DeepReadonly4727<T[P]>;
};

type UnionToIntersection4727<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4727<T> = UnionToIntersection4727<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4727<T extends unknown[], V> = [...T, V];

type TuplifyUnion4727<T, L = LastOf4727<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4727<TuplifyUnion4727<Exclude<T, L>>, L>;

type DeepPartial4727<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4727<T[P]> }
  : T;

type Paths4727<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4727<K, Paths4727<T[K], Prev4727[D]>> : never }[keyof T]
  : never;

type Prev4727 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4727<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4727 {
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

type ConfigPaths4727 = Paths4727<NestedConfig4727>;

interface HeavyProps4727 {
  config: DeepPartial4727<NestedConfig4727>;
  path?: ConfigPaths4727;
}

const HeavyComponent4727 = memo(function HeavyComponent4727({ config }: HeavyProps4727) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4727) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4727 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4727: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4727.displayName = 'HeavyComponent4727';
export default HeavyComponent4727;
