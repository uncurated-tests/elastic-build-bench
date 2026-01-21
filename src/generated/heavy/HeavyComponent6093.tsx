'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6093<T> = T extends (infer U)[]
  ? DeepReadonlyArray6093<U>
  : T extends object
  ? DeepReadonlyObject6093<T>
  : T;

interface DeepReadonlyArray6093<T> extends ReadonlyArray<DeepReadonly6093<T>> {}

type DeepReadonlyObject6093<T> = {
  readonly [P in keyof T]: DeepReadonly6093<T[P]>;
};

type UnionToIntersection6093<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6093<T> = UnionToIntersection6093<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6093<T extends unknown[], V> = [...T, V];

type TuplifyUnion6093<T, L = LastOf6093<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6093<TuplifyUnion6093<Exclude<T, L>>, L>;

type DeepPartial6093<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6093<T[P]> }
  : T;

type Paths6093<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6093<K, Paths6093<T[K], Prev6093[D]>> : never }[keyof T]
  : never;

type Prev6093 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6093<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6093 {
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

type ConfigPaths6093 = Paths6093<NestedConfig6093>;

interface HeavyProps6093 {
  config: DeepPartial6093<NestedConfig6093>;
  path?: ConfigPaths6093;
}

const HeavyComponent6093 = memo(function HeavyComponent6093({ config }: HeavyProps6093) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6093) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6093 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6093: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6093.displayName = 'HeavyComponent6093';
export default HeavyComponent6093;
