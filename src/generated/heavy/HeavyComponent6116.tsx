'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6116<T> = T extends (infer U)[]
  ? DeepReadonlyArray6116<U>
  : T extends object
  ? DeepReadonlyObject6116<T>
  : T;

interface DeepReadonlyArray6116<T> extends ReadonlyArray<DeepReadonly6116<T>> {}

type DeepReadonlyObject6116<T> = {
  readonly [P in keyof T]: DeepReadonly6116<T[P]>;
};

type UnionToIntersection6116<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6116<T> = UnionToIntersection6116<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6116<T extends unknown[], V> = [...T, V];

type TuplifyUnion6116<T, L = LastOf6116<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6116<TuplifyUnion6116<Exclude<T, L>>, L>;

type DeepPartial6116<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6116<T[P]> }
  : T;

type Paths6116<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6116<K, Paths6116<T[K], Prev6116[D]>> : never }[keyof T]
  : never;

type Prev6116 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6116<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6116 {
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

type ConfigPaths6116 = Paths6116<NestedConfig6116>;

interface HeavyProps6116 {
  config: DeepPartial6116<NestedConfig6116>;
  path?: ConfigPaths6116;
}

const HeavyComponent6116 = memo(function HeavyComponent6116({ config }: HeavyProps6116) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6116) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6116 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6116: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6116.displayName = 'HeavyComponent6116';
export default HeavyComponent6116;
