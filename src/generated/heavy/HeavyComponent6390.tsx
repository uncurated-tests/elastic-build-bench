'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6390<T> = T extends (infer U)[]
  ? DeepReadonlyArray6390<U>
  : T extends object
  ? DeepReadonlyObject6390<T>
  : T;

interface DeepReadonlyArray6390<T> extends ReadonlyArray<DeepReadonly6390<T>> {}

type DeepReadonlyObject6390<T> = {
  readonly [P in keyof T]: DeepReadonly6390<T[P]>;
};

type UnionToIntersection6390<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6390<T> = UnionToIntersection6390<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6390<T extends unknown[], V> = [...T, V];

type TuplifyUnion6390<T, L = LastOf6390<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6390<TuplifyUnion6390<Exclude<T, L>>, L>;

type DeepPartial6390<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6390<T[P]> }
  : T;

type Paths6390<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6390<K, Paths6390<T[K], Prev6390[D]>> : never }[keyof T]
  : never;

type Prev6390 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6390<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6390 {
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

type ConfigPaths6390 = Paths6390<NestedConfig6390>;

interface HeavyProps6390 {
  config: DeepPartial6390<NestedConfig6390>;
  path?: ConfigPaths6390;
}

const HeavyComponent6390 = memo(function HeavyComponent6390({ config }: HeavyProps6390) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6390) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6390 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6390: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6390.displayName = 'HeavyComponent6390';
export default HeavyComponent6390;
