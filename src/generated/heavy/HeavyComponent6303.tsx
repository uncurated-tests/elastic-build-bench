'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6303<T> = T extends (infer U)[]
  ? DeepReadonlyArray6303<U>
  : T extends object
  ? DeepReadonlyObject6303<T>
  : T;

interface DeepReadonlyArray6303<T> extends ReadonlyArray<DeepReadonly6303<T>> {}

type DeepReadonlyObject6303<T> = {
  readonly [P in keyof T]: DeepReadonly6303<T[P]>;
};

type UnionToIntersection6303<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6303<T> = UnionToIntersection6303<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6303<T extends unknown[], V> = [...T, V];

type TuplifyUnion6303<T, L = LastOf6303<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6303<TuplifyUnion6303<Exclude<T, L>>, L>;

type DeepPartial6303<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6303<T[P]> }
  : T;

type Paths6303<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6303<K, Paths6303<T[K], Prev6303[D]>> : never }[keyof T]
  : never;

type Prev6303 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6303<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6303 {
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

type ConfigPaths6303 = Paths6303<NestedConfig6303>;

interface HeavyProps6303 {
  config: DeepPartial6303<NestedConfig6303>;
  path?: ConfigPaths6303;
}

const HeavyComponent6303 = memo(function HeavyComponent6303({ config }: HeavyProps6303) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6303) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6303 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6303: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6303.displayName = 'HeavyComponent6303';
export default HeavyComponent6303;
