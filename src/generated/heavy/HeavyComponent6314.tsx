'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6314<T> = T extends (infer U)[]
  ? DeepReadonlyArray6314<U>
  : T extends object
  ? DeepReadonlyObject6314<T>
  : T;

interface DeepReadonlyArray6314<T> extends ReadonlyArray<DeepReadonly6314<T>> {}

type DeepReadonlyObject6314<T> = {
  readonly [P in keyof T]: DeepReadonly6314<T[P]>;
};

type UnionToIntersection6314<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6314<T> = UnionToIntersection6314<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6314<T extends unknown[], V> = [...T, V];

type TuplifyUnion6314<T, L = LastOf6314<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6314<TuplifyUnion6314<Exclude<T, L>>, L>;

type DeepPartial6314<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6314<T[P]> }
  : T;

type Paths6314<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6314<K, Paths6314<T[K], Prev6314[D]>> : never }[keyof T]
  : never;

type Prev6314 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6314<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6314 {
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

type ConfigPaths6314 = Paths6314<NestedConfig6314>;

interface HeavyProps6314 {
  config: DeepPartial6314<NestedConfig6314>;
  path?: ConfigPaths6314;
}

const HeavyComponent6314 = memo(function HeavyComponent6314({ config }: HeavyProps6314) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6314) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6314 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6314: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6314.displayName = 'HeavyComponent6314';
export default HeavyComponent6314;
