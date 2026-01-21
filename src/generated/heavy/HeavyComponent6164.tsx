'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6164<T> = T extends (infer U)[]
  ? DeepReadonlyArray6164<U>
  : T extends object
  ? DeepReadonlyObject6164<T>
  : T;

interface DeepReadonlyArray6164<T> extends ReadonlyArray<DeepReadonly6164<T>> {}

type DeepReadonlyObject6164<T> = {
  readonly [P in keyof T]: DeepReadonly6164<T[P]>;
};

type UnionToIntersection6164<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6164<T> = UnionToIntersection6164<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6164<T extends unknown[], V> = [...T, V];

type TuplifyUnion6164<T, L = LastOf6164<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6164<TuplifyUnion6164<Exclude<T, L>>, L>;

type DeepPartial6164<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6164<T[P]> }
  : T;

type Paths6164<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6164<K, Paths6164<T[K], Prev6164[D]>> : never }[keyof T]
  : never;

type Prev6164 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6164<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6164 {
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

type ConfigPaths6164 = Paths6164<NestedConfig6164>;

interface HeavyProps6164 {
  config: DeepPartial6164<NestedConfig6164>;
  path?: ConfigPaths6164;
}

const HeavyComponent6164 = memo(function HeavyComponent6164({ config }: HeavyProps6164) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6164) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6164 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6164: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6164.displayName = 'HeavyComponent6164';
export default HeavyComponent6164;
