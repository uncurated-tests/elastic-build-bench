'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6550<T> = T extends (infer U)[]
  ? DeepReadonlyArray6550<U>
  : T extends object
  ? DeepReadonlyObject6550<T>
  : T;

interface DeepReadonlyArray6550<T> extends ReadonlyArray<DeepReadonly6550<T>> {}

type DeepReadonlyObject6550<T> = {
  readonly [P in keyof T]: DeepReadonly6550<T[P]>;
};

type UnionToIntersection6550<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6550<T> = UnionToIntersection6550<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6550<T extends unknown[], V> = [...T, V];

type TuplifyUnion6550<T, L = LastOf6550<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6550<TuplifyUnion6550<Exclude<T, L>>, L>;

type DeepPartial6550<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6550<T[P]> }
  : T;

type Paths6550<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6550<K, Paths6550<T[K], Prev6550[D]>> : never }[keyof T]
  : never;

type Prev6550 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6550<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6550 {
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

type ConfigPaths6550 = Paths6550<NestedConfig6550>;

interface HeavyProps6550 {
  config: DeepPartial6550<NestedConfig6550>;
  path?: ConfigPaths6550;
}

const HeavyComponent6550 = memo(function HeavyComponent6550({ config }: HeavyProps6550) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6550) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6550 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6550: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6550.displayName = 'HeavyComponent6550';
export default HeavyComponent6550;
