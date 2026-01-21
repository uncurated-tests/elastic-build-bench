'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6913<T> = T extends (infer U)[]
  ? DeepReadonlyArray6913<U>
  : T extends object
  ? DeepReadonlyObject6913<T>
  : T;

interface DeepReadonlyArray6913<T> extends ReadonlyArray<DeepReadonly6913<T>> {}

type DeepReadonlyObject6913<T> = {
  readonly [P in keyof T]: DeepReadonly6913<T[P]>;
};

type UnionToIntersection6913<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6913<T> = UnionToIntersection6913<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6913<T extends unknown[], V> = [...T, V];

type TuplifyUnion6913<T, L = LastOf6913<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6913<TuplifyUnion6913<Exclude<T, L>>, L>;

type DeepPartial6913<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6913<T[P]> }
  : T;

type Paths6913<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6913<K, Paths6913<T[K], Prev6913[D]>> : never }[keyof T]
  : never;

type Prev6913 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6913<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6913 {
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

type ConfigPaths6913 = Paths6913<NestedConfig6913>;

interface HeavyProps6913 {
  config: DeepPartial6913<NestedConfig6913>;
  path?: ConfigPaths6913;
}

const HeavyComponent6913 = memo(function HeavyComponent6913({ config }: HeavyProps6913) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6913) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6913 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6913: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6913.displayName = 'HeavyComponent6913';
export default HeavyComponent6913;
