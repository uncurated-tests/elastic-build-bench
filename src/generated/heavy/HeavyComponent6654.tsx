'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6654<T> = T extends (infer U)[]
  ? DeepReadonlyArray6654<U>
  : T extends object
  ? DeepReadonlyObject6654<T>
  : T;

interface DeepReadonlyArray6654<T> extends ReadonlyArray<DeepReadonly6654<T>> {}

type DeepReadonlyObject6654<T> = {
  readonly [P in keyof T]: DeepReadonly6654<T[P]>;
};

type UnionToIntersection6654<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6654<T> = UnionToIntersection6654<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6654<T extends unknown[], V> = [...T, V];

type TuplifyUnion6654<T, L = LastOf6654<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6654<TuplifyUnion6654<Exclude<T, L>>, L>;

type DeepPartial6654<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6654<T[P]> }
  : T;

type Paths6654<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6654<K, Paths6654<T[K], Prev6654[D]>> : never }[keyof T]
  : never;

type Prev6654 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6654<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6654 {
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

type ConfigPaths6654 = Paths6654<NestedConfig6654>;

interface HeavyProps6654 {
  config: DeepPartial6654<NestedConfig6654>;
  path?: ConfigPaths6654;
}

const HeavyComponent6654 = memo(function HeavyComponent6654({ config }: HeavyProps6654) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6654) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6654 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6654: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6654.displayName = 'HeavyComponent6654';
export default HeavyComponent6654;
