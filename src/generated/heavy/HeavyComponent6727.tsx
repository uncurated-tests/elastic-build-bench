'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6727<T> = T extends (infer U)[]
  ? DeepReadonlyArray6727<U>
  : T extends object
  ? DeepReadonlyObject6727<T>
  : T;

interface DeepReadonlyArray6727<T> extends ReadonlyArray<DeepReadonly6727<T>> {}

type DeepReadonlyObject6727<T> = {
  readonly [P in keyof T]: DeepReadonly6727<T[P]>;
};

type UnionToIntersection6727<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6727<T> = UnionToIntersection6727<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6727<T extends unknown[], V> = [...T, V];

type TuplifyUnion6727<T, L = LastOf6727<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6727<TuplifyUnion6727<Exclude<T, L>>, L>;

type DeepPartial6727<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6727<T[P]> }
  : T;

type Paths6727<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6727<K, Paths6727<T[K], Prev6727[D]>> : never }[keyof T]
  : never;

type Prev6727 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6727<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6727 {
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

type ConfigPaths6727 = Paths6727<NestedConfig6727>;

interface HeavyProps6727 {
  config: DeepPartial6727<NestedConfig6727>;
  path?: ConfigPaths6727;
}

const HeavyComponent6727 = memo(function HeavyComponent6727({ config }: HeavyProps6727) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6727) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6727 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6727: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6727.displayName = 'HeavyComponent6727';
export default HeavyComponent6727;
