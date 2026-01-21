'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6257<T> = T extends (infer U)[]
  ? DeepReadonlyArray6257<U>
  : T extends object
  ? DeepReadonlyObject6257<T>
  : T;

interface DeepReadonlyArray6257<T> extends ReadonlyArray<DeepReadonly6257<T>> {}

type DeepReadonlyObject6257<T> = {
  readonly [P in keyof T]: DeepReadonly6257<T[P]>;
};

type UnionToIntersection6257<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6257<T> = UnionToIntersection6257<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6257<T extends unknown[], V> = [...T, V];

type TuplifyUnion6257<T, L = LastOf6257<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6257<TuplifyUnion6257<Exclude<T, L>>, L>;

type DeepPartial6257<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6257<T[P]> }
  : T;

type Paths6257<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6257<K, Paths6257<T[K], Prev6257[D]>> : never }[keyof T]
  : never;

type Prev6257 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6257<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6257 {
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

type ConfigPaths6257 = Paths6257<NestedConfig6257>;

interface HeavyProps6257 {
  config: DeepPartial6257<NestedConfig6257>;
  path?: ConfigPaths6257;
}

const HeavyComponent6257 = memo(function HeavyComponent6257({ config }: HeavyProps6257) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6257) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6257 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6257: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6257.displayName = 'HeavyComponent6257';
export default HeavyComponent6257;
