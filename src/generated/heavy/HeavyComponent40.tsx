'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly40<T> = T extends (infer U)[]
  ? DeepReadonlyArray40<U>
  : T extends object
  ? DeepReadonlyObject40<T>
  : T;

interface DeepReadonlyArray40<T> extends ReadonlyArray<DeepReadonly40<T>> {}

type DeepReadonlyObject40<T> = {
  readonly [P in keyof T]: DeepReadonly40<T[P]>;
};

type UnionToIntersection40<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf40<T> = UnionToIntersection40<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push40<T extends unknown[], V> = [...T, V];

type TuplifyUnion40<T, L = LastOf40<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push40<TuplifyUnion40<Exclude<T, L>>, L>;

type DeepPartial40<T> = T extends object
  ? { [P in keyof T]?: DeepPartial40<T[P]> }
  : T;

type Paths40<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join40<K, Paths40<T[K], Prev40[D]>> : never }[keyof T]
  : never;

type Prev40 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join40<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig40 {
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

type ConfigPaths40 = Paths40<NestedConfig40>;

interface HeavyProps40 {
  config: DeepPartial40<NestedConfig40>;
  path?: ConfigPaths40;
}

const HeavyComponent40 = memo(function HeavyComponent40({ config }: HeavyProps40) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 40) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-40 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H40: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent40.displayName = 'HeavyComponent40';
export default HeavyComponent40;
