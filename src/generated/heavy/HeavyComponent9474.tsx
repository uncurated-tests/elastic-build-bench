'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9474<T> = T extends (infer U)[]
  ? DeepReadonlyArray9474<U>
  : T extends object
  ? DeepReadonlyObject9474<T>
  : T;

interface DeepReadonlyArray9474<T> extends ReadonlyArray<DeepReadonly9474<T>> {}

type DeepReadonlyObject9474<T> = {
  readonly [P in keyof T]: DeepReadonly9474<T[P]>;
};

type UnionToIntersection9474<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9474<T> = UnionToIntersection9474<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9474<T extends unknown[], V> = [...T, V];

type TuplifyUnion9474<T, L = LastOf9474<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9474<TuplifyUnion9474<Exclude<T, L>>, L>;

type DeepPartial9474<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9474<T[P]> }
  : T;

type Paths9474<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9474<K, Paths9474<T[K], Prev9474[D]>> : never }[keyof T]
  : never;

type Prev9474 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9474<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9474 {
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

type ConfigPaths9474 = Paths9474<NestedConfig9474>;

interface HeavyProps9474 {
  config: DeepPartial9474<NestedConfig9474>;
  path?: ConfigPaths9474;
}

const HeavyComponent9474 = memo(function HeavyComponent9474({ config }: HeavyProps9474) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9474) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9474 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9474: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9474.displayName = 'HeavyComponent9474';
export default HeavyComponent9474;
