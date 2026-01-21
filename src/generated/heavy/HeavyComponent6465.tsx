'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6465<T> = T extends (infer U)[]
  ? DeepReadonlyArray6465<U>
  : T extends object
  ? DeepReadonlyObject6465<T>
  : T;

interface DeepReadonlyArray6465<T> extends ReadonlyArray<DeepReadonly6465<T>> {}

type DeepReadonlyObject6465<T> = {
  readonly [P in keyof T]: DeepReadonly6465<T[P]>;
};

type UnionToIntersection6465<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6465<T> = UnionToIntersection6465<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6465<T extends unknown[], V> = [...T, V];

type TuplifyUnion6465<T, L = LastOf6465<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6465<TuplifyUnion6465<Exclude<T, L>>, L>;

type DeepPartial6465<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6465<T[P]> }
  : T;

type Paths6465<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6465<K, Paths6465<T[K], Prev6465[D]>> : never }[keyof T]
  : never;

type Prev6465 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6465<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6465 {
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

type ConfigPaths6465 = Paths6465<NestedConfig6465>;

interface HeavyProps6465 {
  config: DeepPartial6465<NestedConfig6465>;
  path?: ConfigPaths6465;
}

const HeavyComponent6465 = memo(function HeavyComponent6465({ config }: HeavyProps6465) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6465) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6465 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6465: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6465.displayName = 'HeavyComponent6465';
export default HeavyComponent6465;
