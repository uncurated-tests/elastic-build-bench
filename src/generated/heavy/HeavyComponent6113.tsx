'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6113<T> = T extends (infer U)[]
  ? DeepReadonlyArray6113<U>
  : T extends object
  ? DeepReadonlyObject6113<T>
  : T;

interface DeepReadonlyArray6113<T> extends ReadonlyArray<DeepReadonly6113<T>> {}

type DeepReadonlyObject6113<T> = {
  readonly [P in keyof T]: DeepReadonly6113<T[P]>;
};

type UnionToIntersection6113<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6113<T> = UnionToIntersection6113<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6113<T extends unknown[], V> = [...T, V];

type TuplifyUnion6113<T, L = LastOf6113<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6113<TuplifyUnion6113<Exclude<T, L>>, L>;

type DeepPartial6113<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6113<T[P]> }
  : T;

type Paths6113<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6113<K, Paths6113<T[K], Prev6113[D]>> : never }[keyof T]
  : never;

type Prev6113 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6113<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6113 {
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

type ConfigPaths6113 = Paths6113<NestedConfig6113>;

interface HeavyProps6113 {
  config: DeepPartial6113<NestedConfig6113>;
  path?: ConfigPaths6113;
}

const HeavyComponent6113 = memo(function HeavyComponent6113({ config }: HeavyProps6113) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6113) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6113 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6113: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6113.displayName = 'HeavyComponent6113';
export default HeavyComponent6113;
