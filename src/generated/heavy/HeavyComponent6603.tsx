'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6603<T> = T extends (infer U)[]
  ? DeepReadonlyArray6603<U>
  : T extends object
  ? DeepReadonlyObject6603<T>
  : T;

interface DeepReadonlyArray6603<T> extends ReadonlyArray<DeepReadonly6603<T>> {}

type DeepReadonlyObject6603<T> = {
  readonly [P in keyof T]: DeepReadonly6603<T[P]>;
};

type UnionToIntersection6603<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6603<T> = UnionToIntersection6603<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6603<T extends unknown[], V> = [...T, V];

type TuplifyUnion6603<T, L = LastOf6603<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6603<TuplifyUnion6603<Exclude<T, L>>, L>;

type DeepPartial6603<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6603<T[P]> }
  : T;

type Paths6603<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6603<K, Paths6603<T[K], Prev6603[D]>> : never }[keyof T]
  : never;

type Prev6603 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6603<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6603 {
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

type ConfigPaths6603 = Paths6603<NestedConfig6603>;

interface HeavyProps6603 {
  config: DeepPartial6603<NestedConfig6603>;
  path?: ConfigPaths6603;
}

const HeavyComponent6603 = memo(function HeavyComponent6603({ config }: HeavyProps6603) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6603) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6603 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6603: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6603.displayName = 'HeavyComponent6603';
export default HeavyComponent6603;
