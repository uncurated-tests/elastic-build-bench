'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6350<T> = T extends (infer U)[]
  ? DeepReadonlyArray6350<U>
  : T extends object
  ? DeepReadonlyObject6350<T>
  : T;

interface DeepReadonlyArray6350<T> extends ReadonlyArray<DeepReadonly6350<T>> {}

type DeepReadonlyObject6350<T> = {
  readonly [P in keyof T]: DeepReadonly6350<T[P]>;
};

type UnionToIntersection6350<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6350<T> = UnionToIntersection6350<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6350<T extends unknown[], V> = [...T, V];

type TuplifyUnion6350<T, L = LastOf6350<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6350<TuplifyUnion6350<Exclude<T, L>>, L>;

type DeepPartial6350<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6350<T[P]> }
  : T;

type Paths6350<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6350<K, Paths6350<T[K], Prev6350[D]>> : never }[keyof T]
  : never;

type Prev6350 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6350<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6350 {
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

type ConfigPaths6350 = Paths6350<NestedConfig6350>;

interface HeavyProps6350 {
  config: DeepPartial6350<NestedConfig6350>;
  path?: ConfigPaths6350;
}

const HeavyComponent6350 = memo(function HeavyComponent6350({ config }: HeavyProps6350) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6350) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6350 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6350: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6350.displayName = 'HeavyComponent6350';
export default HeavyComponent6350;
