'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6861<T> = T extends (infer U)[]
  ? DeepReadonlyArray6861<U>
  : T extends object
  ? DeepReadonlyObject6861<T>
  : T;

interface DeepReadonlyArray6861<T> extends ReadonlyArray<DeepReadonly6861<T>> {}

type DeepReadonlyObject6861<T> = {
  readonly [P in keyof T]: DeepReadonly6861<T[P]>;
};

type UnionToIntersection6861<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6861<T> = UnionToIntersection6861<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6861<T extends unknown[], V> = [...T, V];

type TuplifyUnion6861<T, L = LastOf6861<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6861<TuplifyUnion6861<Exclude<T, L>>, L>;

type DeepPartial6861<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6861<T[P]> }
  : T;

type Paths6861<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6861<K, Paths6861<T[K], Prev6861[D]>> : never }[keyof T]
  : never;

type Prev6861 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6861<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6861 {
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

type ConfigPaths6861 = Paths6861<NestedConfig6861>;

interface HeavyProps6861 {
  config: DeepPartial6861<NestedConfig6861>;
  path?: ConfigPaths6861;
}

const HeavyComponent6861 = memo(function HeavyComponent6861({ config }: HeavyProps6861) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6861) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6861 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6861: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6861.displayName = 'HeavyComponent6861';
export default HeavyComponent6861;
