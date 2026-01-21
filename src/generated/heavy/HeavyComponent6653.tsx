'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6653<T> = T extends (infer U)[]
  ? DeepReadonlyArray6653<U>
  : T extends object
  ? DeepReadonlyObject6653<T>
  : T;

interface DeepReadonlyArray6653<T> extends ReadonlyArray<DeepReadonly6653<T>> {}

type DeepReadonlyObject6653<T> = {
  readonly [P in keyof T]: DeepReadonly6653<T[P]>;
};

type UnionToIntersection6653<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6653<T> = UnionToIntersection6653<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6653<T extends unknown[], V> = [...T, V];

type TuplifyUnion6653<T, L = LastOf6653<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6653<TuplifyUnion6653<Exclude<T, L>>, L>;

type DeepPartial6653<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6653<T[P]> }
  : T;

type Paths6653<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6653<K, Paths6653<T[K], Prev6653[D]>> : never }[keyof T]
  : never;

type Prev6653 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6653<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6653 {
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

type ConfigPaths6653 = Paths6653<NestedConfig6653>;

interface HeavyProps6653 {
  config: DeepPartial6653<NestedConfig6653>;
  path?: ConfigPaths6653;
}

const HeavyComponent6653 = memo(function HeavyComponent6653({ config }: HeavyProps6653) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6653) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6653 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6653: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6653.displayName = 'HeavyComponent6653';
export default HeavyComponent6653;
