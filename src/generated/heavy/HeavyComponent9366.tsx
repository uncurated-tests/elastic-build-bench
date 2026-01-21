'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9366<T> = T extends (infer U)[]
  ? DeepReadonlyArray9366<U>
  : T extends object
  ? DeepReadonlyObject9366<T>
  : T;

interface DeepReadonlyArray9366<T> extends ReadonlyArray<DeepReadonly9366<T>> {}

type DeepReadonlyObject9366<T> = {
  readonly [P in keyof T]: DeepReadonly9366<T[P]>;
};

type UnionToIntersection9366<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9366<T> = UnionToIntersection9366<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9366<T extends unknown[], V> = [...T, V];

type TuplifyUnion9366<T, L = LastOf9366<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9366<TuplifyUnion9366<Exclude<T, L>>, L>;

type DeepPartial9366<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9366<T[P]> }
  : T;

type Paths9366<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9366<K, Paths9366<T[K], Prev9366[D]>> : never }[keyof T]
  : never;

type Prev9366 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9366<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9366 {
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

type ConfigPaths9366 = Paths9366<NestedConfig9366>;

interface HeavyProps9366 {
  config: DeepPartial9366<NestedConfig9366>;
  path?: ConfigPaths9366;
}

const HeavyComponent9366 = memo(function HeavyComponent9366({ config }: HeavyProps9366) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9366) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9366 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9366: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9366.displayName = 'HeavyComponent9366';
export default HeavyComponent9366;
