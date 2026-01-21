'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9409<T> = T extends (infer U)[]
  ? DeepReadonlyArray9409<U>
  : T extends object
  ? DeepReadonlyObject9409<T>
  : T;

interface DeepReadonlyArray9409<T> extends ReadonlyArray<DeepReadonly9409<T>> {}

type DeepReadonlyObject9409<T> = {
  readonly [P in keyof T]: DeepReadonly9409<T[P]>;
};

type UnionToIntersection9409<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9409<T> = UnionToIntersection9409<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9409<T extends unknown[], V> = [...T, V];

type TuplifyUnion9409<T, L = LastOf9409<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9409<TuplifyUnion9409<Exclude<T, L>>, L>;

type DeepPartial9409<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9409<T[P]> }
  : T;

type Paths9409<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9409<K, Paths9409<T[K], Prev9409[D]>> : never }[keyof T]
  : never;

type Prev9409 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9409<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9409 {
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

type ConfigPaths9409 = Paths9409<NestedConfig9409>;

interface HeavyProps9409 {
  config: DeepPartial9409<NestedConfig9409>;
  path?: ConfigPaths9409;
}

const HeavyComponent9409 = memo(function HeavyComponent9409({ config }: HeavyProps9409) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9409) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9409 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9409: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9409.displayName = 'HeavyComponent9409';
export default HeavyComponent9409;
