'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6500<T> = T extends (infer U)[]
  ? DeepReadonlyArray6500<U>
  : T extends object
  ? DeepReadonlyObject6500<T>
  : T;

interface DeepReadonlyArray6500<T> extends ReadonlyArray<DeepReadonly6500<T>> {}

type DeepReadonlyObject6500<T> = {
  readonly [P in keyof T]: DeepReadonly6500<T[P]>;
};

type UnionToIntersection6500<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6500<T> = UnionToIntersection6500<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6500<T extends unknown[], V> = [...T, V];

type TuplifyUnion6500<T, L = LastOf6500<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6500<TuplifyUnion6500<Exclude<T, L>>, L>;

type DeepPartial6500<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6500<T[P]> }
  : T;

type Paths6500<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6500<K, Paths6500<T[K], Prev6500[D]>> : never }[keyof T]
  : never;

type Prev6500 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6500<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6500 {
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

type ConfigPaths6500 = Paths6500<NestedConfig6500>;

interface HeavyProps6500 {
  config: DeepPartial6500<NestedConfig6500>;
  path?: ConfigPaths6500;
}

const HeavyComponent6500 = memo(function HeavyComponent6500({ config }: HeavyProps6500) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6500) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6500 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6500: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6500.displayName = 'HeavyComponent6500';
export default HeavyComponent6500;
