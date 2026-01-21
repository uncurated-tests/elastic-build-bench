'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9025<T> = T extends (infer U)[]
  ? DeepReadonlyArray9025<U>
  : T extends object
  ? DeepReadonlyObject9025<T>
  : T;

interface DeepReadonlyArray9025<T> extends ReadonlyArray<DeepReadonly9025<T>> {}

type DeepReadonlyObject9025<T> = {
  readonly [P in keyof T]: DeepReadonly9025<T[P]>;
};

type UnionToIntersection9025<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9025<T> = UnionToIntersection9025<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9025<T extends unknown[], V> = [...T, V];

type TuplifyUnion9025<T, L = LastOf9025<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9025<TuplifyUnion9025<Exclude<T, L>>, L>;

type DeepPartial9025<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9025<T[P]> }
  : T;

type Paths9025<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9025<K, Paths9025<T[K], Prev9025[D]>> : never }[keyof T]
  : never;

type Prev9025 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9025<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9025 {
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

type ConfigPaths9025 = Paths9025<NestedConfig9025>;

interface HeavyProps9025 {
  config: DeepPartial9025<NestedConfig9025>;
  path?: ConfigPaths9025;
}

const HeavyComponent9025 = memo(function HeavyComponent9025({ config }: HeavyProps9025) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9025) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9025 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9025: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9025.displayName = 'HeavyComponent9025';
export default HeavyComponent9025;
