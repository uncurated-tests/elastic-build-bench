'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9566<T> = T extends (infer U)[]
  ? DeepReadonlyArray9566<U>
  : T extends object
  ? DeepReadonlyObject9566<T>
  : T;

interface DeepReadonlyArray9566<T> extends ReadonlyArray<DeepReadonly9566<T>> {}

type DeepReadonlyObject9566<T> = {
  readonly [P in keyof T]: DeepReadonly9566<T[P]>;
};

type UnionToIntersection9566<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9566<T> = UnionToIntersection9566<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9566<T extends unknown[], V> = [...T, V];

type TuplifyUnion9566<T, L = LastOf9566<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9566<TuplifyUnion9566<Exclude<T, L>>, L>;

type DeepPartial9566<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9566<T[P]> }
  : T;

type Paths9566<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9566<K, Paths9566<T[K], Prev9566[D]>> : never }[keyof T]
  : never;

type Prev9566 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9566<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9566 {
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

type ConfigPaths9566 = Paths9566<NestedConfig9566>;

interface HeavyProps9566 {
  config: DeepPartial9566<NestedConfig9566>;
  path?: ConfigPaths9566;
}

const HeavyComponent9566 = memo(function HeavyComponent9566({ config }: HeavyProps9566) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9566) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9566 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9566: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9566.displayName = 'HeavyComponent9566';
export default HeavyComponent9566;
