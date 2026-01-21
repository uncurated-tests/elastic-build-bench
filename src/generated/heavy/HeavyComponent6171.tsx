'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6171<T> = T extends (infer U)[]
  ? DeepReadonlyArray6171<U>
  : T extends object
  ? DeepReadonlyObject6171<T>
  : T;

interface DeepReadonlyArray6171<T> extends ReadonlyArray<DeepReadonly6171<T>> {}

type DeepReadonlyObject6171<T> = {
  readonly [P in keyof T]: DeepReadonly6171<T[P]>;
};

type UnionToIntersection6171<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6171<T> = UnionToIntersection6171<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6171<T extends unknown[], V> = [...T, V];

type TuplifyUnion6171<T, L = LastOf6171<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6171<TuplifyUnion6171<Exclude<T, L>>, L>;

type DeepPartial6171<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6171<T[P]> }
  : T;

type Paths6171<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6171<K, Paths6171<T[K], Prev6171[D]>> : never }[keyof T]
  : never;

type Prev6171 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6171<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6171 {
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

type ConfigPaths6171 = Paths6171<NestedConfig6171>;

interface HeavyProps6171 {
  config: DeepPartial6171<NestedConfig6171>;
  path?: ConfigPaths6171;
}

const HeavyComponent6171 = memo(function HeavyComponent6171({ config }: HeavyProps6171) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6171) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6171 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6171: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6171.displayName = 'HeavyComponent6171';
export default HeavyComponent6171;
