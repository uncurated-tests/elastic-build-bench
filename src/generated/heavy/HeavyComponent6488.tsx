'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6488<T> = T extends (infer U)[]
  ? DeepReadonlyArray6488<U>
  : T extends object
  ? DeepReadonlyObject6488<T>
  : T;

interface DeepReadonlyArray6488<T> extends ReadonlyArray<DeepReadonly6488<T>> {}

type DeepReadonlyObject6488<T> = {
  readonly [P in keyof T]: DeepReadonly6488<T[P]>;
};

type UnionToIntersection6488<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6488<T> = UnionToIntersection6488<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6488<T extends unknown[], V> = [...T, V];

type TuplifyUnion6488<T, L = LastOf6488<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6488<TuplifyUnion6488<Exclude<T, L>>, L>;

type DeepPartial6488<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6488<T[P]> }
  : T;

type Paths6488<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6488<K, Paths6488<T[K], Prev6488[D]>> : never }[keyof T]
  : never;

type Prev6488 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6488<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6488 {
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

type ConfigPaths6488 = Paths6488<NestedConfig6488>;

interface HeavyProps6488 {
  config: DeepPartial6488<NestedConfig6488>;
  path?: ConfigPaths6488;
}

const HeavyComponent6488 = memo(function HeavyComponent6488({ config }: HeavyProps6488) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6488) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6488 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6488: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6488.displayName = 'HeavyComponent6488';
export default HeavyComponent6488;
