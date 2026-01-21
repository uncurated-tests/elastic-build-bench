'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6086<T> = T extends (infer U)[]
  ? DeepReadonlyArray6086<U>
  : T extends object
  ? DeepReadonlyObject6086<T>
  : T;

interface DeepReadonlyArray6086<T> extends ReadonlyArray<DeepReadonly6086<T>> {}

type DeepReadonlyObject6086<T> = {
  readonly [P in keyof T]: DeepReadonly6086<T[P]>;
};

type UnionToIntersection6086<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6086<T> = UnionToIntersection6086<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6086<T extends unknown[], V> = [...T, V];

type TuplifyUnion6086<T, L = LastOf6086<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6086<TuplifyUnion6086<Exclude<T, L>>, L>;

type DeepPartial6086<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6086<T[P]> }
  : T;

type Paths6086<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6086<K, Paths6086<T[K], Prev6086[D]>> : never }[keyof T]
  : never;

type Prev6086 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6086<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6086 {
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

type ConfigPaths6086 = Paths6086<NestedConfig6086>;

interface HeavyProps6086 {
  config: DeepPartial6086<NestedConfig6086>;
  path?: ConfigPaths6086;
}

const HeavyComponent6086 = memo(function HeavyComponent6086({ config }: HeavyProps6086) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6086) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6086 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6086: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6086.displayName = 'HeavyComponent6086';
export default HeavyComponent6086;
