'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6023<T> = T extends (infer U)[]
  ? DeepReadonlyArray6023<U>
  : T extends object
  ? DeepReadonlyObject6023<T>
  : T;

interface DeepReadonlyArray6023<T> extends ReadonlyArray<DeepReadonly6023<T>> {}

type DeepReadonlyObject6023<T> = {
  readonly [P in keyof T]: DeepReadonly6023<T[P]>;
};

type UnionToIntersection6023<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6023<T> = UnionToIntersection6023<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6023<T extends unknown[], V> = [...T, V];

type TuplifyUnion6023<T, L = LastOf6023<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6023<TuplifyUnion6023<Exclude<T, L>>, L>;

type DeepPartial6023<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6023<T[P]> }
  : T;

type Paths6023<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6023<K, Paths6023<T[K], Prev6023[D]>> : never }[keyof T]
  : never;

type Prev6023 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6023<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6023 {
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

type ConfigPaths6023 = Paths6023<NestedConfig6023>;

interface HeavyProps6023 {
  config: DeepPartial6023<NestedConfig6023>;
  path?: ConfigPaths6023;
}

const HeavyComponent6023 = memo(function HeavyComponent6023({ config }: HeavyProps6023) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6023) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6023 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6023: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6023.displayName = 'HeavyComponent6023';
export default HeavyComponent6023;
