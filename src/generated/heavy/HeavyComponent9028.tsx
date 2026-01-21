'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9028<T> = T extends (infer U)[]
  ? DeepReadonlyArray9028<U>
  : T extends object
  ? DeepReadonlyObject9028<T>
  : T;

interface DeepReadonlyArray9028<T> extends ReadonlyArray<DeepReadonly9028<T>> {}

type DeepReadonlyObject9028<T> = {
  readonly [P in keyof T]: DeepReadonly9028<T[P]>;
};

type UnionToIntersection9028<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9028<T> = UnionToIntersection9028<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9028<T extends unknown[], V> = [...T, V];

type TuplifyUnion9028<T, L = LastOf9028<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9028<TuplifyUnion9028<Exclude<T, L>>, L>;

type DeepPartial9028<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9028<T[P]> }
  : T;

type Paths9028<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9028<K, Paths9028<T[K], Prev9028[D]>> : never }[keyof T]
  : never;

type Prev9028 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9028<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9028 {
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

type ConfigPaths9028 = Paths9028<NestedConfig9028>;

interface HeavyProps9028 {
  config: DeepPartial9028<NestedConfig9028>;
  path?: ConfigPaths9028;
}

const HeavyComponent9028 = memo(function HeavyComponent9028({ config }: HeavyProps9028) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9028) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9028 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9028: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9028.displayName = 'HeavyComponent9028';
export default HeavyComponent9028;
