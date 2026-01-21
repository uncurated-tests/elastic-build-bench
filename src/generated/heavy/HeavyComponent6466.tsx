'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6466<T> = T extends (infer U)[]
  ? DeepReadonlyArray6466<U>
  : T extends object
  ? DeepReadonlyObject6466<T>
  : T;

interface DeepReadonlyArray6466<T> extends ReadonlyArray<DeepReadonly6466<T>> {}

type DeepReadonlyObject6466<T> = {
  readonly [P in keyof T]: DeepReadonly6466<T[P]>;
};

type UnionToIntersection6466<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6466<T> = UnionToIntersection6466<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6466<T extends unknown[], V> = [...T, V];

type TuplifyUnion6466<T, L = LastOf6466<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6466<TuplifyUnion6466<Exclude<T, L>>, L>;

type DeepPartial6466<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6466<T[P]> }
  : T;

type Paths6466<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6466<K, Paths6466<T[K], Prev6466[D]>> : never }[keyof T]
  : never;

type Prev6466 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6466<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6466 {
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

type ConfigPaths6466 = Paths6466<NestedConfig6466>;

interface HeavyProps6466 {
  config: DeepPartial6466<NestedConfig6466>;
  path?: ConfigPaths6466;
}

const HeavyComponent6466 = memo(function HeavyComponent6466({ config }: HeavyProps6466) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6466) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6466 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6466: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6466.displayName = 'HeavyComponent6466';
export default HeavyComponent6466;
