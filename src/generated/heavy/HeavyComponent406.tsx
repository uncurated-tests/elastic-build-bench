'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly406<T> = T extends (infer U)[]
  ? DeepReadonlyArray406<U>
  : T extends object
  ? DeepReadonlyObject406<T>
  : T;

interface DeepReadonlyArray406<T> extends ReadonlyArray<DeepReadonly406<T>> {}

type DeepReadonlyObject406<T> = {
  readonly [P in keyof T]: DeepReadonly406<T[P]>;
};

type UnionToIntersection406<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf406<T> = UnionToIntersection406<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push406<T extends unknown[], V> = [...T, V];

type TuplifyUnion406<T, L = LastOf406<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push406<TuplifyUnion406<Exclude<T, L>>, L>;

type DeepPartial406<T> = T extends object
  ? { [P in keyof T]?: DeepPartial406<T[P]> }
  : T;

type Paths406<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join406<K, Paths406<T[K], Prev406[D]>> : never }[keyof T]
  : never;

type Prev406 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join406<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig406 {
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

type ConfigPaths406 = Paths406<NestedConfig406>;

interface HeavyProps406 {
  config: DeepPartial406<NestedConfig406>;
  path?: ConfigPaths406;
}

const HeavyComponent406 = memo(function HeavyComponent406({ config }: HeavyProps406) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 406) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-406 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H406: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent406.displayName = 'HeavyComponent406';
export default HeavyComponent406;
