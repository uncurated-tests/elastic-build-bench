'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6148<T> = T extends (infer U)[]
  ? DeepReadonlyArray6148<U>
  : T extends object
  ? DeepReadonlyObject6148<T>
  : T;

interface DeepReadonlyArray6148<T> extends ReadonlyArray<DeepReadonly6148<T>> {}

type DeepReadonlyObject6148<T> = {
  readonly [P in keyof T]: DeepReadonly6148<T[P]>;
};

type UnionToIntersection6148<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6148<T> = UnionToIntersection6148<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6148<T extends unknown[], V> = [...T, V];

type TuplifyUnion6148<T, L = LastOf6148<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6148<TuplifyUnion6148<Exclude<T, L>>, L>;

type DeepPartial6148<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6148<T[P]> }
  : T;

type Paths6148<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6148<K, Paths6148<T[K], Prev6148[D]>> : never }[keyof T]
  : never;

type Prev6148 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6148<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6148 {
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

type ConfigPaths6148 = Paths6148<NestedConfig6148>;

interface HeavyProps6148 {
  config: DeepPartial6148<NestedConfig6148>;
  path?: ConfigPaths6148;
}

const HeavyComponent6148 = memo(function HeavyComponent6148({ config }: HeavyProps6148) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6148) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6148 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6148: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6148.displayName = 'HeavyComponent6148';
export default HeavyComponent6148;
