'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6600<T> = T extends (infer U)[]
  ? DeepReadonlyArray6600<U>
  : T extends object
  ? DeepReadonlyObject6600<T>
  : T;

interface DeepReadonlyArray6600<T> extends ReadonlyArray<DeepReadonly6600<T>> {}

type DeepReadonlyObject6600<T> = {
  readonly [P in keyof T]: DeepReadonly6600<T[P]>;
};

type UnionToIntersection6600<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6600<T> = UnionToIntersection6600<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6600<T extends unknown[], V> = [...T, V];

type TuplifyUnion6600<T, L = LastOf6600<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6600<TuplifyUnion6600<Exclude<T, L>>, L>;

type DeepPartial6600<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6600<T[P]> }
  : T;

type Paths6600<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6600<K, Paths6600<T[K], Prev6600[D]>> : never }[keyof T]
  : never;

type Prev6600 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6600<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6600 {
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

type ConfigPaths6600 = Paths6600<NestedConfig6600>;

interface HeavyProps6600 {
  config: DeepPartial6600<NestedConfig6600>;
  path?: ConfigPaths6600;
}

const HeavyComponent6600 = memo(function HeavyComponent6600({ config }: HeavyProps6600) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6600) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6600 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6600: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6600.displayName = 'HeavyComponent6600';
export default HeavyComponent6600;
