'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9597<T> = T extends (infer U)[]
  ? DeepReadonlyArray9597<U>
  : T extends object
  ? DeepReadonlyObject9597<T>
  : T;

interface DeepReadonlyArray9597<T> extends ReadonlyArray<DeepReadonly9597<T>> {}

type DeepReadonlyObject9597<T> = {
  readonly [P in keyof T]: DeepReadonly9597<T[P]>;
};

type UnionToIntersection9597<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9597<T> = UnionToIntersection9597<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9597<T extends unknown[], V> = [...T, V];

type TuplifyUnion9597<T, L = LastOf9597<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9597<TuplifyUnion9597<Exclude<T, L>>, L>;

type DeepPartial9597<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9597<T[P]> }
  : T;

type Paths9597<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9597<K, Paths9597<T[K], Prev9597[D]>> : never }[keyof T]
  : never;

type Prev9597 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9597<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9597 {
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

type ConfigPaths9597 = Paths9597<NestedConfig9597>;

interface HeavyProps9597 {
  config: DeepPartial9597<NestedConfig9597>;
  path?: ConfigPaths9597;
}

const HeavyComponent9597 = memo(function HeavyComponent9597({ config }: HeavyProps9597) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9597) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9597 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9597: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9597.displayName = 'HeavyComponent9597';
export default HeavyComponent9597;
