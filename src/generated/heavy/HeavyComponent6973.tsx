'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6973<T> = T extends (infer U)[]
  ? DeepReadonlyArray6973<U>
  : T extends object
  ? DeepReadonlyObject6973<T>
  : T;

interface DeepReadonlyArray6973<T> extends ReadonlyArray<DeepReadonly6973<T>> {}

type DeepReadonlyObject6973<T> = {
  readonly [P in keyof T]: DeepReadonly6973<T[P]>;
};

type UnionToIntersection6973<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6973<T> = UnionToIntersection6973<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6973<T extends unknown[], V> = [...T, V];

type TuplifyUnion6973<T, L = LastOf6973<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6973<TuplifyUnion6973<Exclude<T, L>>, L>;

type DeepPartial6973<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6973<T[P]> }
  : T;

type Paths6973<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6973<K, Paths6973<T[K], Prev6973[D]>> : never }[keyof T]
  : never;

type Prev6973 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6973<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6973 {
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

type ConfigPaths6973 = Paths6973<NestedConfig6973>;

interface HeavyProps6973 {
  config: DeepPartial6973<NestedConfig6973>;
  path?: ConfigPaths6973;
}

const HeavyComponent6973 = memo(function HeavyComponent6973({ config }: HeavyProps6973) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6973) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6973 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6973: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6973.displayName = 'HeavyComponent6973';
export default HeavyComponent6973;
