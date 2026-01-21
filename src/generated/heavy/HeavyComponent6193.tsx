'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6193<T> = T extends (infer U)[]
  ? DeepReadonlyArray6193<U>
  : T extends object
  ? DeepReadonlyObject6193<T>
  : T;

interface DeepReadonlyArray6193<T> extends ReadonlyArray<DeepReadonly6193<T>> {}

type DeepReadonlyObject6193<T> = {
  readonly [P in keyof T]: DeepReadonly6193<T[P]>;
};

type UnionToIntersection6193<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6193<T> = UnionToIntersection6193<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6193<T extends unknown[], V> = [...T, V];

type TuplifyUnion6193<T, L = LastOf6193<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6193<TuplifyUnion6193<Exclude<T, L>>, L>;

type DeepPartial6193<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6193<T[P]> }
  : T;

type Paths6193<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6193<K, Paths6193<T[K], Prev6193[D]>> : never }[keyof T]
  : never;

type Prev6193 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6193<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6193 {
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

type ConfigPaths6193 = Paths6193<NestedConfig6193>;

interface HeavyProps6193 {
  config: DeepPartial6193<NestedConfig6193>;
  path?: ConfigPaths6193;
}

const HeavyComponent6193 = memo(function HeavyComponent6193({ config }: HeavyProps6193) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6193) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6193 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6193: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6193.displayName = 'HeavyComponent6193';
export default HeavyComponent6193;
