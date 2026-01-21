'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9800<T> = T extends (infer U)[]
  ? DeepReadonlyArray9800<U>
  : T extends object
  ? DeepReadonlyObject9800<T>
  : T;

interface DeepReadonlyArray9800<T> extends ReadonlyArray<DeepReadonly9800<T>> {}

type DeepReadonlyObject9800<T> = {
  readonly [P in keyof T]: DeepReadonly9800<T[P]>;
};

type UnionToIntersection9800<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9800<T> = UnionToIntersection9800<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9800<T extends unknown[], V> = [...T, V];

type TuplifyUnion9800<T, L = LastOf9800<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9800<TuplifyUnion9800<Exclude<T, L>>, L>;

type DeepPartial9800<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9800<T[P]> }
  : T;

type Paths9800<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9800<K, Paths9800<T[K], Prev9800[D]>> : never }[keyof T]
  : never;

type Prev9800 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9800<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9800 {
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

type ConfigPaths9800 = Paths9800<NestedConfig9800>;

interface HeavyProps9800 {
  config: DeepPartial9800<NestedConfig9800>;
  path?: ConfigPaths9800;
}

const HeavyComponent9800 = memo(function HeavyComponent9800({ config }: HeavyProps9800) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9800) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9800 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9800: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9800.displayName = 'HeavyComponent9800';
export default HeavyComponent9800;
