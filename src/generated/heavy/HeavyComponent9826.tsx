'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9826<T> = T extends (infer U)[]
  ? DeepReadonlyArray9826<U>
  : T extends object
  ? DeepReadonlyObject9826<T>
  : T;

interface DeepReadonlyArray9826<T> extends ReadonlyArray<DeepReadonly9826<T>> {}

type DeepReadonlyObject9826<T> = {
  readonly [P in keyof T]: DeepReadonly9826<T[P]>;
};

type UnionToIntersection9826<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9826<T> = UnionToIntersection9826<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9826<T extends unknown[], V> = [...T, V];

type TuplifyUnion9826<T, L = LastOf9826<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9826<TuplifyUnion9826<Exclude<T, L>>, L>;

type DeepPartial9826<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9826<T[P]> }
  : T;

type Paths9826<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9826<K, Paths9826<T[K], Prev9826[D]>> : never }[keyof T]
  : never;

type Prev9826 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9826<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9826 {
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

type ConfigPaths9826 = Paths9826<NestedConfig9826>;

interface HeavyProps9826 {
  config: DeepPartial9826<NestedConfig9826>;
  path?: ConfigPaths9826;
}

const HeavyComponent9826 = memo(function HeavyComponent9826({ config }: HeavyProps9826) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9826) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9826 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9826: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9826.displayName = 'HeavyComponent9826';
export default HeavyComponent9826;
