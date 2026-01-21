'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6413<T> = T extends (infer U)[]
  ? DeepReadonlyArray6413<U>
  : T extends object
  ? DeepReadonlyObject6413<T>
  : T;

interface DeepReadonlyArray6413<T> extends ReadonlyArray<DeepReadonly6413<T>> {}

type DeepReadonlyObject6413<T> = {
  readonly [P in keyof T]: DeepReadonly6413<T[P]>;
};

type UnionToIntersection6413<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6413<T> = UnionToIntersection6413<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6413<T extends unknown[], V> = [...T, V];

type TuplifyUnion6413<T, L = LastOf6413<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6413<TuplifyUnion6413<Exclude<T, L>>, L>;

type DeepPartial6413<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6413<T[P]> }
  : T;

type Paths6413<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6413<K, Paths6413<T[K], Prev6413[D]>> : never }[keyof T]
  : never;

type Prev6413 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6413<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6413 {
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

type ConfigPaths6413 = Paths6413<NestedConfig6413>;

interface HeavyProps6413 {
  config: DeepPartial6413<NestedConfig6413>;
  path?: ConfigPaths6413;
}

const HeavyComponent6413 = memo(function HeavyComponent6413({ config }: HeavyProps6413) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6413) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6413 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6413: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6413.displayName = 'HeavyComponent6413';
export default HeavyComponent6413;
