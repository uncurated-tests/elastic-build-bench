'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly358<T> = T extends (infer U)[]
  ? DeepReadonlyArray358<U>
  : T extends object
  ? DeepReadonlyObject358<T>
  : T;

interface DeepReadonlyArray358<T> extends ReadonlyArray<DeepReadonly358<T>> {}

type DeepReadonlyObject358<T> = {
  readonly [P in keyof T]: DeepReadonly358<T[P]>;
};

type UnionToIntersection358<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf358<T> = UnionToIntersection358<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push358<T extends unknown[], V> = [...T, V];

type TuplifyUnion358<T, L = LastOf358<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push358<TuplifyUnion358<Exclude<T, L>>, L>;

type DeepPartial358<T> = T extends object
  ? { [P in keyof T]?: DeepPartial358<T[P]> }
  : T;

type Paths358<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join358<K, Paths358<T[K], Prev358[D]>> : never }[keyof T]
  : never;

type Prev358 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join358<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig358 {
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

type ConfigPaths358 = Paths358<NestedConfig358>;

interface HeavyProps358 {
  config: DeepPartial358<NestedConfig358>;
  path?: ConfigPaths358;
}

const HeavyComponent358 = memo(function HeavyComponent358({ config }: HeavyProps358) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 358) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-358 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H358: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent358.displayName = 'HeavyComponent358';
export default HeavyComponent358;
