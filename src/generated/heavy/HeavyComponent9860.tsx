'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9860<T> = T extends (infer U)[]
  ? DeepReadonlyArray9860<U>
  : T extends object
  ? DeepReadonlyObject9860<T>
  : T;

interface DeepReadonlyArray9860<T> extends ReadonlyArray<DeepReadonly9860<T>> {}

type DeepReadonlyObject9860<T> = {
  readonly [P in keyof T]: DeepReadonly9860<T[P]>;
};

type UnionToIntersection9860<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9860<T> = UnionToIntersection9860<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9860<T extends unknown[], V> = [...T, V];

type TuplifyUnion9860<T, L = LastOf9860<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9860<TuplifyUnion9860<Exclude<T, L>>, L>;

type DeepPartial9860<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9860<T[P]> }
  : T;

type Paths9860<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9860<K, Paths9860<T[K], Prev9860[D]>> : never }[keyof T]
  : never;

type Prev9860 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9860<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9860 {
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

type ConfigPaths9860 = Paths9860<NestedConfig9860>;

interface HeavyProps9860 {
  config: DeepPartial9860<NestedConfig9860>;
  path?: ConfigPaths9860;
}

const HeavyComponent9860 = memo(function HeavyComponent9860({ config }: HeavyProps9860) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9860) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9860 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9860: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9860.displayName = 'HeavyComponent9860';
export default HeavyComponent9860;
