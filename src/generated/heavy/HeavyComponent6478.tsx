'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6478<T> = T extends (infer U)[]
  ? DeepReadonlyArray6478<U>
  : T extends object
  ? DeepReadonlyObject6478<T>
  : T;

interface DeepReadonlyArray6478<T> extends ReadonlyArray<DeepReadonly6478<T>> {}

type DeepReadonlyObject6478<T> = {
  readonly [P in keyof T]: DeepReadonly6478<T[P]>;
};

type UnionToIntersection6478<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6478<T> = UnionToIntersection6478<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6478<T extends unknown[], V> = [...T, V];

type TuplifyUnion6478<T, L = LastOf6478<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6478<TuplifyUnion6478<Exclude<T, L>>, L>;

type DeepPartial6478<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6478<T[P]> }
  : T;

type Paths6478<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6478<K, Paths6478<T[K], Prev6478[D]>> : never }[keyof T]
  : never;

type Prev6478 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6478<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6478 {
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

type ConfigPaths6478 = Paths6478<NestedConfig6478>;

interface HeavyProps6478 {
  config: DeepPartial6478<NestedConfig6478>;
  path?: ConfigPaths6478;
}

const HeavyComponent6478 = memo(function HeavyComponent6478({ config }: HeavyProps6478) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6478) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6478 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6478: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6478.displayName = 'HeavyComponent6478';
export default HeavyComponent6478;
