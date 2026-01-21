'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6774<T> = T extends (infer U)[]
  ? DeepReadonlyArray6774<U>
  : T extends object
  ? DeepReadonlyObject6774<T>
  : T;

interface DeepReadonlyArray6774<T> extends ReadonlyArray<DeepReadonly6774<T>> {}

type DeepReadonlyObject6774<T> = {
  readonly [P in keyof T]: DeepReadonly6774<T[P]>;
};

type UnionToIntersection6774<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6774<T> = UnionToIntersection6774<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6774<T extends unknown[], V> = [...T, V];

type TuplifyUnion6774<T, L = LastOf6774<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6774<TuplifyUnion6774<Exclude<T, L>>, L>;

type DeepPartial6774<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6774<T[P]> }
  : T;

type Paths6774<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6774<K, Paths6774<T[K], Prev6774[D]>> : never }[keyof T]
  : never;

type Prev6774 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6774<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6774 {
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

type ConfigPaths6774 = Paths6774<NestedConfig6774>;

interface HeavyProps6774 {
  config: DeepPartial6774<NestedConfig6774>;
  path?: ConfigPaths6774;
}

const HeavyComponent6774 = memo(function HeavyComponent6774({ config }: HeavyProps6774) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6774) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6774 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6774: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6774.displayName = 'HeavyComponent6774';
export default HeavyComponent6774;
