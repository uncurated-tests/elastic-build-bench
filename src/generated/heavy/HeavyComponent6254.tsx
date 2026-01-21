'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6254<T> = T extends (infer U)[]
  ? DeepReadonlyArray6254<U>
  : T extends object
  ? DeepReadonlyObject6254<T>
  : T;

interface DeepReadonlyArray6254<T> extends ReadonlyArray<DeepReadonly6254<T>> {}

type DeepReadonlyObject6254<T> = {
  readonly [P in keyof T]: DeepReadonly6254<T[P]>;
};

type UnionToIntersection6254<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6254<T> = UnionToIntersection6254<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6254<T extends unknown[], V> = [...T, V];

type TuplifyUnion6254<T, L = LastOf6254<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6254<TuplifyUnion6254<Exclude<T, L>>, L>;

type DeepPartial6254<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6254<T[P]> }
  : T;

type Paths6254<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6254<K, Paths6254<T[K], Prev6254[D]>> : never }[keyof T]
  : never;

type Prev6254 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6254<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6254 {
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

type ConfigPaths6254 = Paths6254<NestedConfig6254>;

interface HeavyProps6254 {
  config: DeepPartial6254<NestedConfig6254>;
  path?: ConfigPaths6254;
}

const HeavyComponent6254 = memo(function HeavyComponent6254({ config }: HeavyProps6254) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6254) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6254 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6254: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6254.displayName = 'HeavyComponent6254';
export default HeavyComponent6254;
