'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6280<T> = T extends (infer U)[]
  ? DeepReadonlyArray6280<U>
  : T extends object
  ? DeepReadonlyObject6280<T>
  : T;

interface DeepReadonlyArray6280<T> extends ReadonlyArray<DeepReadonly6280<T>> {}

type DeepReadonlyObject6280<T> = {
  readonly [P in keyof T]: DeepReadonly6280<T[P]>;
};

type UnionToIntersection6280<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6280<T> = UnionToIntersection6280<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6280<T extends unknown[], V> = [...T, V];

type TuplifyUnion6280<T, L = LastOf6280<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6280<TuplifyUnion6280<Exclude<T, L>>, L>;

type DeepPartial6280<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6280<T[P]> }
  : T;

type Paths6280<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6280<K, Paths6280<T[K], Prev6280[D]>> : never }[keyof T]
  : never;

type Prev6280 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6280<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6280 {
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

type ConfigPaths6280 = Paths6280<NestedConfig6280>;

interface HeavyProps6280 {
  config: DeepPartial6280<NestedConfig6280>;
  path?: ConfigPaths6280;
}

const HeavyComponent6280 = memo(function HeavyComponent6280({ config }: HeavyProps6280) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6280) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6280 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6280: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6280.displayName = 'HeavyComponent6280';
export default HeavyComponent6280;
