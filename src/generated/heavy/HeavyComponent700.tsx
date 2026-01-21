'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly700<T> = T extends (infer U)[]
  ? DeepReadonlyArray700<U>
  : T extends object
  ? DeepReadonlyObject700<T>
  : T;

interface DeepReadonlyArray700<T> extends ReadonlyArray<DeepReadonly700<T>> {}

type DeepReadonlyObject700<T> = {
  readonly [P in keyof T]: DeepReadonly700<T[P]>;
};

type UnionToIntersection700<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf700<T> = UnionToIntersection700<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push700<T extends unknown[], V> = [...T, V];

type TuplifyUnion700<T, L = LastOf700<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push700<TuplifyUnion700<Exclude<T, L>>, L>;

type DeepPartial700<T> = T extends object
  ? { [P in keyof T]?: DeepPartial700<T[P]> }
  : T;

type Paths700<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join700<K, Paths700<T[K], Prev700[D]>> : never }[keyof T]
  : never;

type Prev700 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join700<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig700 {
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

type ConfigPaths700 = Paths700<NestedConfig700>;

interface HeavyProps700 {
  config: DeepPartial700<NestedConfig700>;
  path?: ConfigPaths700;
}

const HeavyComponent700 = memo(function HeavyComponent700({ config }: HeavyProps700) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 700) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-700 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H700: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent700.displayName = 'HeavyComponent700';
export default HeavyComponent700;
