'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6144<T> = T extends (infer U)[]
  ? DeepReadonlyArray6144<U>
  : T extends object
  ? DeepReadonlyObject6144<T>
  : T;

interface DeepReadonlyArray6144<T> extends ReadonlyArray<DeepReadonly6144<T>> {}

type DeepReadonlyObject6144<T> = {
  readonly [P in keyof T]: DeepReadonly6144<T[P]>;
};

type UnionToIntersection6144<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6144<T> = UnionToIntersection6144<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6144<T extends unknown[], V> = [...T, V];

type TuplifyUnion6144<T, L = LastOf6144<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6144<TuplifyUnion6144<Exclude<T, L>>, L>;

type DeepPartial6144<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6144<T[P]> }
  : T;

type Paths6144<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6144<K, Paths6144<T[K], Prev6144[D]>> : never }[keyof T]
  : never;

type Prev6144 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6144<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6144 {
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

type ConfigPaths6144 = Paths6144<NestedConfig6144>;

interface HeavyProps6144 {
  config: DeepPartial6144<NestedConfig6144>;
  path?: ConfigPaths6144;
}

const HeavyComponent6144 = memo(function HeavyComponent6144({ config }: HeavyProps6144) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6144) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6144 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6144: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6144.displayName = 'HeavyComponent6144';
export default HeavyComponent6144;
