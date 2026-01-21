'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6336<T> = T extends (infer U)[]
  ? DeepReadonlyArray6336<U>
  : T extends object
  ? DeepReadonlyObject6336<T>
  : T;

interface DeepReadonlyArray6336<T> extends ReadonlyArray<DeepReadonly6336<T>> {}

type DeepReadonlyObject6336<T> = {
  readonly [P in keyof T]: DeepReadonly6336<T[P]>;
};

type UnionToIntersection6336<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6336<T> = UnionToIntersection6336<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6336<T extends unknown[], V> = [...T, V];

type TuplifyUnion6336<T, L = LastOf6336<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6336<TuplifyUnion6336<Exclude<T, L>>, L>;

type DeepPartial6336<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6336<T[P]> }
  : T;

type Paths6336<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6336<K, Paths6336<T[K], Prev6336[D]>> : never }[keyof T]
  : never;

type Prev6336 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6336<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6336 {
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

type ConfigPaths6336 = Paths6336<NestedConfig6336>;

interface HeavyProps6336 {
  config: DeepPartial6336<NestedConfig6336>;
  path?: ConfigPaths6336;
}

const HeavyComponent6336 = memo(function HeavyComponent6336({ config }: HeavyProps6336) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6336) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6336 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6336: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6336.displayName = 'HeavyComponent6336';
export default HeavyComponent6336;
