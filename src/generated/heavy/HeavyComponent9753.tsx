'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9753<T> = T extends (infer U)[]
  ? DeepReadonlyArray9753<U>
  : T extends object
  ? DeepReadonlyObject9753<T>
  : T;

interface DeepReadonlyArray9753<T> extends ReadonlyArray<DeepReadonly9753<T>> {}

type DeepReadonlyObject9753<T> = {
  readonly [P in keyof T]: DeepReadonly9753<T[P]>;
};

type UnionToIntersection9753<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9753<T> = UnionToIntersection9753<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9753<T extends unknown[], V> = [...T, V];

type TuplifyUnion9753<T, L = LastOf9753<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9753<TuplifyUnion9753<Exclude<T, L>>, L>;

type DeepPartial9753<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9753<T[P]> }
  : T;

type Paths9753<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9753<K, Paths9753<T[K], Prev9753[D]>> : never }[keyof T]
  : never;

type Prev9753 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9753<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9753 {
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

type ConfigPaths9753 = Paths9753<NestedConfig9753>;

interface HeavyProps9753 {
  config: DeepPartial9753<NestedConfig9753>;
  path?: ConfigPaths9753;
}

const HeavyComponent9753 = memo(function HeavyComponent9753({ config }: HeavyProps9753) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9753) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9753 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9753: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9753.displayName = 'HeavyComponent9753';
export default HeavyComponent9753;
