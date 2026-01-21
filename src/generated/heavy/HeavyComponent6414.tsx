'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6414<T> = T extends (infer U)[]
  ? DeepReadonlyArray6414<U>
  : T extends object
  ? DeepReadonlyObject6414<T>
  : T;

interface DeepReadonlyArray6414<T> extends ReadonlyArray<DeepReadonly6414<T>> {}

type DeepReadonlyObject6414<T> = {
  readonly [P in keyof T]: DeepReadonly6414<T[P]>;
};

type UnionToIntersection6414<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6414<T> = UnionToIntersection6414<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6414<T extends unknown[], V> = [...T, V];

type TuplifyUnion6414<T, L = LastOf6414<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6414<TuplifyUnion6414<Exclude<T, L>>, L>;

type DeepPartial6414<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6414<T[P]> }
  : T;

type Paths6414<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6414<K, Paths6414<T[K], Prev6414[D]>> : never }[keyof T]
  : never;

type Prev6414 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6414<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6414 {
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

type ConfigPaths6414 = Paths6414<NestedConfig6414>;

interface HeavyProps6414 {
  config: DeepPartial6414<NestedConfig6414>;
  path?: ConfigPaths6414;
}

const HeavyComponent6414 = memo(function HeavyComponent6414({ config }: HeavyProps6414) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6414) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6414 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6414: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6414.displayName = 'HeavyComponent6414';
export default HeavyComponent6414;
