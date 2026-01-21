'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6030<T> = T extends (infer U)[]
  ? DeepReadonlyArray6030<U>
  : T extends object
  ? DeepReadonlyObject6030<T>
  : T;

interface DeepReadonlyArray6030<T> extends ReadonlyArray<DeepReadonly6030<T>> {}

type DeepReadonlyObject6030<T> = {
  readonly [P in keyof T]: DeepReadonly6030<T[P]>;
};

type UnionToIntersection6030<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6030<T> = UnionToIntersection6030<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6030<T extends unknown[], V> = [...T, V];

type TuplifyUnion6030<T, L = LastOf6030<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6030<TuplifyUnion6030<Exclude<T, L>>, L>;

type DeepPartial6030<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6030<T[P]> }
  : T;

type Paths6030<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6030<K, Paths6030<T[K], Prev6030[D]>> : never }[keyof T]
  : never;

type Prev6030 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6030<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6030 {
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

type ConfigPaths6030 = Paths6030<NestedConfig6030>;

interface HeavyProps6030 {
  config: DeepPartial6030<NestedConfig6030>;
  path?: ConfigPaths6030;
}

const HeavyComponent6030 = memo(function HeavyComponent6030({ config }: HeavyProps6030) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6030) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6030 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6030: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6030.displayName = 'HeavyComponent6030';
export default HeavyComponent6030;
