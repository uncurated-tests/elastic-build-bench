'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6567<T> = T extends (infer U)[]
  ? DeepReadonlyArray6567<U>
  : T extends object
  ? DeepReadonlyObject6567<T>
  : T;

interface DeepReadonlyArray6567<T> extends ReadonlyArray<DeepReadonly6567<T>> {}

type DeepReadonlyObject6567<T> = {
  readonly [P in keyof T]: DeepReadonly6567<T[P]>;
};

type UnionToIntersection6567<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6567<T> = UnionToIntersection6567<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6567<T extends unknown[], V> = [...T, V];

type TuplifyUnion6567<T, L = LastOf6567<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6567<TuplifyUnion6567<Exclude<T, L>>, L>;

type DeepPartial6567<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6567<T[P]> }
  : T;

type Paths6567<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6567<K, Paths6567<T[K], Prev6567[D]>> : never }[keyof T]
  : never;

type Prev6567 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6567<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6567 {
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

type ConfigPaths6567 = Paths6567<NestedConfig6567>;

interface HeavyProps6567 {
  config: DeepPartial6567<NestedConfig6567>;
  path?: ConfigPaths6567;
}

const HeavyComponent6567 = memo(function HeavyComponent6567({ config }: HeavyProps6567) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6567) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6567 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6567: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6567.displayName = 'HeavyComponent6567';
export default HeavyComponent6567;
