'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6925<T> = T extends (infer U)[]
  ? DeepReadonlyArray6925<U>
  : T extends object
  ? DeepReadonlyObject6925<T>
  : T;

interface DeepReadonlyArray6925<T> extends ReadonlyArray<DeepReadonly6925<T>> {}

type DeepReadonlyObject6925<T> = {
  readonly [P in keyof T]: DeepReadonly6925<T[P]>;
};

type UnionToIntersection6925<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6925<T> = UnionToIntersection6925<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6925<T extends unknown[], V> = [...T, V];

type TuplifyUnion6925<T, L = LastOf6925<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6925<TuplifyUnion6925<Exclude<T, L>>, L>;

type DeepPartial6925<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6925<T[P]> }
  : T;

type Paths6925<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6925<K, Paths6925<T[K], Prev6925[D]>> : never }[keyof T]
  : never;

type Prev6925 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6925<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6925 {
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

type ConfigPaths6925 = Paths6925<NestedConfig6925>;

interface HeavyProps6925 {
  config: DeepPartial6925<NestedConfig6925>;
  path?: ConfigPaths6925;
}

const HeavyComponent6925 = memo(function HeavyComponent6925({ config }: HeavyProps6925) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6925) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6925 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6925: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6925.displayName = 'HeavyComponent6925';
export default HeavyComponent6925;
