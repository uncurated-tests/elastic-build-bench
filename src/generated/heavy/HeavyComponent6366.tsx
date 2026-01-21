'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6366<T> = T extends (infer U)[]
  ? DeepReadonlyArray6366<U>
  : T extends object
  ? DeepReadonlyObject6366<T>
  : T;

interface DeepReadonlyArray6366<T> extends ReadonlyArray<DeepReadonly6366<T>> {}

type DeepReadonlyObject6366<T> = {
  readonly [P in keyof T]: DeepReadonly6366<T[P]>;
};

type UnionToIntersection6366<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6366<T> = UnionToIntersection6366<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6366<T extends unknown[], V> = [...T, V];

type TuplifyUnion6366<T, L = LastOf6366<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6366<TuplifyUnion6366<Exclude<T, L>>, L>;

type DeepPartial6366<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6366<T[P]> }
  : T;

type Paths6366<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6366<K, Paths6366<T[K], Prev6366[D]>> : never }[keyof T]
  : never;

type Prev6366 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6366<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6366 {
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

type ConfigPaths6366 = Paths6366<NestedConfig6366>;

interface HeavyProps6366 {
  config: DeepPartial6366<NestedConfig6366>;
  path?: ConfigPaths6366;
}

const HeavyComponent6366 = memo(function HeavyComponent6366({ config }: HeavyProps6366) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6366) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6366 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6366: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6366.displayName = 'HeavyComponent6366';
export default HeavyComponent6366;
