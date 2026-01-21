'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6080<T> = T extends (infer U)[]
  ? DeepReadonlyArray6080<U>
  : T extends object
  ? DeepReadonlyObject6080<T>
  : T;

interface DeepReadonlyArray6080<T> extends ReadonlyArray<DeepReadonly6080<T>> {}

type DeepReadonlyObject6080<T> = {
  readonly [P in keyof T]: DeepReadonly6080<T[P]>;
};

type UnionToIntersection6080<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6080<T> = UnionToIntersection6080<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6080<T extends unknown[], V> = [...T, V];

type TuplifyUnion6080<T, L = LastOf6080<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6080<TuplifyUnion6080<Exclude<T, L>>, L>;

type DeepPartial6080<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6080<T[P]> }
  : T;

type Paths6080<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6080<K, Paths6080<T[K], Prev6080[D]>> : never }[keyof T]
  : never;

type Prev6080 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6080<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6080 {
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

type ConfigPaths6080 = Paths6080<NestedConfig6080>;

interface HeavyProps6080 {
  config: DeepPartial6080<NestedConfig6080>;
  path?: ConfigPaths6080;
}

const HeavyComponent6080 = memo(function HeavyComponent6080({ config }: HeavyProps6080) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6080) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6080 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6080: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6080.displayName = 'HeavyComponent6080';
export default HeavyComponent6080;
