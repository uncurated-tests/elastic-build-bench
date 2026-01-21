'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly280<T> = T extends (infer U)[]
  ? DeepReadonlyArray280<U>
  : T extends object
  ? DeepReadonlyObject280<T>
  : T;

interface DeepReadonlyArray280<T> extends ReadonlyArray<DeepReadonly280<T>> {}

type DeepReadonlyObject280<T> = {
  readonly [P in keyof T]: DeepReadonly280<T[P]>;
};

type UnionToIntersection280<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf280<T> = UnionToIntersection280<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push280<T extends unknown[], V> = [...T, V];

type TuplifyUnion280<T, L = LastOf280<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push280<TuplifyUnion280<Exclude<T, L>>, L>;

type DeepPartial280<T> = T extends object
  ? { [P in keyof T]?: DeepPartial280<T[P]> }
  : T;

type Paths280<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join280<K, Paths280<T[K], Prev280[D]>> : never }[keyof T]
  : never;

type Prev280 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join280<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig280 {
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

type ConfigPaths280 = Paths280<NestedConfig280>;

interface HeavyProps280 {
  config: DeepPartial280<NestedConfig280>;
  path?: ConfigPaths280;
}

const HeavyComponent280 = memo(function HeavyComponent280({ config }: HeavyProps280) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 280) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-280 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H280: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent280.displayName = 'HeavyComponent280';
export default HeavyComponent280;
