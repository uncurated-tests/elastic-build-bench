'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6100<T> = T extends (infer U)[]
  ? DeepReadonlyArray6100<U>
  : T extends object
  ? DeepReadonlyObject6100<T>
  : T;

interface DeepReadonlyArray6100<T> extends ReadonlyArray<DeepReadonly6100<T>> {}

type DeepReadonlyObject6100<T> = {
  readonly [P in keyof T]: DeepReadonly6100<T[P]>;
};

type UnionToIntersection6100<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6100<T> = UnionToIntersection6100<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6100<T extends unknown[], V> = [...T, V];

type TuplifyUnion6100<T, L = LastOf6100<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6100<TuplifyUnion6100<Exclude<T, L>>, L>;

type DeepPartial6100<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6100<T[P]> }
  : T;

type Paths6100<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6100<K, Paths6100<T[K], Prev6100[D]>> : never }[keyof T]
  : never;

type Prev6100 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6100<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6100 {
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

type ConfigPaths6100 = Paths6100<NestedConfig6100>;

interface HeavyProps6100 {
  config: DeepPartial6100<NestedConfig6100>;
  path?: ConfigPaths6100;
}

const HeavyComponent6100 = memo(function HeavyComponent6100({ config }: HeavyProps6100) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6100) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6100 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6100: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6100.displayName = 'HeavyComponent6100';
export default HeavyComponent6100;
