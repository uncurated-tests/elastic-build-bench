'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6427<T> = T extends (infer U)[]
  ? DeepReadonlyArray6427<U>
  : T extends object
  ? DeepReadonlyObject6427<T>
  : T;

interface DeepReadonlyArray6427<T> extends ReadonlyArray<DeepReadonly6427<T>> {}

type DeepReadonlyObject6427<T> = {
  readonly [P in keyof T]: DeepReadonly6427<T[P]>;
};

type UnionToIntersection6427<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6427<T> = UnionToIntersection6427<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6427<T extends unknown[], V> = [...T, V];

type TuplifyUnion6427<T, L = LastOf6427<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6427<TuplifyUnion6427<Exclude<T, L>>, L>;

type DeepPartial6427<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6427<T[P]> }
  : T;

type Paths6427<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6427<K, Paths6427<T[K], Prev6427[D]>> : never }[keyof T]
  : never;

type Prev6427 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6427<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6427 {
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

type ConfigPaths6427 = Paths6427<NestedConfig6427>;

interface HeavyProps6427 {
  config: DeepPartial6427<NestedConfig6427>;
  path?: ConfigPaths6427;
}

const HeavyComponent6427 = memo(function HeavyComponent6427({ config }: HeavyProps6427) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6427) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6427 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6427: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6427.displayName = 'HeavyComponent6427';
export default HeavyComponent6427;
