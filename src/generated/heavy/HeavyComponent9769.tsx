'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9769<T> = T extends (infer U)[]
  ? DeepReadonlyArray9769<U>
  : T extends object
  ? DeepReadonlyObject9769<T>
  : T;

interface DeepReadonlyArray9769<T> extends ReadonlyArray<DeepReadonly9769<T>> {}

type DeepReadonlyObject9769<T> = {
  readonly [P in keyof T]: DeepReadonly9769<T[P]>;
};

type UnionToIntersection9769<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9769<T> = UnionToIntersection9769<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9769<T extends unknown[], V> = [...T, V];

type TuplifyUnion9769<T, L = LastOf9769<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9769<TuplifyUnion9769<Exclude<T, L>>, L>;

type DeepPartial9769<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9769<T[P]> }
  : T;

type Paths9769<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9769<K, Paths9769<T[K], Prev9769[D]>> : never }[keyof T]
  : never;

type Prev9769 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9769<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9769 {
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

type ConfigPaths9769 = Paths9769<NestedConfig9769>;

interface HeavyProps9769 {
  config: DeepPartial9769<NestedConfig9769>;
  path?: ConfigPaths9769;
}

const HeavyComponent9769 = memo(function HeavyComponent9769({ config }: HeavyProps9769) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9769) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9769 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9769: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9769.displayName = 'HeavyComponent9769';
export default HeavyComponent9769;
