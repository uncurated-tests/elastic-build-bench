'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6072<T> = T extends (infer U)[]
  ? DeepReadonlyArray6072<U>
  : T extends object
  ? DeepReadonlyObject6072<T>
  : T;

interface DeepReadonlyArray6072<T> extends ReadonlyArray<DeepReadonly6072<T>> {}

type DeepReadonlyObject6072<T> = {
  readonly [P in keyof T]: DeepReadonly6072<T[P]>;
};

type UnionToIntersection6072<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6072<T> = UnionToIntersection6072<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6072<T extends unknown[], V> = [...T, V];

type TuplifyUnion6072<T, L = LastOf6072<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6072<TuplifyUnion6072<Exclude<T, L>>, L>;

type DeepPartial6072<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6072<T[P]> }
  : T;

type Paths6072<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6072<K, Paths6072<T[K], Prev6072[D]>> : never }[keyof T]
  : never;

type Prev6072 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6072<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6072 {
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

type ConfigPaths6072 = Paths6072<NestedConfig6072>;

interface HeavyProps6072 {
  config: DeepPartial6072<NestedConfig6072>;
  path?: ConfigPaths6072;
}

const HeavyComponent6072 = memo(function HeavyComponent6072({ config }: HeavyProps6072) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6072) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6072 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6072: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6072.displayName = 'HeavyComponent6072';
export default HeavyComponent6072;
