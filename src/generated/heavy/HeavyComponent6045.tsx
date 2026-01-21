'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6045<T> = T extends (infer U)[]
  ? DeepReadonlyArray6045<U>
  : T extends object
  ? DeepReadonlyObject6045<T>
  : T;

interface DeepReadonlyArray6045<T> extends ReadonlyArray<DeepReadonly6045<T>> {}

type DeepReadonlyObject6045<T> = {
  readonly [P in keyof T]: DeepReadonly6045<T[P]>;
};

type UnionToIntersection6045<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6045<T> = UnionToIntersection6045<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6045<T extends unknown[], V> = [...T, V];

type TuplifyUnion6045<T, L = LastOf6045<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6045<TuplifyUnion6045<Exclude<T, L>>, L>;

type DeepPartial6045<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6045<T[P]> }
  : T;

type Paths6045<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6045<K, Paths6045<T[K], Prev6045[D]>> : never }[keyof T]
  : never;

type Prev6045 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6045<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6045 {
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

type ConfigPaths6045 = Paths6045<NestedConfig6045>;

interface HeavyProps6045 {
  config: DeepPartial6045<NestedConfig6045>;
  path?: ConfigPaths6045;
}

const HeavyComponent6045 = memo(function HeavyComponent6045({ config }: HeavyProps6045) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6045) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6045 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6045: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6045.displayName = 'HeavyComponent6045';
export default HeavyComponent6045;
