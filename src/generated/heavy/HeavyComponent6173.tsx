'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6173<T> = T extends (infer U)[]
  ? DeepReadonlyArray6173<U>
  : T extends object
  ? DeepReadonlyObject6173<T>
  : T;

interface DeepReadonlyArray6173<T> extends ReadonlyArray<DeepReadonly6173<T>> {}

type DeepReadonlyObject6173<T> = {
  readonly [P in keyof T]: DeepReadonly6173<T[P]>;
};

type UnionToIntersection6173<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6173<T> = UnionToIntersection6173<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6173<T extends unknown[], V> = [...T, V];

type TuplifyUnion6173<T, L = LastOf6173<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6173<TuplifyUnion6173<Exclude<T, L>>, L>;

type DeepPartial6173<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6173<T[P]> }
  : T;

type Paths6173<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6173<K, Paths6173<T[K], Prev6173[D]>> : never }[keyof T]
  : never;

type Prev6173 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6173<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6173 {
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

type ConfigPaths6173 = Paths6173<NestedConfig6173>;

interface HeavyProps6173 {
  config: DeepPartial6173<NestedConfig6173>;
  path?: ConfigPaths6173;
}

const HeavyComponent6173 = memo(function HeavyComponent6173({ config }: HeavyProps6173) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6173) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6173 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6173: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6173.displayName = 'HeavyComponent6173';
export default HeavyComponent6173;
