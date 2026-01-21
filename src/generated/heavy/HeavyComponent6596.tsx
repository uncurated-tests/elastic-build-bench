'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6596<T> = T extends (infer U)[]
  ? DeepReadonlyArray6596<U>
  : T extends object
  ? DeepReadonlyObject6596<T>
  : T;

interface DeepReadonlyArray6596<T> extends ReadonlyArray<DeepReadonly6596<T>> {}

type DeepReadonlyObject6596<T> = {
  readonly [P in keyof T]: DeepReadonly6596<T[P]>;
};

type UnionToIntersection6596<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6596<T> = UnionToIntersection6596<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6596<T extends unknown[], V> = [...T, V];

type TuplifyUnion6596<T, L = LastOf6596<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6596<TuplifyUnion6596<Exclude<T, L>>, L>;

type DeepPartial6596<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6596<T[P]> }
  : T;

type Paths6596<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6596<K, Paths6596<T[K], Prev6596[D]>> : never }[keyof T]
  : never;

type Prev6596 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6596<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6596 {
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

type ConfigPaths6596 = Paths6596<NestedConfig6596>;

interface HeavyProps6596 {
  config: DeepPartial6596<NestedConfig6596>;
  path?: ConfigPaths6596;
}

const HeavyComponent6596 = memo(function HeavyComponent6596({ config }: HeavyProps6596) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6596) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6596 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6596: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6596.displayName = 'HeavyComponent6596';
export default HeavyComponent6596;
