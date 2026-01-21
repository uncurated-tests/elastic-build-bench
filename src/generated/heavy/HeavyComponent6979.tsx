'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6979<T> = T extends (infer U)[]
  ? DeepReadonlyArray6979<U>
  : T extends object
  ? DeepReadonlyObject6979<T>
  : T;

interface DeepReadonlyArray6979<T> extends ReadonlyArray<DeepReadonly6979<T>> {}

type DeepReadonlyObject6979<T> = {
  readonly [P in keyof T]: DeepReadonly6979<T[P]>;
};

type UnionToIntersection6979<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6979<T> = UnionToIntersection6979<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6979<T extends unknown[], V> = [...T, V];

type TuplifyUnion6979<T, L = LastOf6979<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6979<TuplifyUnion6979<Exclude<T, L>>, L>;

type DeepPartial6979<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6979<T[P]> }
  : T;

type Paths6979<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6979<K, Paths6979<T[K], Prev6979[D]>> : never }[keyof T]
  : never;

type Prev6979 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6979<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6979 {
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

type ConfigPaths6979 = Paths6979<NestedConfig6979>;

interface HeavyProps6979 {
  config: DeepPartial6979<NestedConfig6979>;
  path?: ConfigPaths6979;
}

const HeavyComponent6979 = memo(function HeavyComponent6979({ config }: HeavyProps6979) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6979) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6979 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6979: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6979.displayName = 'HeavyComponent6979';
export default HeavyComponent6979;
