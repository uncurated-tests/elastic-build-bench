'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly867<T> = T extends (infer U)[]
  ? DeepReadonlyArray867<U>
  : T extends object
  ? DeepReadonlyObject867<T>
  : T;

interface DeepReadonlyArray867<T> extends ReadonlyArray<DeepReadonly867<T>> {}

type DeepReadonlyObject867<T> = {
  readonly [P in keyof T]: DeepReadonly867<T[P]>;
};

type UnionToIntersection867<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf867<T> = UnionToIntersection867<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push867<T extends unknown[], V> = [...T, V];

type TuplifyUnion867<T, L = LastOf867<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push867<TuplifyUnion867<Exclude<T, L>>, L>;

type DeepPartial867<T> = T extends object
  ? { [P in keyof T]?: DeepPartial867<T[P]> }
  : T;

type Paths867<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join867<K, Paths867<T[K], Prev867[D]>> : never }[keyof T]
  : never;

type Prev867 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join867<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig867 {
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

type ConfigPaths867 = Paths867<NestedConfig867>;

interface HeavyProps867 {
  config: DeepPartial867<NestedConfig867>;
  path?: ConfigPaths867;
}

const HeavyComponent867 = memo(function HeavyComponent867({ config }: HeavyProps867) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 867) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-867 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H867: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent867.displayName = 'HeavyComponent867';
export default HeavyComponent867;
