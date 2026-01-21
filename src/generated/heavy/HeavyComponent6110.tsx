'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6110<T> = T extends (infer U)[]
  ? DeepReadonlyArray6110<U>
  : T extends object
  ? DeepReadonlyObject6110<T>
  : T;

interface DeepReadonlyArray6110<T> extends ReadonlyArray<DeepReadonly6110<T>> {}

type DeepReadonlyObject6110<T> = {
  readonly [P in keyof T]: DeepReadonly6110<T[P]>;
};

type UnionToIntersection6110<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6110<T> = UnionToIntersection6110<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6110<T extends unknown[], V> = [...T, V];

type TuplifyUnion6110<T, L = LastOf6110<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6110<TuplifyUnion6110<Exclude<T, L>>, L>;

type DeepPartial6110<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6110<T[P]> }
  : T;

type Paths6110<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6110<K, Paths6110<T[K], Prev6110[D]>> : never }[keyof T]
  : never;

type Prev6110 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6110<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6110 {
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

type ConfigPaths6110 = Paths6110<NestedConfig6110>;

interface HeavyProps6110 {
  config: DeepPartial6110<NestedConfig6110>;
  path?: ConfigPaths6110;
}

const HeavyComponent6110 = memo(function HeavyComponent6110({ config }: HeavyProps6110) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6110) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6110 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6110: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6110.displayName = 'HeavyComponent6110';
export default HeavyComponent6110;
