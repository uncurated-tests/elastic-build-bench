'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6776<T> = T extends (infer U)[]
  ? DeepReadonlyArray6776<U>
  : T extends object
  ? DeepReadonlyObject6776<T>
  : T;

interface DeepReadonlyArray6776<T> extends ReadonlyArray<DeepReadonly6776<T>> {}

type DeepReadonlyObject6776<T> = {
  readonly [P in keyof T]: DeepReadonly6776<T[P]>;
};

type UnionToIntersection6776<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6776<T> = UnionToIntersection6776<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6776<T extends unknown[], V> = [...T, V];

type TuplifyUnion6776<T, L = LastOf6776<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6776<TuplifyUnion6776<Exclude<T, L>>, L>;

type DeepPartial6776<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6776<T[P]> }
  : T;

type Paths6776<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6776<K, Paths6776<T[K], Prev6776[D]>> : never }[keyof T]
  : never;

type Prev6776 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6776<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6776 {
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

type ConfigPaths6776 = Paths6776<NestedConfig6776>;

interface HeavyProps6776 {
  config: DeepPartial6776<NestedConfig6776>;
  path?: ConfigPaths6776;
}

const HeavyComponent6776 = memo(function HeavyComponent6776({ config }: HeavyProps6776) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6776) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6776 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6776: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6776.displayName = 'HeavyComponent6776';
export default HeavyComponent6776;
