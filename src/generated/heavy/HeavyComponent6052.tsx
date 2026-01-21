'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6052<T> = T extends (infer U)[]
  ? DeepReadonlyArray6052<U>
  : T extends object
  ? DeepReadonlyObject6052<T>
  : T;

interface DeepReadonlyArray6052<T> extends ReadonlyArray<DeepReadonly6052<T>> {}

type DeepReadonlyObject6052<T> = {
  readonly [P in keyof T]: DeepReadonly6052<T[P]>;
};

type UnionToIntersection6052<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6052<T> = UnionToIntersection6052<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6052<T extends unknown[], V> = [...T, V];

type TuplifyUnion6052<T, L = LastOf6052<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6052<TuplifyUnion6052<Exclude<T, L>>, L>;

type DeepPartial6052<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6052<T[P]> }
  : T;

type Paths6052<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6052<K, Paths6052<T[K], Prev6052[D]>> : never }[keyof T]
  : never;

type Prev6052 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6052<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6052 {
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

type ConfigPaths6052 = Paths6052<NestedConfig6052>;

interface HeavyProps6052 {
  config: DeepPartial6052<NestedConfig6052>;
  path?: ConfigPaths6052;
}

const HeavyComponent6052 = memo(function HeavyComponent6052({ config }: HeavyProps6052) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6052) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6052 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6052: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6052.displayName = 'HeavyComponent6052';
export default HeavyComponent6052;
