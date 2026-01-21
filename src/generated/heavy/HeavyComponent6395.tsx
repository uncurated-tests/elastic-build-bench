'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6395<T> = T extends (infer U)[]
  ? DeepReadonlyArray6395<U>
  : T extends object
  ? DeepReadonlyObject6395<T>
  : T;

interface DeepReadonlyArray6395<T> extends ReadonlyArray<DeepReadonly6395<T>> {}

type DeepReadonlyObject6395<T> = {
  readonly [P in keyof T]: DeepReadonly6395<T[P]>;
};

type UnionToIntersection6395<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6395<T> = UnionToIntersection6395<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6395<T extends unknown[], V> = [...T, V];

type TuplifyUnion6395<T, L = LastOf6395<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6395<TuplifyUnion6395<Exclude<T, L>>, L>;

type DeepPartial6395<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6395<T[P]> }
  : T;

type Paths6395<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6395<K, Paths6395<T[K], Prev6395[D]>> : never }[keyof T]
  : never;

type Prev6395 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6395<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6395 {
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

type ConfigPaths6395 = Paths6395<NestedConfig6395>;

interface HeavyProps6395 {
  config: DeepPartial6395<NestedConfig6395>;
  path?: ConfigPaths6395;
}

const HeavyComponent6395 = memo(function HeavyComponent6395({ config }: HeavyProps6395) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6395) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6395 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6395: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6395.displayName = 'HeavyComponent6395';
export default HeavyComponent6395;
