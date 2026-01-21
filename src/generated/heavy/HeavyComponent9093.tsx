'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9093<T> = T extends (infer U)[]
  ? DeepReadonlyArray9093<U>
  : T extends object
  ? DeepReadonlyObject9093<T>
  : T;

interface DeepReadonlyArray9093<T> extends ReadonlyArray<DeepReadonly9093<T>> {}

type DeepReadonlyObject9093<T> = {
  readonly [P in keyof T]: DeepReadonly9093<T[P]>;
};

type UnionToIntersection9093<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9093<T> = UnionToIntersection9093<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9093<T extends unknown[], V> = [...T, V];

type TuplifyUnion9093<T, L = LastOf9093<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9093<TuplifyUnion9093<Exclude<T, L>>, L>;

type DeepPartial9093<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9093<T[P]> }
  : T;

type Paths9093<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9093<K, Paths9093<T[K], Prev9093[D]>> : never }[keyof T]
  : never;

type Prev9093 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9093<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9093 {
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

type ConfigPaths9093 = Paths9093<NestedConfig9093>;

interface HeavyProps9093 {
  config: DeepPartial9093<NestedConfig9093>;
  path?: ConfigPaths9093;
}

const HeavyComponent9093 = memo(function HeavyComponent9093({ config }: HeavyProps9093) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9093) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9093 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9093: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9093.displayName = 'HeavyComponent9093';
export default HeavyComponent9093;
