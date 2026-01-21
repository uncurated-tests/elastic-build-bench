'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6050<T> = T extends (infer U)[]
  ? DeepReadonlyArray6050<U>
  : T extends object
  ? DeepReadonlyObject6050<T>
  : T;

interface DeepReadonlyArray6050<T> extends ReadonlyArray<DeepReadonly6050<T>> {}

type DeepReadonlyObject6050<T> = {
  readonly [P in keyof T]: DeepReadonly6050<T[P]>;
};

type UnionToIntersection6050<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6050<T> = UnionToIntersection6050<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6050<T extends unknown[], V> = [...T, V];

type TuplifyUnion6050<T, L = LastOf6050<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6050<TuplifyUnion6050<Exclude<T, L>>, L>;

type DeepPartial6050<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6050<T[P]> }
  : T;

type Paths6050<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6050<K, Paths6050<T[K], Prev6050[D]>> : never }[keyof T]
  : never;

type Prev6050 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6050<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6050 {
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

type ConfigPaths6050 = Paths6050<NestedConfig6050>;

interface HeavyProps6050 {
  config: DeepPartial6050<NestedConfig6050>;
  path?: ConfigPaths6050;
}

const HeavyComponent6050 = memo(function HeavyComponent6050({ config }: HeavyProps6050) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6050) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6050 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6050: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6050.displayName = 'HeavyComponent6050';
export default HeavyComponent6050;
