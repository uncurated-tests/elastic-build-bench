'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6058<T> = T extends (infer U)[]
  ? DeepReadonlyArray6058<U>
  : T extends object
  ? DeepReadonlyObject6058<T>
  : T;

interface DeepReadonlyArray6058<T> extends ReadonlyArray<DeepReadonly6058<T>> {}

type DeepReadonlyObject6058<T> = {
  readonly [P in keyof T]: DeepReadonly6058<T[P]>;
};

type UnionToIntersection6058<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6058<T> = UnionToIntersection6058<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6058<T extends unknown[], V> = [...T, V];

type TuplifyUnion6058<T, L = LastOf6058<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6058<TuplifyUnion6058<Exclude<T, L>>, L>;

type DeepPartial6058<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6058<T[P]> }
  : T;

type Paths6058<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6058<K, Paths6058<T[K], Prev6058[D]>> : never }[keyof T]
  : never;

type Prev6058 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6058<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6058 {
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

type ConfigPaths6058 = Paths6058<NestedConfig6058>;

interface HeavyProps6058 {
  config: DeepPartial6058<NestedConfig6058>;
  path?: ConfigPaths6058;
}

const HeavyComponent6058 = memo(function HeavyComponent6058({ config }: HeavyProps6058) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6058) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6058 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6058: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6058.displayName = 'HeavyComponent6058';
export default HeavyComponent6058;
