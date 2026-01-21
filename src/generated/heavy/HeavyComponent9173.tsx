'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9173<T> = T extends (infer U)[]
  ? DeepReadonlyArray9173<U>
  : T extends object
  ? DeepReadonlyObject9173<T>
  : T;

interface DeepReadonlyArray9173<T> extends ReadonlyArray<DeepReadonly9173<T>> {}

type DeepReadonlyObject9173<T> = {
  readonly [P in keyof T]: DeepReadonly9173<T[P]>;
};

type UnionToIntersection9173<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9173<T> = UnionToIntersection9173<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9173<T extends unknown[], V> = [...T, V];

type TuplifyUnion9173<T, L = LastOf9173<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9173<TuplifyUnion9173<Exclude<T, L>>, L>;

type DeepPartial9173<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9173<T[P]> }
  : T;

type Paths9173<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9173<K, Paths9173<T[K], Prev9173[D]>> : never }[keyof T]
  : never;

type Prev9173 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9173<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9173 {
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

type ConfigPaths9173 = Paths9173<NestedConfig9173>;

interface HeavyProps9173 {
  config: DeepPartial9173<NestedConfig9173>;
  path?: ConfigPaths9173;
}

const HeavyComponent9173 = memo(function HeavyComponent9173({ config }: HeavyProps9173) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9173) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9173 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9173: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9173.displayName = 'HeavyComponent9173';
export default HeavyComponent9173;
