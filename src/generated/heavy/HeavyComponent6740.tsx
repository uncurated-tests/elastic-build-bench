'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6740<T> = T extends (infer U)[]
  ? DeepReadonlyArray6740<U>
  : T extends object
  ? DeepReadonlyObject6740<T>
  : T;

interface DeepReadonlyArray6740<T> extends ReadonlyArray<DeepReadonly6740<T>> {}

type DeepReadonlyObject6740<T> = {
  readonly [P in keyof T]: DeepReadonly6740<T[P]>;
};

type UnionToIntersection6740<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6740<T> = UnionToIntersection6740<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6740<T extends unknown[], V> = [...T, V];

type TuplifyUnion6740<T, L = LastOf6740<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6740<TuplifyUnion6740<Exclude<T, L>>, L>;

type DeepPartial6740<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6740<T[P]> }
  : T;

type Paths6740<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6740<K, Paths6740<T[K], Prev6740[D]>> : never }[keyof T]
  : never;

type Prev6740 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6740<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6740 {
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

type ConfigPaths6740 = Paths6740<NestedConfig6740>;

interface HeavyProps6740 {
  config: DeepPartial6740<NestedConfig6740>;
  path?: ConfigPaths6740;
}

const HeavyComponent6740 = memo(function HeavyComponent6740({ config }: HeavyProps6740) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6740) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6740 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6740: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6740.displayName = 'HeavyComponent6740';
export default HeavyComponent6740;
