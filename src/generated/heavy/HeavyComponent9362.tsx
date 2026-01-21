'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9362<T> = T extends (infer U)[]
  ? DeepReadonlyArray9362<U>
  : T extends object
  ? DeepReadonlyObject9362<T>
  : T;

interface DeepReadonlyArray9362<T> extends ReadonlyArray<DeepReadonly9362<T>> {}

type DeepReadonlyObject9362<T> = {
  readonly [P in keyof T]: DeepReadonly9362<T[P]>;
};

type UnionToIntersection9362<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9362<T> = UnionToIntersection9362<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9362<T extends unknown[], V> = [...T, V];

type TuplifyUnion9362<T, L = LastOf9362<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9362<TuplifyUnion9362<Exclude<T, L>>, L>;

type DeepPartial9362<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9362<T[P]> }
  : T;

type Paths9362<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9362<K, Paths9362<T[K], Prev9362[D]>> : never }[keyof T]
  : never;

type Prev9362 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9362<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9362 {
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

type ConfigPaths9362 = Paths9362<NestedConfig9362>;

interface HeavyProps9362 {
  config: DeepPartial9362<NestedConfig9362>;
  path?: ConfigPaths9362;
}

const HeavyComponent9362 = memo(function HeavyComponent9362({ config }: HeavyProps9362) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9362) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9362 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9362: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9362.displayName = 'HeavyComponent9362';
export default HeavyComponent9362;
