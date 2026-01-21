'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9178<T> = T extends (infer U)[]
  ? DeepReadonlyArray9178<U>
  : T extends object
  ? DeepReadonlyObject9178<T>
  : T;

interface DeepReadonlyArray9178<T> extends ReadonlyArray<DeepReadonly9178<T>> {}

type DeepReadonlyObject9178<T> = {
  readonly [P in keyof T]: DeepReadonly9178<T[P]>;
};

type UnionToIntersection9178<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9178<T> = UnionToIntersection9178<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9178<T extends unknown[], V> = [...T, V];

type TuplifyUnion9178<T, L = LastOf9178<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9178<TuplifyUnion9178<Exclude<T, L>>, L>;

type DeepPartial9178<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9178<T[P]> }
  : T;

type Paths9178<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9178<K, Paths9178<T[K], Prev9178[D]>> : never }[keyof T]
  : never;

type Prev9178 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9178<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9178 {
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

type ConfigPaths9178 = Paths9178<NestedConfig9178>;

interface HeavyProps9178 {
  config: DeepPartial9178<NestedConfig9178>;
  path?: ConfigPaths9178;
}

const HeavyComponent9178 = memo(function HeavyComponent9178({ config }: HeavyProps9178) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9178) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9178 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9178: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9178.displayName = 'HeavyComponent9178';
export default HeavyComponent9178;
