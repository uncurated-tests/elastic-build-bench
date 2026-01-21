'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6451<T> = T extends (infer U)[]
  ? DeepReadonlyArray6451<U>
  : T extends object
  ? DeepReadonlyObject6451<T>
  : T;

interface DeepReadonlyArray6451<T> extends ReadonlyArray<DeepReadonly6451<T>> {}

type DeepReadonlyObject6451<T> = {
  readonly [P in keyof T]: DeepReadonly6451<T[P]>;
};

type UnionToIntersection6451<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6451<T> = UnionToIntersection6451<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6451<T extends unknown[], V> = [...T, V];

type TuplifyUnion6451<T, L = LastOf6451<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6451<TuplifyUnion6451<Exclude<T, L>>, L>;

type DeepPartial6451<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6451<T[P]> }
  : T;

type Paths6451<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6451<K, Paths6451<T[K], Prev6451[D]>> : never }[keyof T]
  : never;

type Prev6451 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6451<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6451 {
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

type ConfigPaths6451 = Paths6451<NestedConfig6451>;

interface HeavyProps6451 {
  config: DeepPartial6451<NestedConfig6451>;
  path?: ConfigPaths6451;
}

const HeavyComponent6451 = memo(function HeavyComponent6451({ config }: HeavyProps6451) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6451) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6451 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6451: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6451.displayName = 'HeavyComponent6451';
export default HeavyComponent6451;
