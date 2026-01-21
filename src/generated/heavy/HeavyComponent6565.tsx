'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6565<T> = T extends (infer U)[]
  ? DeepReadonlyArray6565<U>
  : T extends object
  ? DeepReadonlyObject6565<T>
  : T;

interface DeepReadonlyArray6565<T> extends ReadonlyArray<DeepReadonly6565<T>> {}

type DeepReadonlyObject6565<T> = {
  readonly [P in keyof T]: DeepReadonly6565<T[P]>;
};

type UnionToIntersection6565<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6565<T> = UnionToIntersection6565<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6565<T extends unknown[], V> = [...T, V];

type TuplifyUnion6565<T, L = LastOf6565<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6565<TuplifyUnion6565<Exclude<T, L>>, L>;

type DeepPartial6565<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6565<T[P]> }
  : T;

type Paths6565<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6565<K, Paths6565<T[K], Prev6565[D]>> : never }[keyof T]
  : never;

type Prev6565 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6565<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6565 {
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

type ConfigPaths6565 = Paths6565<NestedConfig6565>;

interface HeavyProps6565 {
  config: DeepPartial6565<NestedConfig6565>;
  path?: ConfigPaths6565;
}

const HeavyComponent6565 = memo(function HeavyComponent6565({ config }: HeavyProps6565) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6565) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6565 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6565: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6565.displayName = 'HeavyComponent6565';
export default HeavyComponent6565;
