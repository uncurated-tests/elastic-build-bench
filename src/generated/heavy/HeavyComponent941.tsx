'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly941<T> = T extends (infer U)[]
  ? DeepReadonlyArray941<U>
  : T extends object
  ? DeepReadonlyObject941<T>
  : T;

interface DeepReadonlyArray941<T> extends ReadonlyArray<DeepReadonly941<T>> {}

type DeepReadonlyObject941<T> = {
  readonly [P in keyof T]: DeepReadonly941<T[P]>;
};

type UnionToIntersection941<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf941<T> = UnionToIntersection941<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push941<T extends unknown[], V> = [...T, V];

type TuplifyUnion941<T, L = LastOf941<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push941<TuplifyUnion941<Exclude<T, L>>, L>;

type DeepPartial941<T> = T extends object
  ? { [P in keyof T]?: DeepPartial941<T[P]> }
  : T;

type Paths941<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join941<K, Paths941<T[K], Prev941[D]>> : never }[keyof T]
  : never;

type Prev941 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join941<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig941 {
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

type ConfigPaths941 = Paths941<NestedConfig941>;

interface HeavyProps941 {
  config: DeepPartial941<NestedConfig941>;
  path?: ConfigPaths941;
}

const HeavyComponent941 = memo(function HeavyComponent941({ config }: HeavyProps941) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 941) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-941 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H941: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent941.displayName = 'HeavyComponent941';
export default HeavyComponent941;
