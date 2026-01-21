'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6300<T> = T extends (infer U)[]
  ? DeepReadonlyArray6300<U>
  : T extends object
  ? DeepReadonlyObject6300<T>
  : T;

interface DeepReadonlyArray6300<T> extends ReadonlyArray<DeepReadonly6300<T>> {}

type DeepReadonlyObject6300<T> = {
  readonly [P in keyof T]: DeepReadonly6300<T[P]>;
};

type UnionToIntersection6300<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6300<T> = UnionToIntersection6300<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6300<T extends unknown[], V> = [...T, V];

type TuplifyUnion6300<T, L = LastOf6300<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6300<TuplifyUnion6300<Exclude<T, L>>, L>;

type DeepPartial6300<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6300<T[P]> }
  : T;

type Paths6300<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6300<K, Paths6300<T[K], Prev6300[D]>> : never }[keyof T]
  : never;

type Prev6300 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6300<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6300 {
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

type ConfigPaths6300 = Paths6300<NestedConfig6300>;

interface HeavyProps6300 {
  config: DeepPartial6300<NestedConfig6300>;
  path?: ConfigPaths6300;
}

const HeavyComponent6300 = memo(function HeavyComponent6300({ config }: HeavyProps6300) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6300) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6300 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6300: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6300.displayName = 'HeavyComponent6300';
export default HeavyComponent6300;
