'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3889<T> = T extends (infer U)[]
  ? DeepReadonlyArray3889<U>
  : T extends object
  ? DeepReadonlyObject3889<T>
  : T;

interface DeepReadonlyArray3889<T> extends ReadonlyArray<DeepReadonly3889<T>> {}

type DeepReadonlyObject3889<T> = {
  readonly [P in keyof T]: DeepReadonly3889<T[P]>;
};

type UnionToIntersection3889<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3889<T> = UnionToIntersection3889<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3889<T extends unknown[], V> = [...T, V];

type TuplifyUnion3889<T, L = LastOf3889<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3889<TuplifyUnion3889<Exclude<T, L>>, L>;

type DeepPartial3889<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3889<T[P]> }
  : T;

type Paths3889<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3889<K, Paths3889<T[K], Prev3889[D]>> : never }[keyof T]
  : never;

type Prev3889 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3889<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3889 {
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

type ConfigPaths3889 = Paths3889<NestedConfig3889>;

interface HeavyProps3889 {
  config: DeepPartial3889<NestedConfig3889>;
  path?: ConfigPaths3889;
}

const HeavyComponent3889 = memo(function HeavyComponent3889({ config }: HeavyProps3889) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3889) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3889 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3889: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3889.displayName = 'HeavyComponent3889';
export default HeavyComponent3889;
