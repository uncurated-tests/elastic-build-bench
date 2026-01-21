'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6041<T> = T extends (infer U)[]
  ? DeepReadonlyArray6041<U>
  : T extends object
  ? DeepReadonlyObject6041<T>
  : T;

interface DeepReadonlyArray6041<T> extends ReadonlyArray<DeepReadonly6041<T>> {}

type DeepReadonlyObject6041<T> = {
  readonly [P in keyof T]: DeepReadonly6041<T[P]>;
};

type UnionToIntersection6041<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6041<T> = UnionToIntersection6041<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6041<T extends unknown[], V> = [...T, V];

type TuplifyUnion6041<T, L = LastOf6041<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6041<TuplifyUnion6041<Exclude<T, L>>, L>;

type DeepPartial6041<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6041<T[P]> }
  : T;

type Paths6041<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6041<K, Paths6041<T[K], Prev6041[D]>> : never }[keyof T]
  : never;

type Prev6041 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6041<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6041 {
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

type ConfigPaths6041 = Paths6041<NestedConfig6041>;

interface HeavyProps6041 {
  config: DeepPartial6041<NestedConfig6041>;
  path?: ConfigPaths6041;
}

const HeavyComponent6041 = memo(function HeavyComponent6041({ config }: HeavyProps6041) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6041) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6041 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6041: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6041.displayName = 'HeavyComponent6041';
export default HeavyComponent6041;
