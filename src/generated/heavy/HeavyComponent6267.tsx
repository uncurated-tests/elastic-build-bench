'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6267<T> = T extends (infer U)[]
  ? DeepReadonlyArray6267<U>
  : T extends object
  ? DeepReadonlyObject6267<T>
  : T;

interface DeepReadonlyArray6267<T> extends ReadonlyArray<DeepReadonly6267<T>> {}

type DeepReadonlyObject6267<T> = {
  readonly [P in keyof T]: DeepReadonly6267<T[P]>;
};

type UnionToIntersection6267<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6267<T> = UnionToIntersection6267<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6267<T extends unknown[], V> = [...T, V];

type TuplifyUnion6267<T, L = LastOf6267<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6267<TuplifyUnion6267<Exclude<T, L>>, L>;

type DeepPartial6267<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6267<T[P]> }
  : T;

type Paths6267<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6267<K, Paths6267<T[K], Prev6267[D]>> : never }[keyof T]
  : never;

type Prev6267 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6267<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6267 {
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

type ConfigPaths6267 = Paths6267<NestedConfig6267>;

interface HeavyProps6267 {
  config: DeepPartial6267<NestedConfig6267>;
  path?: ConfigPaths6267;
}

const HeavyComponent6267 = memo(function HeavyComponent6267({ config }: HeavyProps6267) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6267) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6267 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6267: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6267.displayName = 'HeavyComponent6267';
export default HeavyComponent6267;
