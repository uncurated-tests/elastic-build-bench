'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6266<T> = T extends (infer U)[]
  ? DeepReadonlyArray6266<U>
  : T extends object
  ? DeepReadonlyObject6266<T>
  : T;

interface DeepReadonlyArray6266<T> extends ReadonlyArray<DeepReadonly6266<T>> {}

type DeepReadonlyObject6266<T> = {
  readonly [P in keyof T]: DeepReadonly6266<T[P]>;
};

type UnionToIntersection6266<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6266<T> = UnionToIntersection6266<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6266<T extends unknown[], V> = [...T, V];

type TuplifyUnion6266<T, L = LastOf6266<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6266<TuplifyUnion6266<Exclude<T, L>>, L>;

type DeepPartial6266<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6266<T[P]> }
  : T;

type Paths6266<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6266<K, Paths6266<T[K], Prev6266[D]>> : never }[keyof T]
  : never;

type Prev6266 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6266<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6266 {
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

type ConfigPaths6266 = Paths6266<NestedConfig6266>;

interface HeavyProps6266 {
  config: DeepPartial6266<NestedConfig6266>;
  path?: ConfigPaths6266;
}

const HeavyComponent6266 = memo(function HeavyComponent6266({ config }: HeavyProps6266) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6266) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6266 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6266: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6266.displayName = 'HeavyComponent6266';
export default HeavyComponent6266;
