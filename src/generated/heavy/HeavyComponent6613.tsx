'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6613<T> = T extends (infer U)[]
  ? DeepReadonlyArray6613<U>
  : T extends object
  ? DeepReadonlyObject6613<T>
  : T;

interface DeepReadonlyArray6613<T> extends ReadonlyArray<DeepReadonly6613<T>> {}

type DeepReadonlyObject6613<T> = {
  readonly [P in keyof T]: DeepReadonly6613<T[P]>;
};

type UnionToIntersection6613<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6613<T> = UnionToIntersection6613<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6613<T extends unknown[], V> = [...T, V];

type TuplifyUnion6613<T, L = LastOf6613<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6613<TuplifyUnion6613<Exclude<T, L>>, L>;

type DeepPartial6613<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6613<T[P]> }
  : T;

type Paths6613<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6613<K, Paths6613<T[K], Prev6613[D]>> : never }[keyof T]
  : never;

type Prev6613 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6613<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6613 {
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

type ConfigPaths6613 = Paths6613<NestedConfig6613>;

interface HeavyProps6613 {
  config: DeepPartial6613<NestedConfig6613>;
  path?: ConfigPaths6613;
}

const HeavyComponent6613 = memo(function HeavyComponent6613({ config }: HeavyProps6613) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6613) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6613 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6613: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6613.displayName = 'HeavyComponent6613';
export default HeavyComponent6613;
