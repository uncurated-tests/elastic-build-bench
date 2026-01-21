'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6025<T> = T extends (infer U)[]
  ? DeepReadonlyArray6025<U>
  : T extends object
  ? DeepReadonlyObject6025<T>
  : T;

interface DeepReadonlyArray6025<T> extends ReadonlyArray<DeepReadonly6025<T>> {}

type DeepReadonlyObject6025<T> = {
  readonly [P in keyof T]: DeepReadonly6025<T[P]>;
};

type UnionToIntersection6025<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6025<T> = UnionToIntersection6025<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6025<T extends unknown[], V> = [...T, V];

type TuplifyUnion6025<T, L = LastOf6025<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6025<TuplifyUnion6025<Exclude<T, L>>, L>;

type DeepPartial6025<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6025<T[P]> }
  : T;

type Paths6025<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6025<K, Paths6025<T[K], Prev6025[D]>> : never }[keyof T]
  : never;

type Prev6025 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6025<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6025 {
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

type ConfigPaths6025 = Paths6025<NestedConfig6025>;

interface HeavyProps6025 {
  config: DeepPartial6025<NestedConfig6025>;
  path?: ConfigPaths6025;
}

const HeavyComponent6025 = memo(function HeavyComponent6025({ config }: HeavyProps6025) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6025) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6025 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6025: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6025.displayName = 'HeavyComponent6025';
export default HeavyComponent6025;
